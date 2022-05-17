"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNullValue = exports.isNull = exports.deepClone = exports.isObject = void 0;
/**
 * 判断是否对象
 *
 */
function isObject(obj) {
    var valueType = typeof obj;
    return obj !== null && (valueType === 'object' || valueType === 'function');
}
exports.isObject = isObject;
/**
 * 深拷贝
 */
function deepClone(originValue, map) {
    var e_1, _a;
    if (map === void 0) { map = new WeakMap(); }
    // 判断是否是一个Set类型
    if (originValue instanceof Set) {
        return new Set(__spreadArray([], __read(originValue), false));
    }
    // 判断是否是一个Map类型
    if (originValue instanceof Map) {
        return new Map(__spreadArray([], __read(originValue), false));
    }
    // 判断如果是Symbol的value, 那么创建一个新的Symbol
    if (typeof originValue === 'symbol') {
        return Symbol(originValue.description);
    }
    // 判断如果是函数类型, 那么直接使用同一个函数
    if (typeof originValue === 'function') {
        return originValue;
    }
    // 判断传入的originValue是否是一个对象类型
    if (!isObject(originValue)) {
        return originValue;
    }
    if (map.has(originValue)) {
        return map.get(originValue);
    }
    // 判断传入的对象是数组, 还是对象
    var newObject = Array.isArray(originValue) ? [] : {};
    map.set(originValue, newObject);
    for (var key in originValue) {
        newObject[key] = deepClone(originValue[key], map);
    }
    // 对Symbol的key进行特殊的处理
    var symbolKeys = Object.getOwnPropertySymbols(originValue);
    try {
        for (var symbolKeys_1 = __values(symbolKeys), symbolKeys_1_1 = symbolKeys_1.next(); !symbolKeys_1_1.done; symbolKeys_1_1 = symbolKeys_1.next()) {
            var sKey = symbolKeys_1_1.value;
            // const newSKey = Symbol(sKey.description)
            newObject[sKey] = deepClone(originValue[sKey], map);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (symbolKeys_1_1 && !symbolKeys_1_1.done && (_a = symbolKeys_1.return)) _a.call(symbolKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return newObject;
}
exports.deepClone = deepClone;
/**
 * 大驼峰对象转小驼峰
 */
/**
 * 小驼峰对象转大驼峰
 */
/**
 * 属性是否为null，undefined，''， {}
 */
function isNull(value) {
    var type = Object.prototype.toString.call(value);
    return (type === '[object Null]' ||
        type === '[object Undefined]' ||
        value === '' ||
        JSON.stringify(value) === '{}');
}
exports.isNull = isNull;
/**
 * 删除对象中属性的空值
 */
function deleteNullValue(obj) {
    var newObj = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (!isNull(obj[key])) {
                if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                    newObj[key] = deleteNullValue(obj[key]);
                }
                else {
                    newObj[key] = obj[key];
                }
            }
        }
    }
    return newObj;
}
exports.deleteNullValue = deleteNullValue;
