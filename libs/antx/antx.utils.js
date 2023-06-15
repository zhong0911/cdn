function isEmail(str) {
    return (/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+(([.\-])[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(str);
}

function getRandomInt(l, r) {
    return (l + Math.random() * (r - l + 1));
}

function isUsername(str) {
    return (/^[a-zA-Z][a-zA-Z0-9]{4,11}$/i).test(str);
}

function isUrl(str) {
    return (/(https?:\/\/)?(([0-9a-z.]+\.[a-z]+)|(([0-9]{1,3}\.){3}[0-9]{1,3}))(:[0-9]+)?(\/[0-9a-z%/.\-_]*)?(\?[0-9a-z=&%_\-]*)?(#[0-9a-z=&%_\-]*)?/i).test(str);
}

function isPassword(str) {
    return (/^[a-zA-Z0-9]{8,26}$/i).test(str);
}

function isCode(str) {
    return (/^[0-9]{6}$/i).test(str);
}

function isOneNumber(str) {
    const reg = /^[0-9]$/;
    return reg.test(str);
}

function toUtf8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

function into(url) {
    window.location.href = url;
}

function back() {
    window.history.go(-1);
}

function refresh() {
    location.reload();
}

function refresh_true() {
    location.reload(true);
}

function togglePassword(eye, button) {
    if ($(button).attr("type") === "password") {
        $(button).attr("type", "text");
        $(eye).removeClass("fa fa-eye-slash");
        $(eye).addClass("fa fa-eye");
    } else if ($(button).attr("type") === "text") {
        $(button).attr("type", "password");
        $(eye).removeClass("fa fa-eye");
        $(eye).addClass("fa fa-eye-slash");
    }
}

function getUrlParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

function sleep(numberMillis) {
    let now = new Date();
    let exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) return;
    }
}

// function isDomainRecord(str) {
//     function is(str) {
//         return (/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])$/i).test(str);
//     }
//     if (str === "@") return true;
//     let s = str.split('.');
//     if (s[0] === '*') {
//         for (let i = 1; i < s.length; i++) {
//             if (!is(s[i]))
//                 return false;
//         }
//     } else {
//         for (let i in s) {
//             if (!is(s[i]))
//                 return false;
//         }
//     }
//     return true;
// }

function isDomainRecord(str) {
    function b(str) {
        function is(str) {
            return (/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])$/i).test(str);
        }
        if (str === "@") return true;
        let s = str.split('.');
        if (s[0] === '*') {
            for (let i = 1; i < s.length; i++) {
                if (!is(s[i]))
                    return false;
            }
        } else {
            for (let i in s) {
                if (!is(s[i]))
                    return false;
            }
        }
        return true;
    }

    if (str.charAt(0) === "_") {
        if (str.length >= 2) {
            return b(
                str.replace("_", '', 1));
        } else {
            return false;
        }
    } else {
        return b(str);
    }
}

function isDomainName(str) {
    return (/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/i).test(str);
}

function isARecordValue(str) {
    return (/^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/i).test(str);
}

function isAAAARecordValue(str) {
    return (/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/i).test(str);
}

function isTXTRecordValue(str) {
    return (/^"[^"]*"$|^'[^']*'$|^[a-zA-Z0-9+/]{4}([a-zA-Z0-9+/]{4})*([a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$|^v=spf1 .*$|^MS=.*$/i).test(str);
}

function isCAARecordValue(str) {
    return (/^0?((0|[1-9]d{0,2})|([1-5]d{3})|(6[0-4]d{2})|(65[0-4]d)|(655[0-2]))s?(".*")?$/i).test(str);
}

function isNSRecordValue(str) {
    return (/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.$/i).test(str);
}

function isMXRecordValue(str) {
    return (/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/i).test(str);
}

function isCHAMERecordValue(str) {
    return (/^((\d{1,3}\.){3}\d{1,3}|[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*)(\s+(\d+|INFINITY))?\s+(\d+|INFINITY)\s+(\d+|INFINITY)\s+(\d+|INFINITY)\s+(\d+|INFINITY)\s*$/i).test(str);
}

function isCSRRecordValue(str) {
    return (/^[a-zA-Z0-9+/]{43}=$/i).test(str);
}


function isIPv4(str) {
    return (/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/i).test(str);
}