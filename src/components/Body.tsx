import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import Flower from './Flower'
import Slider from './Slider'
import { toPng, toSvg } from 'html-to-image'
import download from 'downloadjs'
import { randHSL, randPosition, randScale, randRotation } from './Randomize'

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
  width: ${(prop) => prop.width}px;
  height: ${(prop) => prop.height}px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 100, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  position: relative;
`

const defaultFlowerProps: FlowerProps = {
  hidden: true,
}
const flowerPropsValues: FlowerProps[] = Array(100).fill(defaultFlowerProps)

export default function Body() {
  // I COULD HAVE AN ARRAY WITH 100 FLOWERS AND THEN JUST OPTIONALLY RENDER THEM
  const defaultColors: FlowerColors = {
    petal0: '#EE32A2',
    petal1: '#F0413A',
    petal2: '#F57E31',
    petal3: '#FAB835',
    petal4: '#F6F238',
    petal5: '#98D54B',
    petal6: '#38B561',
    petal7: '#41BBAA',
    petal8: '#57BBEC',
    petal9: '#3F84CC',
    petal10: '#4D45A4',
    petal11: '#9F3EA4',
    leftEye: 'black',
    rightEye: 'black',
    face: '#F5F015',
    mouth: '#ED1D25',
  }
  const [numFlowers, setNumFlowers] = useState(1)
  const [randomness, setRandomness] = useState(0)
  const MIN_RANDOMNESS = 0
  const MAX_RANDOMNESS = 2
  const MIN_FLOWERS = 1
  const MAX_FLOWERS = 100
  const [canvasSize, setCanvasSize] = useState<Size>({
    width: 900,
    height: 600,
  })

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
  useEffect(() => {
    for (let i = 0; i < flowerPropsValues.length; i++) {
      flowerPropsValues[i].hidden = i >= numFlowers
      console.log('im gonna cry', i, i > numFlowers)
    }
    console.log('why does this not work', numFlowers, flowerPropsValues)
  }, [numFlowers])
  // const flowers: JSX.Element[] = []
  // for (let i = 0; i < numFlowers; i++) {
  //   let props = flowerPropsValues[i]
  //   props.placement = randPosition({ ...canvasSize })
  //   if (randomness !== 0) {
  //     let flowerColors = props.colors ?? defaultColors
  //     for (let key in flowerColors) {
  //       flowerColors[key as keyof FlowerColors] = randHSL(randomness)
  //     }
  //     console.log('placement is: ', props.placement)
  //     if (randomness === 1) flowerColors.face = '#fff'
  //   }
  //   props.hidden = false
  //   props.randomness = randomness
  //   props.scale = randScale(0.4, 2.3)
  //   props.rotate = randRotation()
  //   flowers.push(<Flower {...props} />)
  // }
  // console.log(flowers)

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
          {flowerPropsValues.map((flowerProp, i) => {
            return <Flower key={i} {...flowerProp} />
          })}
        </Canvas>
      </CanvasContainer>
    </Container>
  )
}
