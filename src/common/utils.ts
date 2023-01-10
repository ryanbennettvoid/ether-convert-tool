import { formatUnits, parseUnits } from "@ethersproject/units"
import { Denomination } from "./constants"

const isValidValue = (value: string) => {
  var pattern = /^\d+(\.\d+)?$/;
  return pattern.test(value);
}

export const fromWei = (value: string, denomination: Denomination) => {
  if (!value) {
    return ''
  }
  if (!isValidValue(value)) {
    return value
  }
  try {
    const convertedValue = formatUnits(value, denomination.unitName).toString()
    // NOTE:  This improves the UX, but causes a bug where
    //        the user can't directly input '.0' (#tradeoffs)
    if (convertedValue.endsWith('.0')) {
      return convertedValue.split('.0')[0]
    }
    return convertedValue
  } catch (err) {
    if (!(err as Error).message.includes('invalid BigNumber string')) {
      console.error('fromWei: ', err)
    }
    return value
  }
}

export const toWei = (value: string, denomination: Denomination, pass?: boolean) => {
  if (pass) {
    return value
  }
  if (!value) {
    return ''
  }
  if (!isValidValue(value)) {
    return value
  }
  try {
    if (denomination.unitName === 'wei' && value.includes('.')) {
      value = value.split('.')[0]
    }
    const convertedValue = parseUnits(value, denomination.unitName).toString()
    return convertedValue
  } catch (err) {
    console.error('toWei: ', err)
    return value
  }
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
