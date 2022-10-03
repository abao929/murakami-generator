import React, { useEffect } from "react"
import { defaultColors } from "./FlowerProps"

type Props = {
  fp: FlowerProps
  s: Function
}

export default function Test({ fp, s }: Props) {
  useEffect(() => {
    let a = fp.colors ?? { ...defaultColors }
    a.petal0 = "#fff"
    s(a)
    console.log("sure hope this only runs once")
  }, [])

  return <div>{fp.colors.petal0}</div>
}
