(function ($) {
    $.fn.captcha = function (callback, config) {
        let id = "captcha-" + Math.floor(Math.random() * 90000 + 10000);
        config = config ?? {};
        let modalId = config['modalId'] ?? 'captcha-modal';
        let title = config['title'] ?? '请完成安全验证';
        let center = config['center'] ?? false;
        let template = `<div class="modal fade" id="${modalId}"><div class="modal-dialog ${center ? 'modal-dialog-centered' : ''}"><div class="modal-content"><div class="modal-header">${title}<button type="button" class="btn-sm btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body"><div id="${id}" class="nc-container"></div></div><div class="modal-footer"><button type="button" class="btn btn-sm btn-primary" data-bs-dismiss="modal"><small>关闭</small></button></div></div></div></div>`;
        $(this).append(template);
        $(`#${modalId}`).modal('show');
        let NC_Opt = {
            renderTo: `#${id}`,
            appkey: "FFFF0N0000000000B42D",
            scene: "nc_login",
            customWidth: 460,
            is_Opt: 0,
            language: "cn",
            isEnabled: true,
            timeout: 3000,
            times: 5,
            callback: callback
        };
        let nc = new noCaptcha(NC_Opt);
        nc.upLang('cn', {
            _startTEXT: "请按住滑块，拖动到最右边",
            _yesTEXT: "验证通过",
            _error300: "哎呀，出错了，点击<a href=\"javascript:__nc.reset()\">刷新</a>再来一次",
            _errorNetwork: "网络不给力，请<a href=\"javascript:__nc.reset()\">点击刷新</a>",
        });
    };
})(jQuery);