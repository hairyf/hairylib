/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-02-04 16:51:14
 * @LastEditTime: 2021-06-28 16:12:41
 * @Description: 倒计时逻辑钩子
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import dayjs from 'dayjs'
import durationPlugin from 'dayjs/plugin/duration'
import { computed, Ref } from 'vue'

dayjs.extend(durationPlugin)
declare module "dayjs/plugin/duration" {
  interface Duration {
    $d: {
      years: number
      months: number
      days: number
      hours: number
      minutes: number
      seconds: number
      milliseconds: number
    }
  }
}

export const useCountdown = (
  units: Ref<plugin.DurationUnitsObjectType | string | number>,
) => {
  return computed(() => {
    const durations = dayjs.duration(units.value as number)
    return durations.$d
  })
}


