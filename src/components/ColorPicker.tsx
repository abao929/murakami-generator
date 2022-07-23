import { useState } from "react"
import { SketchPicker } from "react-color"

interface Props {
  propIdx: number
  colors: FlowerColors
  colorKey: keyof FlowerColors
}

export default function ColorPicker({ propIdx, colors, colorKey }: Props) {
  const [color, setColor] = useState(colors[colorKey])
  const handleChange = (e: any) => {
    setColor(e.hex)
    console.log("before", colors)
    colors[colorKey] = color
    console.log("after", colors)
  }
  return (
    <SketchPicker color={color} onChangeComplete={(e) => handleChange(e)} />
  )
}
