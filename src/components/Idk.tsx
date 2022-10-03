import { useEffect, useState } from "react"
import { toPng, toSvg } from "html-to-image"
import download from "downloadjs"
import styled from "styled-components"
import Slider from "./Slider"
import Flower from "./Flower"
import { defaultColors } from "./FlowerProps"
import {
  randHSL,
  randPosition,
  randScale,
  randRotation,
  randHue,
  randSaturation,
  randLightness,
} from "./Randomize"
import ColorPicker from "./ColorPicker"
import Test from "./Test"

const MIN_RANDOMNESS = 0
const MAX_RANDOMNESS = 4
const MIN_FLOWERS = 1
const MAX_FLOWERS = 100

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

export default function Idk() {
  const [flowerProps, setFlowerProps] = useState<FlowerProps[]>(
    [...Array(100)].map((_, idx): FlowerProps => {
      return { idx: idx, hidden: true, colors: { ...defaultColors } }
    })
  )
  flowerProps[0].hidden = false
  const [a, setA] = useState(flowerProps[0])
  const [numFlowers, setNumFlowers] = useState(1)
  const [canvasSize, setCanvasSize] = useState<Size>({
    width: 900,
    height: 600,
  })

  const saveImage = () => {
    let canvas: HTMLElement | null = document.getElementById("canvas")
    console.log(canvas)
    if (canvas) {
      toPng(canvas).then((url) => {
        download(url, "flowers.png")
      })
    }
  }

  useEffect(() => {
    let num = Number.isNaN(numFlowers) ? 1 : numFlowers
    for (let i = 0; i < num; i++) {
      flowerProps[i].colors = flowerProps[i].colors ?? {
        ...defaultColors,
      }
      flowerProps[i].placement =
        flowerProps[i].placement ??
        randPosition(canvasSize, flowerProps[i].scale ?? 1)
      flowerProps[i].hidden = false
    }
    for (let i = num; i < flowerProps.length; i++) {
      flowerProps[i].colors = flowerProps[i].colors ?? {
        ...defaultColors,
      }
      flowerProps[i].hidden = true
    }
  })

  return (
    <Container>
      <Menu>
        <Slider
          min={MIN_FLOWERS}
          max={MAX_FLOWERS}
          label={"# of Flowers"}
          value={numFlowers}
          setValue={setNumFlowers}
          showInput={true}
        />
        <button onClick={() => saveImage()}>Download as PNG</button>
        <ColorPicker
          propIdx={0}
          colorKey={"mouth"}
          flowerProps={flowerProps}
          setFlowerProps={setFlowerProps}
        />
        {a.colors?.petal0 ?? "losing my mind"}
        {flowerProps[0].colors?.mouth}
        <Test fp={a} s={setA} />
      </Menu>
      <CanvasContainer>
        <Canvas id="canvas" width={900} height={600}>
          {flowerProps.map((flowerProp, i) => {
            return <Flower key={i} {...flowerProp} />
          })}
        </Canvas>
      </CanvasContainer>
    </Container>
  )
}
