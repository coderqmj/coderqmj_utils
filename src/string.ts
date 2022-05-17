/**
 * 转换为大驼峰
 */

/**
 * 转换小驼峰
 */

/**
 * 获取requestID
 */
/**
 * 生成随机颜色
 */
export function randomColor(): string {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
/**
 * @description 哈希转rgb
 * @param hex string
 * @returns string
 */
export function hexToRgb(hex: string) {
  return (
    'rgb(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ')'
  );
}
/**
 * @description 哈希转rgba
 * @param hex
 * @param opacity
 */
export function hexToRgba(hex: string, opacity: number): string {
  return (
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    opacity +
    ')'
  );
}
