import styled from 'styled-components';

const Component = styled.button`
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    &:hover {
        cursor: pointer;
    }
`

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> { }

export const Button = (props: ButtonProps) => {
    const { children, ...otherProps } = props
    return <Component {...otherProps}>{children}</Component>
}
