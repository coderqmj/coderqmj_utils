/**
 * 获取某个key的cookie
 */
export declare const getCookie: (key: string) => string;
/**
 * 设置cookie
 * @method set
 * @param {String} name 名称
 * @param {String} value 值
 * @param {String} domain 域
 * @param {String} path 路径
 * @param {String} hour 过期时间(小时)
 */
export declare const setCookie: (name: string, value: string, domain: string, path: string, hour: number) => boolean;
