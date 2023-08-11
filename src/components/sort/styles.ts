import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  margin-left: 35px;
  color: #202223;
  border: 0;
  background: transparent;
  font-size: 14px;

  &:hover {
    background: transparent;
    outline: 1px solid transparent;
    color: red;
    transition: color 0.2s ease-in-out;
  }
`

export const Label = styled.label`
  padding-bottom: 15px;
  font-size: 16px;
`

export const SortBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
}`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
}`
