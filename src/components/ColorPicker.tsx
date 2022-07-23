import { useState } from "react"
import { SketchPicker } from "react-color"
import { flowerPropsValues, defaultColors } from "./FlowerProps"

interface Props {
  propIdx: number
  colorKey: keyof FlowerColors
}

export default function ColorPicker({ propIdx, colorKey }: Props) {
  const [color, setColor] = useState(defaultColors[colorKey])
  flowerPropsValues[propIdx].colors = flowerPropsValues[propIdx].colors ?? {
    ...defaultColors,
  }
  const handleChange = (e: any) => {
    setColor(e.hex)
    // @ts-ignore
    flowerPropsValues[propIdx].colors[colorKey] = color
  }

  return (
    <SketchPicker color={color} onChangeComplete={(e) => handleChange(e)} />
  )
}
