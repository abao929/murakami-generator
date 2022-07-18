import { useRef, useState } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import Flower from './Flower'
import Slider from './Slider'
import { toPng, toSvg } from 'html-to-image'
import download from 'downloadjs'

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`

const Menu = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 5px 10px 10px 0px;
  padding: 0 20px;
`

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Canvas = styled.div<Size>`
  display: flex;
  width: ${(prop) => prop.width}px;
  height: ${(prop) => prop.height}px;
  background-color: #fff;
  overflow: scroll;
  box-shadow: rgba(100, 100, 100, 0.2) 0px 7px 29px 0px;
`

export default function Body() {
  // I COULD HAVE AN ARRAY WITH 100 FLOWERS AND THEN JUST OPTIONALLY RENDER THEM
  const defaultFlowerProps: FlowerProps = { hidden: true }
  const flowerPropsValues: FlowerProps[] = Array(100).fill(defaultFlowerProps)
  const [numFlowers, setNumFlowers] = useState(1)
  const [randomness, setRandomness] = useState(0)
  const MIN_RANDOMNESS = 0
  const MAX_RANDOMNESS = 2
  const MIN_FLOWERS = 1
  const MAX_FLOWERS = 100
  const randomizeAll = () => {
    setNumFlowers(Math.floor(Math.random() * MAX_FLOWERS - MIN_FLOWERS + 1))
    setRandomness(
      Math.floor(Math.random() * MAX_RANDOMNESS - MIN_RANDOMNESS + 1)
    )
  }
  const saveImage = () => {
    let canvas: HTMLElement | null = document.getElementById('canvas')
    console.log(canvas)
    if (canvas) {
      toPng(canvas).then((url) => {
        download(url, 'flowers.png')
      })
    }
  }

  const flowers: JSX.Element[] = []
  for (let i = 0; i < numFlowers; i++) {
    let props = flowerPropsValues[i]
    props.hidden = false
    props.randomness = randomness
    flowers.push(<Flower {...props} />)
  }
  console.log(flowers)

  return (
    <Container>
      <Menu>
        <Slider
          min={MIN_FLOWERS}
          max={MAX_FLOWERS}
          label={'# of Flowers'}
          value={numFlowers}
          setValue={setNumFlowers}
          showInput={true}
        ></Slider>
        <Slider
          min={MIN_RANDOMNESS}
          max={MAX_RANDOMNESS}
          label={'Randomness'}
          value={randomness}
          setValue={setRandomness}
        ></Slider>
        <button onClick={() => randomizeAll()}>Randomize All</button>
        <Dropdown
          defaultItem={'hey lol'}
          currentItem={'hey lol'}
          labelField={'constructor'}
          items={[]}
          selectItem={function (arg0: any): void {
            throw new Error('Function not implemented.')
          }}
        />
        <button onClick={() => saveImage()}>Download as PNG</button>
      </Menu>
      <CanvasContainer>
        <Canvas id="canvas" width={900} height={600}>
          {flowers}
        </Canvas>
      </CanvasContainer>
    </Container>
  )
}
