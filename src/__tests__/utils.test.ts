import { Denomination } from "../common/constants"
import { fromWei, toWei } from "../common/utils"

describe('fromWei', () => {

  it('should convert value from wei to other denominations', () => {

    {
      const denom : Denomination = { unitName: 'kwei' }
      expect(fromWei('5000', denom)).toBe('5')
    }
    {
      const denom : Denomination = { unitName: 'ether' }
      expect(fromWei('7000000000000000000', denom)).toBe('7')
    }

  })

  it('should convert value from other denominations to wei', () => {

    {
      const denom : Denomination = { unitName: 'kwei' }
      expect(toWei('5', denom)).toBe('5000')
    }

    {
      const denom : Denomination = { unitName: 'ether' }
      expect(toWei('1', denom)).toBe('1000000000000000000')
    }

  })

})
