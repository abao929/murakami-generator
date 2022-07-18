import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 400 2rem serif;
  height: 60px;
  /* border-bottom: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 10px 0px;
  /* z-index: -1; */
`

export default function Header() {
  return <StyledHeader>Murakami Flower Generator</StyledHeader>
}
