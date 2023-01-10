import styled from 'styled-components'
import { fromWei, toWei } from '../common/utils';
import { Input } from "./common/Input";
import { Title } from "./common/Title";
import { FaEthereum } from 'react-icons/fa'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const IconWrapper = styled.div`
  font-size: 7em;
  margin-bottom: 50px;
`
const BodyTitle = styled(Title)`
  margin-bottom: 100px;
`
interface BigInputWrapperProps {
  padding: number
}
const BigInputWrapper = styled.div<BigInputWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding}px;
`
const BigInputLabel = styled.div``
const BigInput = styled(Input)`
  font-size: 2em;
  border-bottom: 3px solid #eee;
`

interface BodyProps {
  weiValue: string
  setWeiValue: (value: string) => void
  isPanelVisible: boolean
}
export const Body = (props: BodyProps) => {

  const { weiValue, setWeiValue, isPanelVisible } = props

  return (
    <Container>
      {!isPanelVisible && <IconWrapper><FaEthereum /></IconWrapper>}
      {!isPanelVisible && <BodyTitle>Ether Unit Conversion Tool</BodyTitle>}

      <BigInputWrapper padding={isPanelVisible ? 50 : 0}>
        {weiValue.length > 0 && <BigInputLabel>Gwei Value</BigInputLabel>}
        <BigInput
          autoFocus
          placeholder='Enter Gwei Value'
          value={fromWei(weiValue, { unitName: 'gwei' })}
          onChange={(e: any) => setWeiValue(toWei(e.target.value, { unitName: 'gwei' }))}
        />
      </BigInputWrapper>

    </Container>
  );
};
