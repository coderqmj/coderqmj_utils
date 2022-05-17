/**
 * 判断是否对象
 *
 */
export declare function isObject(obj: any): boolean;
/**
 * 深拷贝
 */
export declare function deepClone(originValue: any, map?: WeakMap<object, any>): any;
/**
 * 大驼峰对象转小驼峰
 */
/**
 * 小驼峰对象转大驼峰
 */
/**
 * 属性是否为null，undefined，''， {}
 */
export declare function isNull(value: any): boolean;
/**
 * 删除对象中属性的空值
 */
export declare function deleteNullValue(obj: any): any;
