import config from "annotate/pdfnotes/config";
import BROWSER from "annotate/base/BROWSER";
import defaultColors from "annotate/guilib/ColorSet";

var imgPath = config.imgPath;
// IE doesn't like things competing for the mouse, so this is used
// to remove and restore drag events when someone else wants them...
mouseWatcher = null;

if (typeof(defaultColors) == "undefined") {
    defaultColors = {};
    // N.B. has to be done this way for the obfuscator. It will change the keys in a map, but not if
    // referenced as .tc etc so have to be consistent.
    defaultColors.tc = "#e0e0e0";
    defaultColors.tcb = "#e8e8e8";
    defaultColors.tcbb = "#f0f0f0";
    defaultColors.tcd = "#d0d0d0";
    defaultColors.tcdd = "#c0c0c0";
    defaultColors.tcdark = "#b0b0b0";
}


// RCC cut and pasted from the collage.js generate by Collage.java
// N.B. for IE6 also have to put correct image sizes in the cimg method.

var collage1 = {};
collage1["leftarr.png"] = [1, 1, 20, 15];
collage1["rightarr.png"] = [21, 1, 20, 15];
collage1["boxextender.png"] = [41, 1, 16, 16];
collage1["boxleftextender.png"] = [57, 1, 14, 24];
collage1["ctrl-blc.png"] = [71, 1, 6, 6];
collage1["pin-sml-tr.png"] = [77, 1, 20, 20];
collage1["upload.png"] = [97, 1, 28, 18];
collage1["camera.png"] = [125, 1, 28, 18];
collage1["email.png"] = [153, 1, 28, 18];
collage1["title2-trans-sml.png"] = [1, 25, 112, 26];
collage1["idxpin.png"] = [113, 25, 13, 19];
collage1["windowclosefaint.png"] = [126, 25, 14, 12];
collage1["hi.png"] = [140, 25, 18, 13];
collage1["strike.png"] = [158, 25, 18, 13];
collage1["insert.png"] = [176, 25, 18, 13];
collage1["notestyle.png"] = [1, 51, 30, 24];
collage1["down.png"] = [31, 51, 30, 24];
collage1["up.png"] = [61, 51, 30, 24];
collage1["index.png"] = [91, 51, 30, 24];
collage1["windowclose.png"] = [121, 51, 14, 12];
collage1["colorchooser.png"] = [135, 51, 13, 13];
collage1["selectbutton.png"] = [148, 51, 13, 13];
collage1["info.png"] = [161, 51, 20, 20];
collage1["hide.png"] = [1, 75, 22, 22];
collage1["show-b.png"] = [23, 75, 22, 22];
collage1["show-m.png"] = [45, 75, 22, 22];
collage1["show-f.png"] = [67, 75, 22, 22];
collage1["show-w.png"] = [89, 75, 22, 22];
collage1["mode-sel.png"] = [111, 75, 22, 22];
collage1["mode-fh.png"] = [133, 75, 22, 22];
collage1["toggle-fh.png"] = [155, 75, 22, 22];
collage1["bigtext.png"] = [1, 97, 24, 18];
collage1["medtext.png"] = [25, 97, 24, 18];
collage1["smltext.png"] = [49, 97, 24, 18];
collage1["borders.png"] = [73, 97, 13, 13];
collage1["pin-faint-tr.png"] = [86, 97, 20, 20];
collage1["page-gr-tr.png"] = [106, 97, 17, 18];
collage1["str-dn.png"] = [123, 97, 18, 18];
collage1["str-dn-tr.png"] = [141, 97, 18, 18];
collage1["page-tiny.png"] = [159, 97, 17, 18];
collage1["folder-gr-tr.png"] = [176, 97, 18, 15];
collage1["ltarr.png"] = [1, 117, 18, 18];
collage1["rtarr.png"] = [19, 117, 18, 18];
collage1["tr-rt-tr.png"] = [37, 117, 20, 20];
collage1["newnote.png"] = [57, 117, 20, 18];
collage1["share-sml.png"] = [77, 117, 19, 18];
collage1["publish-sml.png"] = [96, 117, 20, 18];
collage1["vstr-rt.png"] = [116, 117, 14, 10];
collage1["vstr-dn.png"] = [130, 117, 14, 10];
collage1["priv-amber.png"] = [144, 117, 12, 12];
collage1["priv-red.png"] = [156, 117, 12, 12];
collage1["rnhlt.png"] = [168, 117, 20, 19];
collage1["left-arrow-sml.png"] = [1, 137, 31, 25];
collage1["right-arrow-sml.png"] = [32, 137, 31, 25];
collage1["up-arrow-sml.png"] = [63, 137, 22, 25];
collage1["list.png"] = [85, 137, 22, 18];
collage1["thumb.png"] = [107, 137, 15, 18];
collage1["pin-sml.png"] = [122, 137, 20, 20];
collage1["pages-tr.png"] = [142, 137, 34, 18];
collage1["tr-dn-tr.png"] = [176, 137, 20, 20];
collage1["link-sml.png"] = [1, 162, 16, 12];
collage1["updown.png"] = [17, 162, 20, 18];
collage1["selectbuttonw.png"] = [37, 162, 13, 13];
collage1["tick-tr.png"] = [50, 162, 18, 18];


var collage3 = {};
collage3["folder-bmed.png"] = [1, 1, 64, 45];
collage3["folder-med.png"] = [65, 1, 27, 28];
collage3["sharers.png"] = [92, 1, 24, 30];
collage3["homepin.png"] = [116, 1, 24, 30];
collage3["pagepin.png"] = [140, 1, 24, 30];
collage3["snapshot.png"] = [164, 1, 27, 30];
collage3["genericdoc.png"] = [191, 1, 24, 30];
collage3["mag40.png"] = [215, 1, 25, 30];
collage3["home1.png"] = [1, 46, 40, 40];
collage3["docs1.png"] = [41, 46, 40, 40];
collage3["pin1.png"] = [81, 46, 40, 40];
collage3["account1.png"] = [121, 46, 40, 40];
collage3["info1.png"] = [161, 46, 40, 40];
collage3["logout1.png"] = [201, 46, 40, 40];
collage3["home2.png"] = [1, 86, 40, 40];
collage3["docs2.png"] = [41, 86, 40, 40];
collage3["pin2.png"] = [81, 86, 40, 40];
collage3["account2.png"] = [121, 86, 40, 40];
collage3["info2.png"] = [161, 86, 40, 40];
collage3["logout2.png"] = [201, 86, 40, 40];
collage3["home3.png"] = [1, 126, 40, 40];
collage3["docs3.png"] = [41, 126, 40, 40];
collage3["pin3.png"] = [81, 126, 40, 40];
collage3["account3.png"] = [121, 126, 40, 40];
collage3["info3.png"] = [161, 126, 40, 40];
collage3["logout3.png"] = [201, 126, 40, 40];
collage3["home4.png"] = [1, 166, 40, 40];
collage3["docs4.png"] = [41, 166, 40, 40];
collage3["pin4.png"] = [81, 166, 40, 40];
collage3["account4.png"] = [121, 166, 40, 40];
collage3["info4.png"] = [161, 166, 40, 40];
collage3["logout4.png"] = [201, 166, 40, 40];
collage3["home5.png"] = [1, 206, 40, 40];
collage3["docs5.png"] = [41, 206, 40, 40];
collage3["pin5.png"] = [81, 206, 40, 40];
collage3["account5.png"] = [121, 206, 40, 40];
collage3["info5.png"] = [161, 206, 40, 40];
collage3["logout5.png"] = [201, 206, 40, 40];

function docEID(eid) {
    return document.getElementById(eid);
}

function colimg(fnm, divin) {
var colfnm = null;
var dims = null;
var imw = 0;
var imh = 0;

if (collage1[fnm]) {
    colfnm = "collage1.png";
    var dims = collage1[fnm];
    imw = 196;
    imh = 180;


} else if (collage3[fnm]) {
    colfnm = "collage3.png";
    var dims = collage3[fnm];
    imw = 241;
    imh = 246;

} else {
    return DOM.img(null, fnm);

}
return imgfromcol(colfnm, imw, imh, dims, divin);
}


function imgfromcol(colfnm, imw, imh, dims, divin) {
var div = null;
if (divin) {
    div = divin;
    DOM.empty(div);
} else {
    div = DOM.div();
}

var ds = div.style;


ds.width = dims[2] + "px";
ds.height = dims[3] + "px";
ds.top =  "0px";
ds.left = "0px";
ds.position = "relative";
ds.overflow = "hidden";

// use line below instead of remainder just to use the image directly
//  var img = DOM.img(div, fnm);

if (BROWSER.isIE6) {
    // instead of an image, put in the pngfix style span of the right size with ie
    // active X junk to actually apply the transparency
    var ftxt = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            imgPath + colfnm + "' sizingMethod='scale')";

    var spn = DOM.div(div);
    spn.style.position="absolute";
    spn.style.left="-" + dims[0] + "px";
    spn.style.top="-" + dims[1] + "px";
    spn.style.width = imw + "px";
    spn.style.height = imh + "px";
    spn.style.filter = ftxt;
    div.imtgt = spn;

} else {
    var img = DOM.img(div, colfnm);
    img.style.position="absolute";
    img.style.left="-" + dims[0] + "px";
    img.style.top="-" + dims[1] + "px";
    div.imtgt = img;
}
div.img = img;
return div;
}

function Shortcuts() {
    var me = this;

    var cuts = {};

    function add(seq, func) {
        cuts[seq] = func;
    }
    me.add = add;

    function down(e) {
        var evt = (e || window.event);
        var code = DOM.keyCode(e);
        
        var keystr = "";
        if (DOM.special_keys[code]) {
            keystr = DOM.special_keys[code];
        } else {
            keystr = String.fromCharCode(code).toLowerCase();
        }
        var seq = "";
        if (evt.ctrlKey) {
            seq += "ctrl+";
        }
        if (evt.altKey) {
            seq += "alt+";
        }
        if (evt.shiftKey) {
            seq + "shift+";
        }

        seq += keystr;

        if (cuts[seq]) {
            DOM.preventDefaultEvent(e);

            cuts[seq]();
        } else if (seq.indexOf("+") > 0) {
            // ignore it
        }
    }
    me.down = down;
}

var DOM = new (function() {
var me = this;

var docdiv = null;
var cmContainer = null;

var errors = [];

var hidable;

var pendingTarget = null;

me.activeHandle = null;

var latestRule = false;
var latestSelector = "";

me.skipDown = false;

var absPath = '';

function log(msg) {
    //turning off console logs
//	  if (typeof(console) != "undefined") {
//		  console.log(msg);
//	  }
    }
    me.log = log;
    
    function trace(msg) {
            if (typeof(console) != "undefined" && console.trace) {
                console.trace(msg);
            }
    }
    me.trace = trace;
        
me.cancelEvent = function(e) {
    me.preventDefaultEvent(e);
}

me.preventDefaultEvent = function(e) {
    if (!e) {
    e = window.event;
    }
    e.ignoreMe = true;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
    e.cancelBubble = true;
    }
    if (e.preventDefault) {
    e.preventDefault();
    } else {
    e.returnValue=false;
    }
}



me.rightClick = function(evt) {
    if (!evt) {
        evt = window.event;
    }
    var ret = false;
    if (evt.which) {
        ret = (evt.which == 3);
    } else if (evt.button) {
        ret = (evt.button == 2);
    }
    return ret;
}


me.cimg = function(div, fnm) {
    var dv = colimg(fnm);
    if (div) {
        div.appendChild(dv);
    }
    return dv;
}


me.creSrc = function(div, fnm) {
    if (collage1[fnm]) {
        var dims = collage1[fnm];

    } else if (collage3[fnm]) {
        colfnm = "collage3.png";
        var dims = collage3[fnm];
    }
    if (dims) {
        div.imtgt.style.left="-" + dims[0] + "px";
        div.imtgt.style.top="-" + dims[1] + "px";
    } else {
        //  alert("missing collage img");
    }


    // following completely remakes it
    // colimg(fnm, div);
}


me.ie6PNG = function(p, fnm, w, h, offx, offy) {
    var ftxt = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            imgPath + fnm + "' sizingMethod='scale')";
    var ret = DOM.div(p);
    ret.style.position="absolute";
    ret.style.left= offx + "px";
    ret.style.top= offy + "px";
    ret.style.width = w + "px";
    ret.style.height = h + "px";
    ret.style.filter = ftxt;
    return ret;
}

    // LATER removeChild in some other places could use this
    me.empty = function(elt) {
        if (!elt) {
            return;
        }
        while (elt && elt.hasChildNodes()) {
        elt.removeChild(elt.lastChild);
        }
    }
    me.clear = me.empty;


    me.setHidable = function(h) {
        if (h == hidable) {
            // dont hide it
        } else {
            clearHidable();
            hidable = h;
        }
    }


    function clearHidable() {
        if (hidable) {
            hidable.hide();
        }
    }
    me.clearHidable = clearHidable;
    
    
    // set this to false for the events we can't swallow for some reason
    // as with TextButton.up
    me.handleEmpty = true;

    me.emptyUp = function(e) {
    
        
        if (!e) {
            e = window.event;
        }
        if (e && e.ignoreMe) {
            return;
        }
        if (hidable && me.handleEmpty) {
            hidable.hide();
            hidable = null;
        }
        me.handleEmpty = true;   
    }




function forceIERefresh() {
    var d = docEID('tx_iebug');
    if (d) {
        document.body.removeChild(d);
    } else {
        d = me.span();
        d.id = "tx_iebug";
        d.innerHTML='';
        document.body.appendChild(d);
    }
}
this.forceIERefresh = forceIERefresh;


this.fixIERepaint = function(div) {

    // IE refresh causes layout problems in IE6
    if (!BROWSER.isIE6) {
        div.onmouseover = forceIERefresh;
        div.onmouseout = forceIERefresh;
        div.onmousedown = forceIERefresh;
        div.onkeypress = forceIERefresh;
        div.onmousewheel = forceIERefresh;
    }
}


function add(elt) {
    if (elt.div) {
    this.appendChild(elt.div);
    } else {
        this.appendChild(elt);
    }
}

function addToDocument(elt) {
        if (!docdiv) {
            docdiv = $(".DOMadditions")[0];
        }
        docdiv.appendChild(elt);
}
me.addToDocument = addToDocument;


this.getContextMenuContainer = function() {
    if (!cmContainer) {
        cmContainer = div();
        cmContainer.style.position = "absolute";
        cmContainer.style.overflow = "visible";
        addToDocument(cmContainer);
    }
    return cmContainer;
}


    // No Select DIV
    function nsdiv(p, cnm) {
        var ret = this.div(p, cnm);
        nonselect(ret);
        return ret;
    }
    this.nsdiv = nsdiv;


    this.div = function(p, cnm) {
        var ret = newElt("div", p);
        if (cnm) {
            ret.className = cnm;
        }

        return ret;
    }


    
    function div(p, cnm) {
        var ret = newElt("div", p);
            if (cnm) {
                ret.className = cnm;
            }
            return ret;
    }
    this.bareDiv = div;

    
    this.canvas = function(par, w, h) {
        // TODO - revise if there is canvas support in IE to use native canvas
        var ret = document.createElement(BROWSER.noCanvas ? "div" : "canvas");
        if (w) {
            ret.width = w;
            ret.height = h;
        }
        if (ret.getContext) {
            // OK, normal canvas
        } else {
            // used to init excanvas on it, but now the drawer must understand vml itself
            if (w) {
                ret.style.width = w + "px";
                ret.style.height = h + "px";
            }
        }
        
        
        if (BROWSER.noCanvas) {
            var prefix = 'tx_vml';
            var urn = 'urn:schemas-microsoft-com:vml';
            if (!document.namespaces[prefix]) {
                document.namespaces.add(prefix, urn, '#default#VML');
            }
        }
        
        if (par) {
            par.appendChild(ret);
        }
        return ret;
    }
    
    
    this.text = function(p, txt) {
        var tn = document.createTextNode(txt);
        p.appendChild(tn);
    }

    this.replaceText = function(p, txt) {
        DOM.empty(p);
        var tn = document.createTextNode(txt);
        p.appendChild(tn);
    }
    

    this.link = function() {
            var ret = newElt("link");
            return ret;
    }


    this.p = function(p, txt) {
        var ret = newElt("p", p);
    
        if (txt) {
            ret.innerHTML = txt;
        }
        return ret;
    }
    
    this.pre = function(p) {
        var ret = newElt("pre", p);
    
        return ret;
    }
    
    this.span = function(p, txt, cnm, textMode) {
        var ret = $("<span>");
        if(textMode){
            ret.text(txt);
        }else{
            ret.html(txt || "");
        }
        if (p) {
            ret.appendTo(p);
        }
        if (cnm) {
            ret.className = cnm;
        }
        return ret.get(0);
    }


    this.iframe = function(p, cnm) {
        return newElt("iframe", p, cnm);
    }

    this.ul = function(p, cnm) {
        return newElt("ul", p, cnm);
    }

    this.li = function(p, cnm) {
        return newElt("li", p, cnm);
    }


    this.table = function(p, cnm) {
        var ret = newElt("table", p);
        ret.cellPadding = 0;
        ret.cellSpacing = 0;
    
        ret.style.width = "auto";
        ret.style.borderCollapse = 'separate';
        ret.style.backgroundColor = 'transparent';
        
    
        if (cnm) {
            ret.className = cnm;  
        }
        return ret;
    };

        
    this.tr = function(p) {
        var ret = p.insertRow(p.rows.length);
        
        return ret;
        // IE wants explicit insertRow call
        //		return newElt("tr", p, c);
    }
    
    
    this.bareTd = function(p) {
        var ret = p.insertCell(p.cells.length);
    // var ret = newTd(p);
        ret.add = add;
        return ret;
    }

    this.bareTdr = function(p) {
        var ret = newTd(p);
        ret.align = "right";
        ret.style.textAlign = "right";
        return ret;
    }

    this.std = function(p) {
        var ret = newTd(p);
    
        return ret;
    }


    this.td = function(p, cnm) {
        var ret = newTd(p, cnm);
        return ret;
    }

    this.tdr = function(p, cnm) {
        var ret = newTd(p, cnm);
        ret.align = "right";
        ret.style.textAlign = "right";
        return ret;
    }


    this.center = function(p) {
        var ret =  newElt("center", p);
        return ret;
    }


    function fullImgPath(src) {
        var ret = src;
        if ((ret.indexOf("http") == 0) || (ret.substr(0,1)=="/")) {

        } else {
        ret = imgPath + ret;
        }
        return ret;
    }
    this.fullImgPath = fullImgPath;


    this.switchSrc = function(elt, src) {
        if (elt) {
            elt.src = fullImgPath(src);
        }
    }

    this.reSrc = function(img, src) {
        img.src = fullImgPath(src);
    }

    
    this.srcImg0 = function(p, src) {
        var ret = newElt0("img", p);
        ret.src = src
        // ret.style.border = "none";
        return ret;
    }
    

    this.img = function(p, src, cnm) {
    var ret = newElt("img", p);
    ret.className = (cnm ? cnm : "tx_");
    ret.src = fullImgPath(src);

    ret.style.backgroundColor = "transparent";

    ret.style.padding = "0px";
    ret.style.margin = "0px";
    ret.style.border = "none";

    // ret.alt = "img";
    return ret;
    }


    this.bareA = function() {
        var ret = newElt("a", null);
        ret.style.color = "#000000";
        ret.style.textDecoration = "none";
        return ret;
    }


    this.a = function(p, href, val, cnm) {
        var ret = newElt("a", null);
        if (href) {
            ret.href = href;
        }
        if (val) {
        // spanInnerHTML(ret, val);
        ret.innerHTML = val;
        }
        if (p) {
            p.appendChild(ret);
        }
        if (cnm) {
            ret.className = cnm;
        } 
        return ret;
    }


    this.form = function(p, act, meth) {
        var ret = newElt("form", p);
        if (act) {
            ret.action = act;
        }
        if (meth) {
            ret.method = meth;
        }
        return ret;
    }

// IE: Can't call DOM.input and then set .type later.
this.input = function(p) {
    return newInput("text", p, "noname");
}

    this.hiddenInput = function(p, n, v) {
    return newInput("hidden", p, n, v);
    }

    this.textInput = function(p, n, cls) {
        return newInput("text", p, n, "", cls);
    }

    this.fileInput = function(p, n) {
    return newInput("file", p, n);
    }

    this.radio = function(p, state, n, v, cfn) {
        var ret = null;
        if (BROWSER.isIE) {
            ret = document.createElement('<input type="radio" '+ (state ? "checked" : "") +
                        ' name="' + n + '">');
        } else {
            ret = newInput("radio", p, n, v);
        }
        if (state) {
            ret.checked = true;
        }
        ret.style.padding = "0px";
        ret.style.margin = "0px";
        if (cfn) {
            ret.onchange = cfn;
        }
        if (p) {
            p.appendChild(ret);
        }
        return ret;
    }


    function newInput(typ, p, n, v, cls) {
    // set type before putting in tree for IE
    var ret = newElt("input", null);
    ret.type = typ;
    ret.style.fontSize = "8pt";
    if (n) {
        ret.name = n;
    }
    if (v) {
        ret.value = v;
    }
    if (p) {
    p.appendChild(ret);
    }
    if (cls) {
        ret.className = cls;
    }
    return ret;
    }

    
    this.tableWrap = function(div) {
        var ret = me.table();
        me.td(me.tr(ret)).add(div);
        return ret;
    }

    this.button = function(p, v, func) {
    var ret = newElt("input", null);
    ret.type = "button";
    p.appendChild(ret);
    ret.value = v;
    if (func) {
        ret.onmouseup = function(e) { func(ret); };
    }
    return ret;
    }


    this.h1 = function(p, txt, cnm) {
        return newH("h1", p, txt, cnm);
    }

    this.h2 = function(p, txt, cnm) {
        return newH("h2", p, txt, cnm);
    }

    this.h3 = function(p, txt, cnm) {
        return newH("h3", p, txt, cnm);
    }

    this.h4 = function(p, txt, cnm) {
        return newH("h4", p, txt, cnm);
    }


    function newH(tag, p, txt, cnm) {
        var ret = newElt(tag, p);
        if (typeof(txt) !== "undefined" && txt) {
            me.text(ret, txt);
        }
        if (cnm) {
            ret.className = cnm;
        }
        return ret;
    }

    this.select = function(p) {
        var ret = newElt("select", null);
        p.appendChild(ret);
        
        ret.addOption = function(id, val) {
            var opt =  new Option(val, id);
            ret.options[ret.options.length] = opt;
        }
        return ret;
    }


this.checkbox = function(p, initstate, name, func) {
    var ret = newElt("input", null);
    ret.type = "checkbox";
    ret.name = name;
    p.appendChild(ret);
    if (initstate) {
        ret.checked = true;
    }
    if (BROWSER.isIE) {
        ret.onclick = cbchange;
    } else {
        ret.onchange = cbchange;
    }

    if (func) {
        ret.report = func;
    }
    return ret;
    }



    function cbchange(e) {
        pendingTarget = getTargetNoKill(e);
        setTimeout(pendingTargetReport, 20);
    }

    function pendingTargetReport() {
        if (pendingTarget && pendingTarget.report) {
            pendingTarget.report(pendingTarget);
        }
    }




    this.passwordInput = function(p, n) {
    var ret = newElt("input", null);
    ret.type = "password";
    p.appendChild(ret);
    ret.name = n;
    ret.style.fontSize = "8pt";
    return ret;
    }


    this.submitButton = function(p, v) {
        var ret = newElt("input", p);
        ret.type = "submit";
        ret.value = v;
        return ret;
    }



    this.textArea = function(p) {
        var ret = newElt("textarea", p);
    
        return ret;
    }


    this.br = function(p) {
        var ret = newElt("br");
        if (p) {
            p.appendChild(ret);
        }
        return ret;
    }
    


    this.script = function(src) {
        var ret = newElt("script");
        ret.src = src;
        return ret;
    }


    this.tableRow = function(ptbl, selectable) {
    var tr = me.tr(ptbl);
    tr.className = "tx_";
    var td;
    if (selectable) {
        td = me.bareTd(tr);
    } else {
        td = me.td(tr);
    }
    var tbl = me.table(td);
    tbl.cellSpacing = 2; // "0px";
    tbl.cellPadding = 0;
    tbl.style.width = "100%"; // "99%";
    var ret = me.tr(tbl);
    ret.className = "tx_";
    ret.me = ret;
    ret.newCell = function() {
        return DOM.td(ret);
    }

    ret.add = function(elt, just, w) {
        var td = DOM.td(ret);
        applyTDAttributes(td, just);

        if (w) {
            td.style.width = w + "px";
        }

        if (elt.div) {
        td.appendChild(elt.div);
        } else {
        td.appendChild(elt);
        }
    }
    return ret;
    }


    this.addToRow = function(v, tr) {
    var ret = tr.insertCell(tr.cells.length);
    if (v.div) {
        ret.appendChild(v.div);
        // IE wants insertCell called.
        //DOM.td(tr).appendChild(v.div);
    } else {
        ret.appendChild(v);
        // DOM.td(tr).appendChild(v);
    }
    return ret;
    }


    function applyTDAttributes(td, just) {
        if (just) {
            if (just.indexOf("c") == 0) {
                td.align="center";
            } else if (just.indexOf("r") == 0) {
                td.align = "right";
            }

            if (just.indexOf("t") >= 0) {
                td.valign="top";
            }

        }
    }


    this.bgtdx = function(p, src) {
        var fsrc = src;
        if (fsrc.indexOf("http") != 0) {
            fsrc = imgPath + fsrc;
        }

        var ret = newTd(p);
        ret.style.backgroundImage = "url(" +  absPath + fsrc + ")";
        ret.style.backgroundRepeat = "repeat-x";
        ret.style.paddingBottom = "0px";
        ret.style.paddingTop = "0px";
        ret.style.marginBottom = "0px";
        ret.style.marginTop = "0px";
        return ret;
    }

    this.bgtdy = function(p, src) {
        var fsrc = src;
        if (fsrc.indexOf("http") != 0) {
            fsrc = imgPath + fsrc;
        }

        var ret = newTd(p);
        ret.style.backgroundImage = "url(" + absPath + fsrc + ")";
        ret.style.backgroundRepeat = "repeat-y";
        ret.style.margin = "0px";
        ret.style.marginTop = "0px";
        return ret;
    }


    this.handleDiv = function(par, func) {
        var mbl = null;
        var p = par;
        var Handle = require('handle');
        while (p) {
            if (p.movable) {
                mbl = p.movable;
                break;
            }
            p = p.parentNode;
        }
        var ret = null;
        if (mbl) {
            ret = DOM.bareDiv(par);
            var h = new Handle(mbl, ret, func);
            ret.handle = h;
        } else {
            alert("cant find movable ancestor? ");
        }
        return ret;
    }



    function newTd(p, cnm) {
        var ret = p.insertCell(p.cells.length);
        ret.add = add;
        if (cnm) {
            ret.className = cnm;
        }
        
        return ret;
    }





    function newElt(typ, p, cnm)	{
    var ret = document.createElement(typ);
        if (p) {
        p.appendChild(ret);
        }
        ret.add = add;
        if (cnm) {
            ret.className = cnm;
        }
        return ret;
    }

    function newElt0(typ, p)	{
        var ret = document.createElement(typ);
        if (p) {
            if (p.firstChild) {
                p.insertBefore(ret, p.firstChild); 
            } else {
                p.appendChild(ret);
            }
        }
        ret.add = add;
        return ret;
    }




    function nonselect(ret) {
        if (ret.className) {
        ret.className = ret.className + " tx_nosel";
        } else {
        ret.className = "tx_nosel";
        }

        // safari
        ret.style.KhtmlUserSelect = "none";
        // mozilla
        ret.style.MozUserSelect = "none";
        ret.style.select = "none";
        // for IE
        ret.unselectable = "on";
    }
    me.nonselect = nonselect;
    
    



    // LATER this is called too often
me.colorize = function(elt, colors) {

    var cns = elt.childNodes;
    if (cns) {
    for (var i = 0; i < cns.length; i++) {
        var cn = cns[i];
        if (cn.peer && cn.peer.setColors) {
            cn.peer.setColors(colors);
        } else if (cn.keepColors) {

        } else {
        var tnm = cn.tagName;
        if (cn.style && (tnm == 'TABLE' || tnm == 'TR' || tnm == 'TD')) {
            cn.style.backgroundColor = "transparent";  
        }
        me.colorize(cn, colors);
        }
    }
    }

}


me.deParent = function(div) {
    if (div && div.parentNode) {
    div.parentNode.removeChild(div);
    }
}

me.remove = function(div, par) {
    if (div.parentNode == par) {
    par.removeChild(div);
    }
}


me.swap = function(ctr, old, nw) {
    if (old.parentNode == ctr) {
        ctr.removeChild(old);
    } else {
        // alert("not removing - wrong parent " + old.parentNode + " " + ctr);
    }
    if (nw.parentNode == ctr) {
        // alert("not appending - already in?");
    } else {
        ctr.appendChild(nw);
    }
}




// could just set innerHTML for ff but ie needs it wrapped in a new element;
// LATER need something smarter - often the styling is set for the container div, and
// putting a DOM.div inside it overrides the style
me.setDivText = function(par, txt) {
    me.empty(par);

var tmp = DOM.bareDiv();
    tmp.innerHTML=txt;
    par.appendChild( tmp );
    return tmp;
}





me.insertText = function(par, txt) {
    me.empty(par);

    var tmp = me.span();
    tmp.innerHTML = txt;
    par.appendChild(tmp);
    return tmp;
}


// Add a div to parent
me.addDivInnerHTML = function(par, txt) {
    var tmp = me.div();
    tmp.innerHTML=txt;
    par.appendChild(tmp);
    return tmp;
}


function logError(str) {
    errors.push(str);
    log("ERROR: " + str);
}
me.logError = logError;



    function getTarget(evt) {
        var ret = getTargetNoKill(evt);
        me.preventDefaultEvent(evt);
        return ret;
    }
    me.getTarget = getTarget;


    function getTargetNoKill(evt) {
        var x = evt;
        x = (x || window.event);
        var ret =  (x.target || x.srcElement);
        return ret;
    }
    me.getTargetNoKill = getTargetNoKill;

    
    function getPropertyTargetNoKill(e, prop) {
        var ret = getTargetNoKill(e);
        return getPropertyAncestor(ret, prop);
    }
    me.getPropertyTargetNoKill = getPropertyTargetNoKill;
    
    function getPropertyTarget(e, prop) {
        var ret = getTarget(e);
        return getPropertyAncestor(ret, prop);
    }
    me.getPropertyTarget = getPropertyTarget;
    
    
    function getPropertyAncestor(src, prop) {
        var ret = src;
        var iu = 0;
    
        while (!hasProp(ret, prop) && iu < 10 && ret) {
            ret = ret.parentNode;
            iu += 1;
            if (!ret) {
                logError("Seeking property target found null rel to " + src + " depth=" + iu);
            }
        }
        
        if (!hasProp(ret, prop)) {
            ret = null;
            logError("can't locate node with property " + prop + " starting from "+ src);  
        }
        return ret;
    }
    me.getPropertyAncestor = getPropertyAncestor;
    

    
    // this is needed for IE7 (and others?) since we call getPropertyTarget on DOM elements to which we've 
    // added a property, but IE doesn't treat them as normal JS objects and, in particular, they don't have 
    // the hasOwnProperty function
    function hasProp(obj, fld) {
        var bret = false;
        if (obj) {
            if (obj.hasOwnProperty) {
                bret = obj.hasOwnProperty(fld);
            } else {
                if (typeof(obj[fld]) != "undefined") {
                    bret = true;
                }
            }
        }
        return bret;
    }
    me.hasProp = hasProp;

    
    me.special_keys = {8:"backspace", 9:"tab",  13:"enter", 27:"escape", 
                    33:"pageup", 34:"pagedown", 35:"end", 36:"home", 45:"insert", 46:"delete",
                    37:"left", 38:"up", 39:"right", 40:"down",
                    112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6",
                    118:"f7", 119:"f8", 120:"f6", 121:"f10", 122:"f11", 123:"f12"};



    function isKeyEnter(e) {
        var kc = keyCode(e);
        var ret = false;
        if (me.special_keys[kc] && me.special_keys[kc] == "enter") {
            ret = true;
        }
        return ret;
    }
    me.isKeyEnter = isKeyEnter;
    
    
    function isTextChangeKey(e) {
        var kc = keyCode(e);
        var ret = true;
        // backspace and delete (8, 46) do change the text so exclude here
        if (me.special_keys[kc] && kc !=8 && kc != 46) {
            ret = false;
        }
        return ret;
    }
    me.isTextChangeKey = isTextChangeKey;
    
    
    
    function addEventListener(elt, funcname, func, rstate) {
        if (elt.addEventListener) {
            elt.addEventListener(funcname, func, rstate);
        } else if (elt.attachEvent) {
            elt.attachEvent("on" + funcname, func);
        } else {
            elt["on" + funcname] = func;
        }
    }
    me.addEventListener = addEventListener;
    
    
    function attachKeyDown(elt, func) {
        //Attach the function with the event
        if(elt.addEventListener) {
            elt.addEventListener("keydown", func, false);
        } else if(elt.attachEvent) {
            elt.attachEvent("onkeydown", func);
        } else {
            elt.onkeydown = func;
        }
    }


    function attachShortcut(elt, keystr, func) {
        if (!elt.shortcuts) {
            var sc = new Shortcuts();
            elt.shortcuts = sc;
            attachKeyDown(elt, sc.down);
        }
        elt.shortcuts.add(keystr, func);
    }
    me.attachShortcut = attachShortcut;





    me.selectAll = function(e) {
        var ta = getTarget(e);

        selectContent(ta);
    }
    
    
    
    function selectContent(ta) {	
        var tavl = ("" + ta.value).length;
        if (ta.setSelectionRange) {
            ta.focus();
            ta.setSelectionRange(0, tavl);

        } else if (ta.createTextRange) {
            var rng = ta.createTextRange();
            rng.moveStart("character", 0);
            rng.moveEnd("character", tavl);
            rng.select();
        }
    }
    me.selectContent = selectContent;
    
    
    
    
    function getModifiers(e) {
        var evt = (e || window.event);
        var ret = {};
        ret["right"] = false;
        ret["left"] = false;
        ret["meta"] = false;
        
        if (evt) {
        if (evt.modifiers) {
            ret["alt"] = (evt.modifiers & Event.ALT_MASK);
            ret["ctrl"] = (evt.modifiers & Event.CONTROL_MASK);
            ret["shift"] = (evt.modifiers & Event.SHIFT_MASK);
            
        } else {
            ret["alt"] = evt.altKey;
            ret["ctrl"] = evt.ctrlKey;
            ret["shift"] = evt.shiftKey;
        }
        if ((evt.which && evt.which == 3) || (evt.button && evt.button == 2)) {
            ret["right"] = true;
        }
        if ((evt.which && evt.which == 1) || (evt.button && evt.button == 1)) {
            ret["left"] = true;
        }
        if (evt.metaKey) {
            ret["meta"] = true;
        }
            
        }
        return ret;
    }
    me.getModifiers = getModifiers;    
    
    
    

    function keyCode(e) {
        var evt = (e || window.event);

        var code = 1;
        if (evt.keyCode) {
            code = evt.keyCode;
        } else if (evt.which) {
            code = evt.which;
        }
        return code;
    }
    me.keyCode = keyCode;


    function setStyle(elt, o) {
        var sty = elt.style;
        for (key in o) {
            var val = o[key];
            if (typeof(val) == "number") {
                sty[key] = "" + val + "px";
            } else {
                sty[key] = val;
            }
        }
    }
    me.setStyle = setStyle;

    function showInWindow(txt, html) {
        var winRef = window.open("", "AnnotateOutput",
            "toolbar=0, menubar=0, scrollbars=1, width=500, height=650, top=100, left=500");

        if (html) {
            winRef.document.write("<html><body>" + txt+ "</body></html>");
            
        } else {
            txt = txt.replace(/</g, "&lt;");
            txt = txt.replace(/>/g, "&gt;\n");
            winRef.document.write("<html><body><pre> " + txt+ "</pre></body></html>");
        }
    }
    me.showInWindow = showInWindow;

    me.showHTMLInWindow = function(txt) {
        showInWindow(txt, true);
    }

    me.showHTMLToCopy = function(txt) {
        showInWindow(txt, false);
    }
    
    
    function setStyleFontSize(sel, val) {
        var sdat = {};
        sdat.fontSize = val;
        setStyle(sel, sdat);
    }
    me.setStyleFontSize = setStyleFontSize;


    function applyStyle(rule, dat) {
        for (var fld in dat) {
            rule.style[fld] = dat[fld];
        }
    }

    function cacheStyleRule(sel) {
        latestSelector = sel;
        latestRule = getStyleRule(sel);
    }
    
    function getStyleRule(sel) {
        var nr = 0;
        var ret = false;
        var ssa = document.styleSheets;
    
        for (var i = 0; i < ssa.length; i++) {
            var ss = ssa[i];
            var rules = (ss.cssRules ? ss.cssRules : ss.rules);
        
            for (var ir = 0; ir < rules.length; ir++) {
                var rule = rules[ir];
                
                var stxt = "" + rule.selectorText;
                if (stxt.toLowerCase() == sel) {
                    ret = rule;
                    break;
                }
            }
        }
        if (!ret) {
            ret = {};
            ret.style = {};
        }
        
        return ret;
    }

    me.clearReferences = function(){

        docdiv = null;
        cmContainer = null;
        pendingTarget = null;
    }
})
document.onclick = DOM.emptyUp;
DOM.docEID = docEID;
DOM.colimg = colimg;
export default DOM;
