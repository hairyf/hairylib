/**
 * 生成区间数组
 * arange(<start>, <stop>, [step=1], [target=[]], [at]) -> <target>
 */
export const arange = (x1: number, x2?: number, stp = 1, z: number[] = [], z0 = z.length) => {
  if (!x2) x1 -= x2 = x1
  for (let z1 = z0 + Math.max(Math.ceil((++x2 - x1) / stp), 0); z0 < z1; x1 += stp) z[z0++] = x1
  return z
}
