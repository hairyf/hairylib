/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-12 11:19:24
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-12 11:24:55
 */

import { sayings } from './saying'
import axios from 'axios'
export const getSayingOne = () => {
  return sayings[Math.floor(Math.random() * sayings.length)]
}

export const getVerse = async () => {
  const { data } = await axios.get<{ data: { content: string } }>(
    'https://v2.jinrishici.com/sentence',
    {
      headers: { 'X-User-Token': 'YuB0FrXV+aSwO9Mm1NvKVVlmmpo2lHFw' }
    }
  )
  return data.data.content
}
