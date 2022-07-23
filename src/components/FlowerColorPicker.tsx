import ColorPicker from "./ColorPicker"

type Props = {
  colors: FlowerColors
}

export default function FlowerColorPicker({ colors }: Props) {
  // let keyToString = (key: string) => {
  //   if (key.includes("petal")) {
  //     return `Petal ${parseInt(key.split("petal")[1]) + 1}`
  //   } else if (key.includes("Eye")) {
  //     let s = key.split("Eye")
  //     console.log(s)
  //     return `${s[0].charAt(0).toUpperCase()}${s[0].slice(1)} Eye`
  //   }
  //   return key.charAt(0).toUpperCase() + key.slice(1)
  // }

  // let objects = []
  // for (let key in colors) {
  //   let value = colors[key as keyof FlowerColors]
  //   objects.push(
  //     <div>
  //       {keyToString(key)}: {value}
  //       <ColorPicker
  //         colors={colors}
  //         colorKey={key as keyof FlowerColors}
  //       />
  //     </div>
  //   )
  // }

  // return <div>{objects.map((o, i) => o)}</div>
  return <ColorPicker propIdx={0} colors={colors} colorKey={"mouth"} />
}
