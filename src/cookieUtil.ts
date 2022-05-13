/**
 * 获取某个key的cookie
 */
export const getCookie = (key: string): string => {
  const cookieRegExp = new RegExp(`(?:^|;+|\\s+)${key}=([^;]*)`);
  const m = document?.cookie?.match(cookieRegExp);
  return !m ? "" : m[1];
};

/**
 * 设置cookie
 * @method set
 * @param {String} name 名称
 * @param {String} value 值
 * @param {String} domain 域
 * @param {String} path 路径
 * @param {String} hour 过期时间(小时)
 */
export const setCookie = (
  name: string,
  value: string,
  domain: string,
  path: string,
  hour: number
): boolean => {
  const expire = new Date();
  expire.setTime(expire.getTime() + 36e5 * hour);
  document.cookie = `${name}=${value}; ${
    hour ? `expires=${expire.toUTCString()}; ` : ""
  }${path ? `path=${path}; ` : "path=/; "}${
    domain ? `domain=${domain};` : `domain=${document.domain};`
  }`;

  return true;
};
