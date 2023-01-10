import styled from "styled-components"
import { capitalize } from "../common/utils"
import { Input } from './common/Input'

const Container = styled.div``
const Label = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 800;
`
const NumberInput = styled(Input)`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.2em;
`

interface DenominationFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  index: number
  unitName: string
}

const DenominationField = (props: DenominationFieldProps) => {

  const { index, unitName } = props

  return (
    <Container>
      <Label>{capitalize(unitName)}</Label>
      <NumberInput
        {...props}
        tabIndex={index}
        placeholder='?'
      />
    </Container>
  )
}

export default DenominationField
