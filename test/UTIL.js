import $ from "components/lib/jquery/dist/jquery";
import _ from "components/lib/underscore/underscore";
import config from "annotate/pdfnotes/config";
import REXMIN from "annotate/base/REXMIN";
import BROWSER from "annotate/base/BROWSER";
import DOM from "annotate/base/DOM";
import URL from "annotate/util/urlUtils";
import DateFormatter from "JMVC/vault/dateFormatter";
import URLReader from "JMVC/vault/urlReader";
var UTIL = new (function() {
    var me = this;
    var dateString = null;
    var prettyDateString = null;
    var docTypeMap = false;
    var LANG = config.i18n;
    var peCache = false;
    var wsid = '';
    var $cntr = BROWSER.isTablet ? $("#tranche") : $(window);
    var dateFormatter;

    function solidSpace(str) {
        return str.replace(REXMIN.space, "&nbsp;");
    }
    me.solidSpace = solidSpace;


    function sessionArg() {
        var snm = "atk";  // TODO - this could change - get from args
        var ret = snm + "=" + getURLAttribute(snm);
        return ret;
    }
    me.sessionArg = sessionArg;

    function addClassName(elt, cnm) {
        if (!elt.className) {
            elt.className = cnm;
        } else {
            var str = " " + elt.className + " ";
            if (str.indexOf(" " + cnm + " ") < 0) {
                elt.className += " " + cnm;
            }
        }
    }
    me.addClassName = addClassName;



    function removeClassName(elt, cnm) {
        if (elt.className) {
            var cgd = false;
            var bits = ("" + elt.className).split(" ");
            var kp = [];
            for (var i = 0; i < bits.length; i++) {
                if (bits[i] == cnm) {
                    cgd = true;
                    // leave it out
                } else {
                    kp.push(bits[i]);

                }
            }
        }
        if (cgd) {
            elt.className = kp.join(" ");
        }
    }
    me.removeClassName = removeClassName;

    function getNodeKey(){
        var params = URLReader.getQueryParameters(location.hash);
        return (params.nk) ? params.nk : "";
    }
    me.getNodeKey = getNodeKey;

    function getParentBinderInfo(){
        var params = URLReader.getQueryParameters(location.hash);
        var binderInfo = "";
        if((params.pi !== undefined) && (params.pma !== undefined) && (params.pmi !== undefined)
            && (params.pi !== null) && (params.pma !== null) && (params.pmi!== null)) {
            binderInfo = {
                pi : params.pi,
                pma : params.pma,
                pmi : params.pmi
            }
        }
        return binderInfo;
    }
    me.getParentBinderInfo = getParentBinderInfo;

    function shortTitle(ttl) {
        // POSS could split on word boundaries and cache short title
        if (ttl && ttl.length > 26) {
            ttl = ttl.substring(0, 8) + "..." + ttl.substring(ttl.length - 12);
        }
        return ttl;
    }
    me.shortTitle = shortTitle;

    function getKeyCode(ev) {
        if (ev) {
            return ev.keyCode;
        }
        if (window.event) {
            return window.event.keyCode;
        }
    }
    me.getKeyCode = getKeyCode;

    function smartTrim(txt, maxlen) {
        var ret = txt;
        if (txt.length > maxlen) {
            var ifs = txt.indexOf(" ", maxlen - 10);
            if (ifs > 0) {
                ret = txt.substring(0, ifs) + "...";
            } else {
                ret = txt.substring(0, maxlen - 3) + "...";
            }
        }
        return ret;
    }
    me.smartTrim = smartTrim;

    me.truncate = function(txt, maxlen){
        var ret = txt;
        if(txt && txt.length > maxlen){
            ret = txt.substring(0, maxlen) + "...";
        }
        return htmlEscapeString(ret);
    }

    me.getDomain = function(u) {
        return REXMIN.getDomain(u);
    }




    me.lastPathElement = function(path) {
        var ils = path.lastIndexOf("/");
        var ilb = path.lastIndexOf(REXMIN.backslash);
        if (ils > ilb) {
            path = path.substring(ils + 1);
        } else if (ilb > ils) {
            path = path.substring(ilb + 1);
        }
        return path;
    }

    me.split = function(str, sep) {
        var pos = 0;
        var pos2 = 0;
        var ret = [];

        do {
            pos2 = str.indexOf(sep, pos);
            if (pos2 > pos) {
                ret[ret.length] = str.substring(pos, pos2);
            } else {
                ret[ret.length] = str.substr(pos);
                break;
            }
            pos = pos2 + sep.length;
        } while (true);
        return ret;
    }


    function trim(str) {
        var ret = "";
        if (str && str.replace) {
        ret = str.replace(/^\s+/g, '').replace(/\s+$/g, '');
        }
        return ret;
        }
    me.trim = trim;



    function replaceAll(src, a, b) {
        var temp = src;
        var ind = temp.indexOf(a);
        while(ind != -1){
            temp = temp.replace(a, b);
            ind = temp.indexOf(a);
        }
        return temp;
    }
    me.replaceAll = replaceAll;

    me.nonTrivial = function(str) {
        var ret = false;
        if (str && me.trim(str).length > 0) {
            ret = true;
        }
        return ret;
    }

    function getTagsObject(txt) {
        var ret = {};
        if (txt) {
            var tgs = txt.split(",");
            for ( var i = 0; i < tgs.length; i++) {
                ret[me.trim(tgs[i])] = 1;
            }
        }
        return ret;
    }

    me.tagDifference = function(oldtags, newtags, store) {
        if (oldtags == newtags) {
            return "";
        }
        var ret = '';
        var ot = getTagsObject(oldtags);
        var nt = getTagsObject(newtags);
        for ( var tg in ot) {
            if (nt[tg]) {
                // no change;
            } else {
                ret += ", <strike>" + htmlEscapeString(store.deRefTags(tg)) + "</strike>";
            }
        }
        for ( var tg in nt) {
            if (ot[tg]) {
                //
            } else {
                var tagLabel = htmlEscapeString(store.getTagText(tg));
                if (tagLabel) {
                    ret += ", <span class='vv_tag'>" + tagLabel + "</span>";
                }
            }
        }
        ret = ret.substring(2);
        return ret;
    }

    // Format the current date in GMT.
    me.formatDate = function(din) {
        var d = (din ? din : new Date());
        var txt = d.getUTCFullYear() + "-" + padNum2(d.getUTCMonth() + 1) + "-"
                + padNum2(d.getUTCDate()) + " " + padNum2(d.getUTCHours())
                + ":" + padNum2(d.getMinutes()) + "." + padNum2(d.getSeconds());
        return txt;
    }

    me.standardDate = function() {
        var d = new Date();
        var ret = d.getUTCFullYear() + "-" + padNum2(d.getUTCMonth() + 1) + "-" + padNum2(d.getUTCDate());
        return ret;
    }


    function createFormatter (USER) {
        if(!dateFormatter){
            dateFormatter  = new DateFormatter(USER);
        }
    }

    me.formatHumanDate= function(date, tz){
        var d = makeDate(date);
        createFormatter(tz);
        return dateFormatter.formatHumanDateTime(d);
    }

    me.formatHumanDateTime = function(date, tz){
        var d = makeDate(date);
        createFormatter(tz);
        return dateFormatter.formatHumanDateTime(d);
    }

    me.formatDateTime = function(date, tz){
        var d = makeDate(date);
        createFormatter(tz);
        return dateFormatter.formatDateTime(d);
    }

    me.formatDateM = function(date, tz){
        var d = makeDate(date);
        createFormatter(tz);
        return dateFormatter.formatDate(d);
    }


    // Maybe need to refresh this occasionally...
    var now = new Date();
    var now_y = now.getFullYear();
    var now_m = now.getMonth();
    var now_d = now.getDate();
    var morning = new Date(now_y, now_m, now_d); // This morning...

    function padNum2(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }

    function pad3(num) {
        var ret = (num < 10 ? "00" : (num < 100 ? "0" : "")) + num;
        return ret;
    }


    function utcTime(dd) {
        return makeDate(dd).getTime();
    }
    me.utcTime = utcTime;

    function makeDate(dd) {
            // dates stored on notes etc are utc
        var uy = dd.substring(0, 4);
        var um = dd.substring(5, 7);
        var ud = dd.substring(8, 10);
        var uh = 0;
        var un = 0;
        var us = 0;
        if (dd.length >= 19) {
            uh = dd.substring(11, 13);
            un = dd.substring(14, 16);
            us = dd.substring(17, 19);
        }
        var date = new Date(Date.UTC(uy, um - 1, ud, uh, un, us));
        return date;
    }
    me.makeDate = makeDate;

    function timestamp() {
        var d = new Date();
        var ret = stdDate(d) + " " + padNum2(d.getHours()) + ":" + padNum2(d.getMinutes()) + "." +
        padNum2(d.getSeconds());
        return ret;
    }
    me.timestamp = timestamp;


    function getSecondsTime(dd) {
        var date = (dd? makeDate(dd) : new Date());
        var ret = Math.round(date.getTime() / 1000);
        return ret;
    }
    me.getSecondsTime = getSecondsTime;


    function dateHasPassed(dd) {
        return (makeDate(dd).getTime() < (new Date()).getTime());
    }
    me.dateHasPassed = dateHasPassed;

    function stdDateDMY(d, m, y) {
        var ret = y + "-" + padNum2(m) + "-" + padNum2(d);
        return ret;
    }
    me.stdDateDMY = stdDateDMY;


    function stdDate(d) {
        var ret = d.getUTCFullYear() + "-" + padNum2(d.getUTCMonth() + 1) + "-" + padNum2(d.getUTCDate());
        return ret;
    }

    function dayOfWeek(dd) {
        var date = makeDate(dd);
        var dayofweek = date.getDay();
        var ret = LANG.full_days[dayofweek];
        return ret;
    }
    me.dayOfWeek = dayOfWeek;


    function ukDate(dd) {
        var date = makeDate(dd);
        var ret = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        return ret;
    }
    me.ukDate = ukDate;


    function monthDayDate(xdate) {
        var bits = xdate.split("/");
        var yr = bits[0];
        var mo = parseInt(bits[1], 10);
        var dy = parseInt(bits[2], 10);
        var ret = LANG.full_months[mo - 1] + " " + dy + ", " + yr;
        return ret;
    }
    me.monthDayDate = monthDayDate;



    function prettyDate(dd, sep, notime) {
        if (!sep) {
            sep = " "; //&nbsp; was showing up literally
        }
        // today 12.34, 3 June 2006 1.23
        // date format 2006-01-01 10:23.12
        if (!dd) {
            return "";
        }
        var date = makeDate(dd);
        var ret = '';

        var timediff = now.getTime() - date.getTime();
        var daysdiff = timediff / (60 * 60 * 24 * 1000);

        var dat = date.getDate(); // 1 to 31

        var dayofweek = date.getDay();
        var month = date.getMonth();

        if (daysdiff < 5) {
            var time = padNum2(date.getHours()) + ":"
                    + padNum2(date.getMinutes());
            if (dayofweek == now.getDay()) {
                ret = LANG.today + (notime ? "" : sep + time);

            } else if (notime && (dayofweek + 1) % 7 == now.getDay()) {
                ret = LANG.yesterday;

            } else {
                ret = LANG.short_days[dayofweek] + (notime ? "" : sep + time);
            }
        } else if (daysdiff < 20) {
            ret = LANG.short_days[dayofweek] + sep + LANG.short_months[month]
                    + sep + dat;

        } else if (now_y == date.getFullYear()) {
            ret = LANG.short_months[month] + sep + dat;

        } else {
            ret = date.getFullYear() + sep + LANG.short_months[month] + sep
                    + dat;
        }
        return ret;
    }
    me.prettyDate = prettyDate;

    // Get the date heading for given date for notes sort.
    function prettyDay(dd) {
        return prettyDate(dd, " ", true);
    }
    me.prettyDay = prettyDay;



    function printableTime(dd) {
        var date = makeDate(dd);
        var ret = padNum2(date.getHours()) + ":" + padNum2(date.getMinutes());
        return ret;
    }
    me.printableTime = printableTime;


    me.emailName = function(email) {
        var bits = email.split("@");
        return bits[0];
    }

    me.today = function() {
        if (!dateString) {

            var d = new Date();
            dateString = '' + d.getDate() + ' '
                    + LANG.full_months[d.getMonth()] + ' ' + d.getFullYear();
        }
        return dateString;
    }

    me.getTime = function() {
        return (new Date()).getTime();
    }

    me.getPosX = function(obj) {
        var curleft = 0;

        try {
            if (obj.offsetParent != null) {
                while (obj.offsetParent) {
                    curleft += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
            } else if (obj.x) {
                curleft += obj.x;
            }
        } catch (e) {
        }

        return Number(curleft);
    }

    function getPosY(obj) {
        var curtop = 0;

        try {
            if (obj.offsetParent != null) {
                while (obj.offsetParent) {
                    curtop += obj.offsetTop;
                    obj = obj.offsetParent;
                }
            } else if (obj.y) {
                curtop += obj.y;
            }
        } catch (e) {
        }

        return Number(curtop);
    }
    me.getPosY = getPosY;


    me.yPosIn = function(elt, par) {
        var obj = elt;
        var curtop = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                curtop += obj.offsetTop;
                obj = obj.offsetParent;
                if (obj == par) {
                    break;
                }
            }
        } else if (obj.y) {
            curtop += obj.y - obj.parentNode.y; // TODO ???
        }
        return Number(curtop);
    }

    me.xPosIn = function(elt, par) {
        var obj = elt;
        var curleft = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                curleft += obj.offsetLeft;
                obj = obj.offsetParent;
                if (obj == par) {
                    break;
                }
            }
        } else if (obj.x) {
            curleft += obj.x - obj.parentNode.x; // TODO ???
        }
        return Number(curleft);
    }

    me.xPosIn = function(elt, par) {
        var obj = elt;
        var curleft = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                curleft += obj.offsetLeft;
                obj = obj.offsetParent;
                if (obj == par) {
                    break;
                }
            }
        } else if (obj.x) {
            curleft += obj.x - obj.parentNode.x; // TODO ???
        }
        return Number(curleft);
    }

    me.getElementAtIn = function(elts, ytop, ctr) {
        var a = 0;
        var b = elts.length - 1;
        while (a < b - 1) {
            var c = Math.round((a + b) /  2);
            var pdc = elts[c];
            var yp = UTIL.yPosIn(pdc, ctr);
            if (yp < ytop) {
                a = c;
            } else if (yp > ytop) {
                b = c;
            } else {
                a = c;
                b = c;
            }
        }
        return elts[a];
    }


    me.getElementAt = function(elts, ytop) {
        var a = 0;
        var b = elts.length - 1;
        while (a < b - 1) {
            var c = Math.round((a + b) /  2);
            var pdc = elts[c];
            var yp = getPosY(pdc);
            if (yp < ytop) {
                a = c;
            } else if (yp > ytop) {
                b = c;
            } else {
                a = c;
                b = c;
            }
        }
        return elts[a];
    }



    me.findPos = function(obj) {
        return [ me.getPosX(obj), me.getPosY(obj) ];
    }

    me.getLeftScrollPos = function() {
        var lpos = document.documentElement.scrollLeft ? document.documentElement.scrollLeft
                : document.body.scrollLeft;
        return lpos;
    }

    me.getTopScrollPos = function() {
        var tpos = document.documentElement.scrollTop ? document.documentElement.scrollTop
                : document.body.scrollTop;
        return tpos;
    }


    me.scrollLeft = function(){
        return $cntr.scrollLeft();
    }

    me.scrollTop = function(){
        console.log("tranche", $cntr);
        return $cntr.scrollTop();
    }


    me.windowWidth = function() {
        return jQuery(window).width();
    }

    me.windowHeight = function() {
        return jQuery(window).height();
    }


    me.windowWidth1 = function() {
        var myWidth = 0;
        if (typeof (window.innerWidth) == 'number') {
            myWidth = window.innerWidth;
        } else if (document.documentElement
                && document.documentElement.clientWidth) {
            myWidth = document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            myWidth = document.body.clientWidth;
        }
        return myWidth;
    }

    me.windowHeight1 = function() {
        var myHeight = 0;
        if (typeof (window.innerWidth) == 'number') {
            myHeight = window.innerHeight;
        } else if (document.documentElement
                && document.documentElement.clientHeight) {
            myHeight = document.documentElement.clientHeight;
        } else if (document.body && document.body.clientHeight) {
            myHeight = document.body.clientHeight;
        }
        return myHeight;
    }

    function maxChildWidth(elt) {
        var mw = 0;
        if (elt.offsetWidth && elt.offsetWidth > mw) {
            mw = elt.offsetWidth;
        }
        for ( var i = 0; i < elt.childNodes.length; i++) {
            var cw = maxChildWidth(elt.childNodes[i]);
            if (cw > mw) {
                mw = cw;
            }
        }
        return mw;
    }
    me.maxChildWidth = maxChildWidth;

    me.addMoveUpEvents = function(drag, release) {
        if (document.addEventListener) {
            document.addEventListener("mousemove", drag, true);
            document.addEventListener("mouseup", release, true);
        } else if (document.attachEvent) {
            // alert("util move up adding IE events");
            document.attachEvent("onmousemove", drag);
            document.attachEvent("onmouseup", release);
        }
    }

    me.removeMoveUpEvents = function(drag, release) {
        if (document.removeEventListener) {
            document.removeEventListener("mouseup", release, true);
            document.removeEventListener("mousemove", drag, true);
        } else if (document.detachEvent) {
            // alert("removing mouse up events");
            document.detachEvent("onmouseup", release);
            document.detachEvent("onmousemove", drag);
        }
    }

    function cleanWindow() {
        zapframe(window);
    }
    me.cleanWindow = cleanWindow;

    function zapframe(f) {
        var ret = 0;
        try {
            var tags = [ "object", "embed", "applet", "iframe" ];
            var doc = f.document;
            ret = 1;
            for (itag in tags) {
                var tag = tags[itag];
                var elts = doc.getElementsByTagName(tag);
                for ( var iel = elts.length - 1; iel >= 0; iel--) {
                    var elt = elts[iel];
                    var eid = "";
                    if (elt.id) {
                        eid = "" + elt.id;
                    }
                    if (elt) {
                        if (eid && eid.indexOf("tx_") == 0
                                || elt.id == "swfembed") {
                            // one of ours - keep it
                        } else {
                            var gone = 0;
                            if (tag == "iframe") {
                                if (elt.contentWindow) {
                                    gone = zapframe(elt.contentWindow);
                                } else {
                                    gone = zapframe(elt.contentDocument.defaultView);
                                }
                            }
                            if (gone == 0) {
                                var repl = DOM.bareDiv();
                                repl.style.width = elt.width;
                                repl.style.height = elt.height;
                                repl.innerHTML = '<del>' + tag + '</del>';
                                elt.parentNode.replaceChild(repl, elt);
                            }
                        }
                    }
                }
            }
        } catch (e) {
            ret = 0;
        }
        return ret;
    }

    me.hasClassName = function(el, name) {
        var ecn = "  " + el.className + " ";
        return (ecn.indexOf(" " + name + " ") > 0);
    }

    me.windowShowURL = function(url) {

        var winRef = window
                .open(url, "Notate url",
                        "toolbar=0, menubar=0, scrollbars=1, width=500, height=650, top=100, left=500");
    }

    me.setCookie = function(name, value, days, secs) {
        var expires = "";
        if (days) {
            var date = new Date();
            if (secs) {
                date.setTime(date.getTime() + (secs * 1000));
            } else {
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            }
            expires = "; expires=" + date.toGMTString();
        }
        var str = name + "=" + value + expires + "; path=/";
        document.cookie = str;
    }

    function readCookie(name) {
        var start = document.cookie.indexOf(name + "=");
        var len = start + name.length + 1;
        if ((!start) && (name != document.cookie.substring(0, name.length))) {
            return null;
        }
        if (start == -1) {
            return null;
        }
        var end = document.cookie.indexOf(";", len);
        if (end == -1) {
            end = document.cookie.length;
        }
        return unescape(document.cookie.substring(len, end));
    }
    me.readCookie = readCookie;
    me.getCookie = readCookie;

    function deleteCookie(name, path, domain) {
        if (readCookie(name)) {
            document.cookie = name + "=" + ((path) ? ";path=" + path : "")
                    + ((domain) ? ";domain=" + domain : "")
                    + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
        }
    }
    me.deleteCookie = deleteCookie;

    me.getEvtX = function(e) {
        if (!e) {
            e = window.event;
        }
        var x = e.clientX;
        if (document.all) {
            x += document.body.parentNode.scrollLeft;
        } else {
            x += window.scrollX;
        }
        return x;
    }

    me.getEvtY = function(e) {
        if (!e) {
            e = window.event;
        }
        var y = e.clientY;
        if (document.all) {
            y += document.body.parentNode.scrollTop;
        } else {
            y += window.scrollY;
        }
        return y;
    }


    me.getAbsEvtY = function(e) {
        if (!e) {
            e = window.event;
        }
        var y = e.clientY;
        return y;
    }

    me.getAbsEvtX = function(e) {
        if (!e) {
            e = window.event;
        }
        var x = e.clientX;
        return x;
    }



    function hexOfRGB(txt) {
        var start = txt.indexOf('(', 3);
        var end = txt.indexOf(')', start + 1);
        var parts = txt.substring(start + 1, end).split(',');
        // add alpha if needed
        var ret = "#";
        for ( var i = 0; i < 3; i++) {
            ret += hexOfDec(parseInt(parts[i]));
        }
        return ret;
    }
    me.hexOfRGB = hexOfRGB;

    function hexOfDec(d) {
        var a = Math.floor(d / 16);
        var b = Math.round(d - 16 * a);
        return a.toString(16) + b.toString(16);
    }

    me.newElements = function(a0, a1) {
        // return array of elements in a1 but not in a0;
        var o = {};
        if (!a0) {
            a0 = [];
        }
        if (!a1) {
            a1 = [];
        }
        for ( var i = 0; i < a0.length; i++) {
            o[a0[i]] = 1;
        }
        var ret = [];
        for ( var i = 0; i < a1.length; i++) {
            if (!o[a1[i]]) {
                ret[ret.length] = a1[i];
            }
        }
        return ret;
    }

    me.newKeys = function(a, b) {
        // keys in b that arent in a
        var ret = {};
        var k;
        for (k in b) {
            if (k in a) {
                // not new
            } else {
                ret[k] = b[k];
            }
        }
        return ret;
    }

    function keyArray(a) {
        var ret = [];
        for ( var k in a) {
            ret[ret.length] = k;
        }
        return ret;
    }
    me.keyArray = keyArray;

    me.newKeysArray = function(a, b) {
        return me.keyArray(me.newKeys(a, b));
    }



    function commaString(a, sep) {
        if (!sep) {
            sep = " ";
        }
        var ret = "";
        for ( var i = 0; i < a.length; i++) {
            if (i > 0) {
                ret += ", ";
            }
            ret += a[i];
        }
        return ret;
    }
    me.commaString = commaString;

    function commaSortedKeys(o) {
        var a = keyArray(o);
        a.sort();
        return commaString(a);
    }
    me.commaSortedKeys = commaSortedKeys;


    me.elementMap = function(a) {
        var ret = {};
        for (var i = 0; i < a.length; i++) {
            ret[a[i]] = true;
        }
        return ret;
    }

    me.augmentElementMap = function(em, a) {
        if (a) {
            for (var i = 0; i < a.length; i++) {
                em[a[i]] = true;
            }
        }
    }


    me.addIfNew = function(a, v) {
        var got = false;
        for ( var i = 0; i < a.length; i++) {
            if (a[i] == v) {
                got = true;
                break;
            }
        }
        if (!got) {
            a[a.length] = v;
        }
    }


    me.copyMap = function(m) {
        var ret = {};
        for (var key in m) {
            ret[key] = m[key];
        }
        return ret;
    }


    me.remove = function(a, v) {
        var ind = -1;
        for ( var i = 0; i < a.length; i++) {
            if (a[i] == v) {
                ind = i;
                break;
            }
        }
        if (ind >= 0) {
            a.splice(ind, 1);
        } else {
            DOM.log("cant find " + v + " in " + a);
            for (var i = 0; i < a.length; i++) {
                DOM.log("item " + i + " " + a[i].id + " " + v.id);
            }
        }
    }

    function getHM(u) {
        u = REXMIN.newlineToComma(u);
        var bits = u.split(",");
        var ret = {};
        for ( var i = 0; i < bits.length; i++) {
            ret[trim(bits[i])] = true;
        }
        return ret;
    }

    function setRange(r, ret, nptot, val) {
        var im = r.indexOf("-");
        if (im == -1) {
            ret[parseInt(r)] = val;
        } else {
            var a = 1;
            var b = nptot;

            if (im > 0) {
                a = parseInt(r.substring(0, im));
            }
            if (im < r.length - 1) {
                b = parseInt(r.substr(im + 1));
            }
            for ( var i = a; i <= b; i++) {
                ret[i] = val;
            }
        }
    }

    function getURLAttribute(key, maxlen) {
        var str = "" + document.location;
        var io = str.indexOf("&" + key + "=");
        if (io === -1) {
            // check if it's the first querystring parameter
            io = str.indexOf("?" + key + "=");
        }
        var ret = false;
        if (io > 0) {
            var rest = str.substr(io + key.length + 2);
            var ie = rest.indexOf("&");
            if (ie < 0) {
                ie = rest.indexOf("#");
            }
            if (ie > 0) {
                ret = rest.substring(0, ie);
            } else {
                ret = rest;
            }
        }
        if (ret && maxlen) {
            ret = ret.substring(0, maxlen);
        }
        return ret;
    }
    me.getURLAttribute = getURLAttribute;


    function getURLAnchor() {
        var dl = "" + document.location;
        var ret = false;
        var h = dl.indexOf("#");
        if (h > 0) {
            ret = dl.substring(h+1, dl.length);
        }
        return ret;
    }
    me.getURLAnchor = getURLAnchor;

    function setBorderAtts(sty, att, ons, von, voff) {
        var vs = [ "Top", "Right", "Bottom", "Left" ];
        var tsts = [ "t", "r", "b", "l" ];
        for ( var i = 0; i < 4; i++) {
            var val = voff;
            if (ons.indexOf(tsts[i]) >= 0) {
                val = von;
            }
            sty["border" + vs[i] + att] = val;
        }
    }
    me.setBorderAtts = setBorderAtts;

    function getPageFromMatch(match) {
        var ret = -1;
        if (match.indexOf("line_") == 0) {
            var iu = match.indexOf("_", 5);
            ret = parseInt(match.substring(5, iu));

        } else {
            var bits = match.split(":");
            if (bits.length == 3) {
                // page-xxx:word:word xxx starts from 1, but we want it from 0
                ret = bits[0].substring(5) - 1;

            } else if (bits.length > 1) {
            var pp = parseInt(bits[1]);
            if (bits[0] == "TR") {
                // transcripts start at 0
                ret = pp;
            } else {
                ret = pp -1;
                // everything else starts at page 1
            }
            }
        }
        return ret;
    }
    me.getPageFromMatch = getPageFromMatch;

    function arraySubtract(a, b, att) {
        // return an array of those elements of a that aren't in b;
        // if att is set, it returns the elements for which a[i][att] is not in
        // b (ie, a is an array of objects
        // and we want to remove the ones with a value for the "att" property
        // that occurs in b)

        var hs = {};
        for ( var i = 0; i < b.length; i++) {
            hs[b[i]] = true;
        }
        var ret = [];
        for ( var i = 0; i < a.length; i++) {
            if ((att && hs[a[i][att]]) || hs[a[i]]) {
                // leave it out
            } else {
                ret[ret.length] = a[i];
            }
        }
        return ret;
    }
    me.arraySubtract = arraySubtract;

    function updateDocInvitees(doc, ems, uninv) {
            if (uninv) {
                if (doc.readers) {
                    doc.readers = arraySubtract(doc.readers, ems, 'email');
                }
                if (doc.invited) {
                    doc.invited = arraySubtract(doc.invited, ems);
                }

            } else {
                // just add them to the invited list - shouldn't be there
                // already,
                // but doesn't matter much if they are
                if (!doc.invited) {
                    doc.invited = [];
                }
                for ( var i = 0; i < ems.length; i++) {
                    doc.invited[doc.invited.length] = ems[i];
                }
            }

    }
    me.updateDocInvitees = updateDocInvitees;

    function commaAnd(list) {
        ret = "";

        for ( var i = 0; i < list.length; i++) {
            ret += list[i];
            if (i < list.length - 2) {
                ret += ", ";
            } else if (i == list.length - 2) {
                ret += " and ";
            }
        }
        return ret;
    }
    me.commaAnd = commaAnd;


    function valueArray(obj) {
        var ret = [];
        for (var key in obj) {
            ret[ret.length] = obj[key];
        }
        return ret;
    }
    me.valueArray = valueArray;

    function sortedKeys(obj) {
        var a = [];
        for ( var elt in obj) {
            a[a.length] = elt;
        }
        a.sort();
        return a;
    }
    me.sortedKeys = sortedKeys;

    function keySortedValues(obj) {
        var a = sortedKeys(obj);
        var ret = [];
        for ( var i = 0; i < a.length; i++) {
            ret[ret.length] = obj[a[i]];
        }
        return ret;
    }

    function sortedValues(obj, att) {
        var a = [];
        for ( var key in obj) {
            a[a.length] = obj[key];
        }
        propertySort(a, att);
        return a;
    }
    me.sortedValues = sortedValues;

    function propertySort(a, att) {
        a.sort(cpr);
        function cpr(x, y) {
            xa = x[att];
            ya = y[att];
            return (xa < ya ? -1 : (xa > ya ? 1 : 0));
        }
        return a;
    }
    me.propertySort = propertySort;


    function fieldSortedElements(arr, att) {
        var ret = [];
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i];
            if (a.hasOwnProperty(att)) {
                ret[ret.length] = a;
            }
        }
        propertySort(ret, att);
        return ret;
    }
    me.fieldSortedElements = fieldSortedElements;


    function countKeys(a) {
        var ret = 0;
        for (var elt in a) {
            ret += 1;
        }
        return ret;
    }
    me.countKeys = countKeys;


    function elementFieldValues(arr, att) {
        var ret = [];
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i];
            if (a.hasOwnProperty(att)) {
                ret[i] = a[att];
            } else {
                ret[i] = "";
            }
        }
        return ret;
    }
    me.elementFieldValues = elementFieldValues;



    // RCC - not good, use own collection structure where we need this? TODO
    function newIDForMap(map, pfx) {
        if (!pfx) {
            pfx = "";
        }
        var ret = 1;
        while (map[pfx + ret]) {
            ret += 1;
        }
        return pfx + ret;
    }
    me.newIDForMap = newIDForMap;

    function newID(arr) {
        var id = 0;
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i];
            if (a.id >= id) {
                id = a.id + 1;
            }
        }
        return id;
    }
    me.newID = newID;


    function newPrefixID(arr) {
        var a = {};
        for (var i = 0; i < arr.length; i++) {
            a[arr[i].id] = true;
        }
        var i = 0;
        while (a["r" + i]) {
            i += 1;
        }
        return "r" + i;
    }
    me.newPrefixID = newPrefixID;




    function getIDs(arr) {
        var ret = [];
        for (var i = 0; i < arr.length; i++) {
            ret[ret.length] = arr[i].id;
        }
        return ret;
    }
    me.getIDs = getIDs;

    function removeItemByID(arr, id) {
        var ind = -1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                ind = i;
            }
        }
        if (ind >= 0) {
            arr.splice(ind, 1);
        }
    }
    me.removeItemByID = removeItemByID;




    function makeIDMap(arr) {
        var ret = {};
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i];
            ret[a.id] = a;
        }
        return ret;
    }
    me.makeIDMap = makeIDMap;



    function containsByID(arr, dat) {
        return (idpos(arr, dat) >= 0);
    }
    me.containsByID = containsByID;

    function idpos(arr, dat) {
        var ret = -1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id && arr[i].id == dat.id) {
                ret = i;
                break;
            }
        }
        return ret;
    }

    function replaceByID(arr, dat) {
        var ret = false;
        var ip = idpos(arr, dat);
        if (op >= 0) {
            arr.splice(ip, 1, dat);
            return ret;
        }
        return ret;
    }
    me.replaceByID = replaceByID;

    function clearSpecial(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].special = false;
        }
    }
    me.clearSpecial = clearSpecial;


    function sortSpecial(arr, fld) {

        var sfn = function(a, b) {
            var va = a[fld];
            var vb = b[fld];
            var ret = 0;
            if (a.special) {
                ret = -1;
            } else if (b.specal) {
                ret = 1;
            } else {
                ret = (va < vb ? -1 : (va > vb ? 1 : 0));
            }
            return ret;
        }
        arr.sort(sfn);
    }
    me.sortSpecial = sortSpecial;


    function getByField(arr, fnm, val) {
        var ret = null;
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i];
            if (a.hasOwnProperty(fnm) && a[fnm] == val) {
                ret = a;
                break;
            }
        }
        return ret;
    }
    me.getByField = getByField;


    function addDefaults(tgt, arr) {
        for (var key in arr) {
            if (tgt.hasOwnProperty(key)) {
                // ok
            } else {
                tgt[key] = arr[key];
            }
        }
    }
    me.addDefaults = addDefaults;

    function isset(str) {
        var ret = false;
        if (str) {
            if (typeof(str) == "string") {
                if (str == "" || str == "0" || str == "no") {
                    ret = false;
                } else {
                    ret = true;
                }
            } else if (typeof(str) == "number" && str > 0) {
                ret = true;
            }
        }
        return ret;
    }
    me.isset = isset;


    function tagsToObject(txt) {
        var ret = {};
        if (txt) {
            var tgs = txt.split(",");
            for ( var i = 0; i < tgs.length; i++) {
                ret[UTIL.trim(tgs[i])] = 1;
            }
        }
        return ret;
    }


    function commaSplit(str) {
        var ret = [];
        if (str) {
            var bits = str.split(",");
            for (var i = 0; i < bits.length; i++) {
                var v = trim(bits[i]);
                if (v.length > 0) {
                    ret.push(v);
                }
            }
        }
        return ret;
    }
    me.commaSplit = commaSplit;
    function makeSigIDHM() {
        var ret = {};
        return ret;
    }
    me.makeSigIDHM = makeSigIDHM;

    function makeEmailIDHM() {
        var ret = {};
        return ret;
    }
    me.makeEmailIDHM = makeEmailIDHM;



    function makeIDSigHM() {
        var ret = {};
        return ret;
    }
    me.makeIDSigHM = makeIDSigHM;




    function viewsDiffer(a, b) {
        var diff = false;
        if ((!a && b) || (!b && a)) {
            diff = true;
        } else if (a && b) {
            var flds = ["date", "code", "page", "xrange", "yrange", "splash", "rotation"];
            for (var i = 0; i < flds.length; i++) {
                var f = flds[i];
                if (a[f] != b[f]) {
                    diff = true;
                }
            }
        }
        return diff;
    }
    me.viewsDiffer = viewsDiffer;


    me.fullPHPPath = function() {
        var dl = "" + document.location;
        var ip = dl.lastIndexOf("/");
        var ret = dl.substring(0, ip+1);
        return ret;
    }

    function getPageOffset(doc) {
        var ret = 1;
        if (doc.hasOwnProperty("x_pgOff")) {
            ret = parseStringInt(doc.x_pgOff);
        } else if (doc.hasOwnProperty("pageOffset")) {
            ret = parseStringInt(doc.pageOffset);
        }
        return ret;
    }
    me.getPageOffset = getPageOffset;


    function parseStringInt(str) {
        var ret = 1;
        if (!str || trim(str).length == 0) {
            ret = 1;
        } else {
            ret = parseInt(str);
        }
        return ret;
    }


    function isAdminUser() {
        var ret = false;
        ret = hasPermission("adminws") || hasPermission("workspaceAdmin");
        return ret;
    }
    me.isAdminUser = isAdminUser;



    function hasPermission(pname) {
        var ret = false;
        return ret;
    }
    me.hasPermission = hasPermission;

    function makeRandomCode(len) {
        var ret = "";
        var str = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        strlen = str.length;
        for ( var i = 0; i < len; i++) {
            var r = Math.floor(Math.random() * strlen);
            ret += str.substr(r, 1);
        }
        return ret;
    }
    me.makeRandomCode = makeRandomCode;



    function clip(a, min, max) {
        var ret = min;
        if (typeof(a) != "undefined") {
            ret = (a < min ? min : (a > max ? max : a));
        }
        return ret;
    }
    me.clip = clip;


    function pad2(n) {
        var ret = (n < 10 ? "0" : "") + n;
        return ret;
    }
    me.pad2 = pad2;


    function LabelRule(str, labelDefaults) {

        var first = 0;
        var last = 9999;
        var startNumber = 1;

        var prefix = false;
        var suffix = false;

        var donePrefix = false;

        var prefixSep = labelDefaults.sequenceSeparator;

        var minWidth = labelDefaults.sequenceWidth; // for .001
        var mainPrefix = ""; // to override bundle/tab/

        var count = 0; // count of number of times the rule has applied
        var previousLabel = false;


        var bits = str.split(":");
        var rb = bits[0].split("-");

        first = parseInt(rb[0], 10) - 1;
        if (rb.length > 1) {
        last = parseInt(rb[1], 10) - 1;
        }

        var rest = ["1"];
        if (bits.length > 1) {
            rest = bits[1].split(",");
        }
        startNumber = parseInt(rest[0], 10);

        for (var i = 1; i < rest.length; i++) {
            var bits = rest[i].split("=");
            if (bits.length == 2) {
                var name = trim(bits[0]);
                var val = trim(bits[1]);

                if (name == "prefix") {
                    prefix = val;

                } else if (name == "suffix") {
                    suffix = val;

                } else if (name == "width") {
                    minWidth = parseInt(val, 10);

                } else if (name == "sep") {
                prefixSep = val;

                } else if (name == "mainprefix") {
                mainPrefix = val;

                } else {
                    DOM.log("can't parse rule: " + str);
                }
            }
        }

        this.isGlobal = function(n) {
            var ret = false;
            if (first <= 0 && last >= n-1) {
                ret = true;
            }

            return ret;
        }


        this.applies = function(i) {
            return (i >= first && i <= last);
        }

        this.reset = function() {
            count = 0;
        }


        this.getLabel = function(i, prev, prev0, withPrefix, labelDefaults) {
            if (count == 0) {
                if (prefix == "x") {
                    // first time this rule has applied: if doing subsueqnce
                    // (prefix=x) then set the
                    // acutal prefix to this label
                    // prev0 is the label of the main sequence, prev the label
                    // of whatever sequence
                    // we're in
                    prefix = prev0;
                    donePrefix = true;

                } else if (prefix == "x.x") {
                    prefix = prev;
                    donePrefix = true;
                }
            }


            var n = startNumber + count;

            var ret = "";
            if (prefix) {
            ret += prefix;
            ret += "" + prefixSep;
            var zval = "" + n;
            if (zval.length < minWidth) {
                zval = "0000000000" + zval;
                zval = zval.substr(zval.length - minWidth);
            }
            ret += zval;

            } else {
                ret += n;
            }
            if (suffix) {
                ret += suffix;
            }

            count += 1;
            if (withPrefix && !donePrefix) {
                ret = (mainPrefix ? mainPrefix : labelDefaults.prefix) + ret;
            }

            return ret;
        }
    }




    function expandLabelRules(txt, np, withPrefix, labelDefaults) {

        var lines = txt.split("\n");
        var rules = [];
        for (var i = 0; i < lines.length; i++) {
            var lin = trim(lines[i]);
            if (lin.length > 0) {
                var lr = new LabelRule(lin, labelDefaults);

                if (rules.length == 0 && !lr.isGlobal(np)) {
                    // add a default rule
                    rules.push(new LabelRule("1:1", labelDefaults));
                }
                rules.push(lr);
            }
        }

        var nrules = rules.length;
        var ret = [];

        var prev = "1";
        var prev0 = "1";


        // apply the first rule, even if one of the others will catch the first
        // page as we want
        // the right prefixes
        if (nrules > 0 && rules[0].applies(0)) {
            prev = rules[0].getLabel(i, prev, prev0, withPrefix, labelDefaults);
            rules[0].reset();
            prev0 = prev;
        }


        for (var i = 0; i < np; i++) {
            ret[i] = "" + (i + 1); // defaults to first page = 1 if no rule

            for (var nr = nrules - 1; nr >= 0; nr--) {
                if (rules[nr].applies(i)) {
                    // if there's a rule other than the first for the first
                    // page,
                    // the first rule is still used to get the


                    ret[i] = rules[nr].getLabel(i, prev, prev0, withPrefix, labelDefaults);




                    if (nr == 0) {
                        prev0 = ret[i];
                    }
                    break;
                }
                prev = ret[i];
            }
        }
        return ret;
    }
    me.expandLabelRules = expandLabelRules;




    function getBracketed(nm, obj) {
        var ret = "";
        if (obj[nm] && trim(obj[nm]).length > 0) {
            ret = obj[nm];
        } else {
            var iob = nm.indexOf("[");
            var icb = nm.indexOf("]");
            if (icb > iob) {
                ret = nm.substring(iob+1, icb);
            }
        }
        return ret;
    }
    me.getBracketed = getBracketed;

    function base64_encode(input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var ret = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            ret += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                            keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }
        return ret;
    }
    me.base64_encode = base64_encode;


    function utf8_encode(str) {
        var string = str.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }


    function getPagePos(mat) {
        var ret = 0;
        if (mat.indexOf("page") == 0) {
            var bits = mat.split(":");
            if (bits.length >= 2) {
                ret = parseInt(bits[1]);
            }

            // all text notes come before others, sorted by word index (ie natural match order)
        } else {
            var bits = mat.split(":");
            if (bits.length >= 6) {
                if (mat.indexOf("R") == 0) {
                    ret = 10000 + parseInt(bits[3]) + 0.5 * parseInt(bits[5]);
                } else {
                    // arrows - coords are xyxy, not xywh
                    ret = 10000 + 0.5 * (parseInt(bits[3]) + parseInt(bits[5]));
                }
            }
        }
        return ret;
    }
    me.getPagePos = getPagePos;

    // Internal function used to implement `_.throttle` and `_.debounce`.
    // Used from underscore
    limit = function(func, wait, debounce) {

        var timeout;
        return function() {
        var context = this, args = arguments;
        var throttler = function() {
            timeout = null;
            func.apply(context, args);
        };
        if (debounce) clearTimeout(timeout);
        if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    };
    me.limit = limit;

    function template (tmpl, data) {
        var ret = tmpl;
        if(data){
            for(var key in data){
                ret = ret.replace(new RegExp('\\${' + key + '}', 'g'), data[key]);
            }
        }
        return ret;
    }
    me.template = template;
    /**
    * replaces tokens in the given string with the provided arguments
    * Example: replaceTokens("Hello {0}", ["Bob"]);
    * @param text
    * @param tokenArr
    */
    function replaceTokens (text, tokenArr) {
        for (var i = 0; i < tokenArr.length; i++) {
            text = text.replace("{" + i + "}", htmlEscapeString(tokenArr[i]));
        }
        return text;
    }
    me.replaceTokens = replaceTokens;

    function htmlEscapeString (str) {
        if (str) {
            return $('<div/>').text(str).html();
        } else {
            return str;
        }
    }
    me.htmlEscapeString = htmlEscapeString;

    function getEventTarget(e){
        var target;
        var event = (!e) ? window.event : e;

        if (event.target){
            target = event.target;
        } else if (event.srcElement){
            target = event.srcElement;
        }
        return target;
    }
    me.getEventTarget = getEventTarget;

    //returns the height and width of an element, even if its not connected to the dom.
    me.getDimensions = function(div){
        var $div = $(div),
            dimensions = {
                height: 0,
                width: 0
            };

        if($div.parents().last().is(document.documentElement)){
            dimensions.height = $div.height();
            dimensions.width = $div.width();
        }else{
            var $posDiv = $('<div style="position:absolute;left: -10000px"></div>').appendTo("body");
            $posDiv.append($div);
            dimensions.height = $div.height();
            dimensions.width = $div.width();

            $div.remove();
            $posDiv.remove();
        }

        return dimensions;
    }

    me.deWindows = function(txt) {
        var ret = txt.replace(/\r/g, "");
        return ret;
    }

    //@return Controller Object
    me.getDocInfoController =function (checkOpener){
        var docInfoController = null;
        var vault = UTIL.getVault(checkOpener);
        try {
            if(vault) {
                docInfoController = vault.Controllers.DocInfo3.getCurrentController();
            }
        } catch (ex) {
            throw "Error in getting veeva controller";
        }
        return docInfoController;
    }

    /**
     * To get document of vault
     */
    me.getParentDocument =function () {
        var parentDoc = null;
        if(parent.VeevaVault) { // for doc info
            parentDoc = parent.document;
        } else if(window.opener){ // for mini browser
            parentDoc = window.opener.parent.document;
        }
        return parentDoc;
    }

    /**
     * To get Vault Object from parent window
     */
    me.getVault = function(checkOpener) {
        var vault = null;
        if(checkOpener && window.opener){
            vault= window.opener.VeevaVault;
        }else if(parent && parent.VeevaVault) {
            vault= parent.VeevaVault;
        }
        return vault;
    }

    me.getSelectionType = function(mark,match){
        var type= "";

        switch(mark){
            case "line":
                type = "line";
                break;
            case "l":
                type = "text";
                if(match.indexOf("R1:") == 0) {
                    type = "region";
                }

                break;
            case "r":
                    type= "region";
                break;
            case "a":
                    type = "arrow";
                break;

            default:
                type = "text"
                break;

        }

        return type;


    }

    me.isPageLevelAnnotation = function(n){
        return ( n.match === "top" );
    }

    me.formatText = function(/*tmpl, args*/){
        var args = _.toArray(arguments);
        if(args.length > 1){
            var tmpl = args.shift();
            var iterator = function(value, key){
                tmpl = tmpl.replace('{'+key+'}', value);
            }
            if(_.isArray(args[0]) || _.isObject(args[0])){
                _.each(args[0], iterator);
            }else{
                _.each(args, iterator);
            }
            return tmpl;
        }
    }

    var httpPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    var wwwPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

    me.formatURL = function(inputText, noteId) {
        var replacedText;
        replacedText = inputText.replace(httpPattern, '<a href="$1" class="OpenUrl vv_link" data-note-id="'+ noteId+'" target="_blank" >$1</a>');
        replacedText = replacedText.replace(wwwPattern, '$1<a href="http://$2" class="OpenUrl vv_link" data-note-id="'+ noteId+'" target="_blank">$2</a>');
        return replacedText;
    }

    var props = "scrollbars=1, width=680, height=650, top=0, left=0, resizable=1";
    me.showMiniWnd = function(url, name){
        var handle = window.open(url, name, props);
        return handle;
    }

    me.appendParams = function (url, args) {
        var qs = (url.indexOf("?") > -1) ? "&" : "?";
        if (args) {
            url += qs + args;
        }
        return url;
    }

    me.isCJK = function(str){
        var matches = str.match(config.CJK_CHARACTERS) || [];
        return matches.length > 0;
    }

    me.getVeevaDoc = function(){
        var doc = {
            docId: 0,
            major: 0,
            minor: 0
        }
        var params = URL.parseQueryString();
        if(params.docId) {
            doc.docId= params.docId;
            doc.majorVersion= params.major;
            doc.minorVersion= params.minor;
        }

        return doc;

    }
});
export default UTIL;
