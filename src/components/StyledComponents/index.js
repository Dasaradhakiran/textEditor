import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border: 0px;
  cursor: pointer;
  outline: none;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  font-family: ${props => (props.italicActive ? 'italic' : 'Roboto')};
  border: 0px;
  padding: 10px;
  outline: none;
  font-size: 17px;
  color: #f8fafc;
  font-weight: ${props => (props.boldActive ? '1000' : '0')};
  font-style: ${props => (props.italicActive ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underLineActive ? 'underline' : 'normal')};
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1500px) and (max-width: 2000px) {
    font-size: 25px;
    padding: 20px;
  }
  @media screen and (min-width: 2001px) {
    font-size: 40px;
    padding: 30px;
  }
`
