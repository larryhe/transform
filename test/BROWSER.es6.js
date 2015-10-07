import $ from "jquery";
export default new function() {
    var me = this;

    
    // NB this is only needed for selection handling in html where browsers behave very differently
    var navU = navigator.userAgent;
    var detect = navigator.userAgent.toLowerCase();


    me.isMoz = false;

    me.isIE = false;
    me.isIE6 = false;
    me.isIE7 = false;
    me.isIE8 = false;
    me.isIE9 = false;
    
    me.isSafari = false;
    me.isChrome = false;
    me.isWebkit = false;
    
    
    me.isTablet = false;
    
    me.noCanvas = false;
    
    function checkIt(str) {
    tst = str;
    place = detect.indexOf(str) + 1;
    return place;
    }
    //taken from Modernizr
    function isCanvasSupported(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
    me.noCanvas= !isCanvasSupported();
    
    if (checkIt('chrome')) {
        me.isChrome = true;
    
    } else if (checkIt('safari')) {
        me.isSafari = true;
        
    } else if (checkIt('firefox')) {
        me.isMoz = true;

    } else if (checkIt('mozilla')) {
        me.isMoz = true;

    }

    // Android Mobile
    var isAndroidMobile = navU.indexOf('Android') > -1 && navU.indexOf('Mozilla/5.0') > -1 && navU.indexOf('AppleWebKit') > -1;

    // Android Browser (not Chrome)
    var regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
    var resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
    var appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));
    me.isAndroidBrowser = isAndroidMobile && appleWebKitVersion !== null && appleWebKitVersion < 537;


    if (document.all) {
        me.isIE = true;
        var tst = "msie";
        var place = detect.indexOf("msie") + 1;
        var version = detect.charAt(place + tst.length);
        
        if (version === "6") {
            me.isIE6 = true;
        } else if (version === "7") {
            me.isIE7 = true;
        } else if (version ==="8") {
            me.isIE8 = true;
        }else if(version ==="9") {
            me.isIE9 = true;
        }
        me.isMoz = false;
    }

    if (me.isSafari || me.isChrome) { 
        me.isWebkit = true; 
        me.isMoz = false;
    }

    if(me.isIE8){
        $('body').addClass('ua-ie-8');
    }


    

    // TODO - other devices!
    if (checkIt("ipad") || checkIt("ipod") || checkIt("iphone") ||  me.isAndroidBrowser) {
        me.isTablet = true;
    }	
}
