import styled from 'styled-components';

const Component = styled.input`
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  border: none;
`

interface InputProps extends React.ComponentPropsWithoutRef<'input'> { }

export const Input = (props: InputProps) => {
  return <Component
    {...props}
    type='number'
  />
}
