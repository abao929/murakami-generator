// @ts-nocheck
import { useEffect, useRef, useState, createContext } from "react"
import styled from "styled-components"
import Dropdown from "./Dropdown"
import Flower from "./Flower"
import Slider from "./Slider"
import { toPng, toSvg } from "html-to-image"
import download from "downloadjs"
import {
  randHSL,
  randPosition,
  randScale,
  randRotation,
  randHue,
  randSaturation,
  randLightness,
} from "./Randomize"
import FlowerColorPicker from "./FlowerColorPicker"
import ColorPicker from "./ColorPicker"

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

const flowerPropsValues: FlowerProps[] = createContext(
  [...Array(100)].map((_, idx): FlowerProps => {
    return { idx: idx, hidden: true }
  })
)
flowerPropsValues[0].hidden = false

const updateFlowerProp = (idx: number, key: keyof FlowerProps, value: any) => {
  let prop = flowerPropsValues[idx]
  flowerPropsValues[idx] = { ...prop, [key]: value }
}

export default function Body() {
  // I COULD HAVE AN ARRAY WITH 100 FLOWERS AND THEN JUST OPTIONALLY RENDER THEM
  const defaultColors: FlowerColors = {
    petal0: "#EE32A2",
    petal1: "#F0413A",
    petal2: "#F57E31",
    petal3: "#FAB835",
    petal4: "#F6F238",
    petal5: "#98D54B",
    petal6: "#38B561",
    petal7: "#41BBAA",
    petal8: "#57BBEC",
    petal9: "#3F84CC",
    petal10: "#4D45A4",
    petal11: "#9F3EA4",
    leftEye: "black",
    rightEye: "black",
    face: "#F5F015",
    mouth: "#ED1D25",
  }
  const [numFlowers, setNumFlowers] = useState(1)
  const [randomness, setRandomness] = useState(0)
  const [render, setRender] = useState(true)
  const MIN_RANDOMNESS = 0
  const MAX_RANDOMNESS = 4
  const MIN_FLOWERS = 1
  const MAX_FLOWERS = 100
  const [canvasSize, setCanvasSize] = useState<Size>({
    width: 900,
    height: 600,
  })
  const rerender = () => {
    setRender(!render)
  }

  const randomizeAll = () => {
    setNumFlowers(Math.floor(Math.random() * MAX_FLOWERS - MIN_FLOWERS + 1))
    setRandomness(
      Math.floor(Math.random() * MAX_RANDOMNESS - MIN_RANDOMNESS + 1)
    )
  }
  const saveImage = () => {
    let canvas: HTMLElement | null = document.getElementById("canvas")
    console.log(canvas)
    if (canvas) {
      toPng(canvas).then((url) => {
        download(url, "flowers.png")
      })
    }
  }
  const randomizeAllPositions = () => {
    for (let i = 0; i < flowerPropsValues.length; i++) {
      flowerPropsValues[i].placement = randPosition(
        canvasSize,
        flowerPropsValues[i].scale ?? 1
      )
    }
    rerender()
  }

  useEffect(() => {
    let num = Number.isNaN(numFlowers) ? 1 : numFlowers
    for (let i = 0; i < num; i++) {
      flowerPropsValues[i].colors = flowerPropsValues[i].colors ?? {
        ...defaultColors,
      }
      flowerPropsValues[i].hidden = false
      flowerPropsValues[i].scale =
        flowerPropsValues[i].scale ?? randScale(0.4, 2)
      flowerPropsValues[i].placement =
        flowerPropsValues[i].placement ??
        randPosition(canvasSize, flowerPropsValues[i].scale ?? 1)
      flowerPropsValues[i].rotate =
        flowerPropsValues[i].rotate ?? randRotation()
      flowerPropsValues[i].colors = flowerPropsValues[i].colors ?? {
        ...defaultColors,
      }
      if (randomness === 1) {
        flowerPropsValues[i].colors.petal0 =
          flowerPropsValues[i].colors.petal2 =
          flowerPropsValues[i].colors.petal4 =
          flowerPropsValues[i].colors.petal6 =
          flowerPropsValues[i].colors.petal8 =
          flowerPropsValues[i].colors.petal10 =
            randHSL(1)
        flowerPropsValues[i].colors.petal1 =
          flowerPropsValues[i].colors.petal3 =
          flowerPropsValues[i].colors.petal5 =
          flowerPropsValues[i].colors.petal7 =
          flowerPropsValues[i].colors.petal9 =
          flowerPropsValues[i].colors.petal11 =
            randHSL(1)
        flowerPropsValues[i].colors.face = "#fff"
      } else if (randomness === 2) {
        let hue = randHue()
        let saturation = randSaturation(1)
        let lightness = randLightness(1)
        for (let i = 0; i < 12; i++) {
          flowerPropsValues[i].colors[
            `petal${i}` as keyof FlowerColors
          ] = `hsl(${(hue + i * 20) % 360}, ${saturation}%, ${lightness}%)`
        }
      } else if (randomness < 3) {
        for (let key in flowerPropsValues[i].colors) {
          flowerPropsValues[i].colors[key as keyof FlowerColors] =
            randHSL(randomness)
        }
      }
    }
    for (let i = num; i < flowerPropsValues.length; i++) {
      flowerPropsValues[i].hidden = true
    }
    console.log(flowerPropsValues)
    rerender()
  }, [canvasSize, numFlowers])
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
          label={"# of Flowers"}
          value={numFlowers}
          setValue={setNumFlowers}
          showInput={true}
        ></Slider>
        <Slider
          min={MIN_RANDOMNESS}
          max={MAX_RANDOMNESS}
          label={"Randomness"}
          value={randomness}
          setValue={setRandomness}
        ></Slider>
        <button onClick={() => randomizeAll()}>Randomize All</button>
        <button onClick={() => randomizeAllPositions()}>
          Randomize Positions
        </button>
        <Dropdown
          defaultItem={"hey lol"}
          currentItem={"hey lol"}
          labelField={"constructor"}
          selectItem={function (arg0: any): void {
            throw new Error("Function not implemented.")
          }}
        >
          what's oging on there
        </Dropdown>
        <button onClick={() => saveImage()}>Download as PNG</button>
        {flowerPropsValues[0].colors && (
          <ColorPicker
            propIdx={0}
            colors={flowerPropsValues[0].colors}
            colorKey={"mouth"}
          />
        )}
        {/* <FlowerColorPicker colors={flowerPropsValues[0].colors} /> */}
        {flowerPropsValues[0].colors?.mouth}
      </Menu>
      <CanvasContainer>
        <Canvas id="canvas" width={900} height={600}>
          {flowerPropsValues.map((flowerProp, i) => {
            console.log("testing", flowerProp.colors)
            return <Flower key={i} {...flowerProp} />
          })}
        </Canvas>
      </CanvasContainer>
    </Container>
  )
}
