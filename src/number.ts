/**
 * 升向排序
 */
export function ascSort(numsArray: number[]) {
  return numsArray.sort((a, b) => a - b);
}
/**
 * 逆向排序
 */
export function descSort(numsArray: number[]) {
  return numsArray.sort((a, b) => b - a);
}
