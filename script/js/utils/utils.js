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
    return (/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/i).test(str);
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