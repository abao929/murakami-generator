import styled from 'styled-components'
import Header from './components/Header'
import Body from './components/Body'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 1fr;
`

export default function App() {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  )
}
