let $antxPre = null;
const $antxMain = document.createElement('div');
const $antxStyle = document.createElement('style');
$antxStyle.innerHTML = `.www_antx_cc-msg-div{z-index:99999999;position:fixed;padding-top:18px;max-width:100%;width:100%;height:80%;top:0;padding-bottom:100px;text-align:center;overflow-y:hidden;-webkit-pointer-events: none;-moz-pointer-events: none;-ms-pointer-events: none;-o-pointer-events: none;pointer-events: none;}.www_antx_cc-msg-div .www_antx_com-msg{display:inline-flex;align-items:center;margin-bottom:18px;max-width:66%;min-width:246px;padding:10px 16px;background-color:#fff;color:#409eff;text-align:left;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,0.15);opacity:0;font-size:14px;}.www_antx_cc-msg-div .www_antx_com-msg .www_antx_com-msg-con{padding:0;text-indent:0;box-sizing:border-box;line-height:20px;pointer-events:all;user-select:none;word-wrap:break-word;word-break:break-all;white-space:pre-wrap;}.www_antx_cc-msg-div .www_antx_com-msg .www_antx_com-msg-icon{color:gray;width:16px;height:16px;margin-right:8px;}`;
$antxMain.className = 'www_antx_cc-msg-div';
window.onload = function () {
    document.body.appendChild($antxMain);
    document.head.appendChild($antxStyle);
};
const $prompt = {
    default($antxObj) {
        www_antx_com($antxObj, 'default')
    }, success($antxObj) {
        www_antx_com($antxObj, 'success')
    }, info($antxObj) {
        www_antx_com($antxObj, 'info')
    }, warning($antxObj) {
        www_antx_com($antxObj, 'warning')
    }, error($antxObj) {
        www_antx_com($antxObj, 'error')
    }
};

function www_antx_com($antxObj, $antxKey = 'default') {
    const $antxConfig = {
        default: ['#909399', '#f4f4f5', '<svg t="1624242937335" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17848" width="16" height="16"><path d="M847 733.1l-77.5-154.8c-0.8-1.7-1.3-3.5-1.3-5.4l-0.2-171.4c-0.1-96.7-65.6-178.1-154.5-202.4v-0.1c0-55.6-45.1-100.7-100.7-100.7-55.5 0-100.5 44.9-100.7 100.4C322.2 222.6 255.9 304.6 256 402l0.2 171.4c0 1.9-0.4 3.7-1.3 5.4l-77.4 154.6c-22.6 45.2 10.3 98.5 60.9 98.4l547.9-0.4c50.5 0.1 83.4-53.1 60.7-98.3zM421.5 860.8c-10.1 0-15.6 11.7-9.3 19.6 23.4 29.2 59.4 47.9 99.7 47.9 40.4 0 76.4-18.7 99.9-48 6.3-7.9 0.8-19.6-9.3-19.5h-181z" p-id="17849" fill="#909399"></path></svg>'],
        success: ['#67c23a', '#f0f9eb', '<svg t="1624242593045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3180" width="16" height="16"><path d="M510.545 28.22c-267.043 0-483.521 216.477-483.521 483.52s216.479 483.521 483.521 483.521 483.52-216.479 483.52-483.521S777.588 28.22 510.545 28.22zM776.855 407.855l-315.37 315.37c-9.763 9.763-22.559 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-176.13-176.13c-19.526-19.525-19.526-51.184 0-70.71 19.526-19.526 51.184-19.527 70.711 0L426.13 617.159l280.015-280.015c19.527-19.526 51.184-19.526 70.711 0C796.382 356.671 796.382 388.329 776.855 407.855z" p-id="3181" fill="#67c23a"></path></svg>'],
        info: ['#409eff', '#DEEEFC', '<svg t="1624242699528" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7344" width="16" height="16"><path d="M512 39.384615C250.092308 39.384615 39.384615 250.092308 39.384615 512s210.707692 472.615385 472.615385 472.615385 472.615385-210.707692 472.615385-472.615385S773.907692 39.384615 512 39.384615z m0 238.276923c33.476923 0 59.076923 25.6 59.076923 59.076924s-25.6 59.076923-59.076923 59.076923-59.076923-25.6-59.076923-59.076923 25.6-59.076923 59.076923-59.076924z m98.461538 413.538462c0 9.846154-7.876923 17.723077-19.692307 17.723077h-157.538462c-9.846154 0-19.692308-5.907692-19.692307-17.723077v-39.384615c0-9.846154 7.876923-21.661538 19.692307-21.661539 9.846154 0 19.692308-5.907692 19.692308-17.723077v-78.769231c0-9.846154-7.876923-21.661538-19.692308-21.661538-9.846154 0-19.692308-5.907692-19.692307-17.723077v-39.384615c0-9.846154 7.876923-21.661538 19.692307-21.661539h118.153846c9.846154 0 19.692308 9.846154 19.692308 21.661539v157.538461c0 9.846154 7.876923 17.723077 19.692308 17.723077 9.846154 0 19.692308 9.846154 19.692307 21.661539v39.384615z" p-id="7345" fill="#409eff"></path></svg>'],
        warning: ['#e6a23c', '#fdf6ec', '<svg t="1624242787024" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9517" width="16" height="16"><path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m80 768a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0v32z m0-256a80 80 0 0 1-160 0V256a80 80 0 0 1 160 0v256z" p-id="9518" fill="#e6a23c"></path></svg>'],
        error: ['#f56c6c', '#fef0f0', '<svg t="1624242825160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11692" width="16" height="16"><path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64z m0 394.016l-104-104q-12-12-27.488-12t-27.008 11.488-11.488 27.008 12 27.488l104 104-104 104q-12 12-12 27.488t11.488 27.008 27.008 11.488 27.488-12l104-104 104 104q16 15.008 36.992 9.504t26.496-26.496-9.504-36.992L565.984 512l104-104q12-12 12-27.488t-11.488-27.008-27.008-11.488-27.488 12z" p-id="11693" fill="#f56c6c"></path></svg>'],
    };
    let $antxCon = $antxObj.message || '';
    (!($antxObj instanceof Object)) && ($antxCon = $antxObj);
    const $antxMsg = document.createElement('div');
    const $antxBr = document.createElement('br');
    const $antxI = document.createElement('i');
    const $antxInDiv = document.createElement('div');
    $antxMsg.className = 'www_antx_com-msg';
    $antxInDiv.className = 'www_antx_com-msg-con';
    $antxConfig[$antxKey] === undefined && ($antxKey = 'default');
    $antxI.innerHTML = $antxConfig[$antxKey][2];
    $antxObj.vhHtml ? $antxInDiv.innerHTML = $antxCon : $antxInDiv.innerText = $antxCon;
    $antxI.className = 'www_antx_com-msg-icon';
    $antxMsg.appendChild($antxI);
    $antxMsg.appendChild($antxInDiv);
    $antxPre && $antxMain.appendChild($antxBr);
    $antxMain.appendChild($antxMsg);
    setTimeout(() => {
        $antxMsg.setAttribute("style", `transition: all 0.5s;transform:translateY(66px);opacity:1;color:${$antxConfig[$antxKey][0]};background-color:${$antxConfig[$antxKey][1]};`);
        $antxMain.scrollTop = 9999999999999;
    }, 1);
    api_antx_com($antxMsg, $antxBr, $antxPre);
    $antxPre = $antxMsg;
};

function api_antx_com($antxMsg, $antxBr, $antxPre) {
    setTimeout(() => {
        $antxMsg.setAttribute("style", "transition: all 0.5s;transform:translateY(50px);opacity:0;");
        setTimeout(() => {
            $antxMsg.parentNode.removeChild($antxMsg);
            $antxPre !== null && $antxBr.parentNode.removeChild($antxBr);
        }, 366);
    }, 2444);
}
