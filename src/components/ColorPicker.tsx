import { useEffect, useState } from "react"
import { SketchPicker } from "react-color"
import { defaultColors } from "./FlowerProps"

interface Props {
  propIdx: number
  colorKey: keyof FlowerColors
  flowerProps: FlowerProps[]
  setFlowerProps: Function
}

export default function ColorPicker({
  propIdx,
  colorKey,
  flowerProps,
  setFlowerProps,
}: Props) {
  const [color, setColor] = useState(defaultColors[colorKey])
  const handleChange = (e: any) => {
    setColor(e.hex)
  }

  useEffect(() => {
    let newProp = flowerProps[propIdx]?.colors
    newProp = newProp ?? { ...defaultColors }
    newProp[colorKey] = color
    setFlowerProps([
      ...flowerProps.slice(0, propIdx),
      newProp,
      ...flowerProps.slice(propIdx + 1),
    ])
  }, [color])

  return (
    <SketchPicker color={color} onChangeComplete={(e) => handleChange(e)} />
  )
}
