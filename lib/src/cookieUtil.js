"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = exports.getCookie = void 0;
/**
 * 获取某个key的cookie
 */
var getCookie = function (key) {
    var _a;
    var cookieRegExp = new RegExp("(?:^|;+|\\s+)".concat(key, "=([^;]*)"));
    var m = (_a = document === null || document === void 0 ? void 0 : document.cookie) === null || _a === void 0 ? void 0 : _a.match(cookieRegExp);
    return !m ? "" : m[1];
};
exports.getCookie = getCookie;
/**
 * 设置cookie
 * @method set
 * @param {String} name 名称
 * @param {String} value 值
 * @param {String} domain 域
 * @param {String} path 路径
 * @param {String} hour 过期时间(小时)
 */
var setCookie = function (name, value, domain, path, hour) {
    var expire = new Date();
    expire.setTime(expire.getTime() + 36e5 * hour);
    document.cookie = "".concat(name, "=").concat(value, "; ").concat(hour ? "expires=".concat(expire.toUTCString(), "; ") : "").concat(path ? "path=".concat(path, "; ") : "path=/; ").concat(domain ? "domain=".concat(domain, ";") : "domain=".concat(document.domain, ";"));
    return true;
};
exports.setCookie = setCookie;
