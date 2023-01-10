
export interface Denomination {
  index?: number,
  unitName: string
}

export const DENOMINATIONS: Denomination[] = [
  { index: 1, unitName: 'wei' },
  { index: 2, unitName: 'kwei' },
  { index: 3, unitName: 'mwei' },
  { index: 4, unitName: 'gwei' },
  { index: 5, unitName: 'szabo' },
  { index: 6, unitName: 'finney' },
  { index: 7, unitName: 'ether' },
]

export const LOCAL_STORAGE_KEY = 'weiValue'
