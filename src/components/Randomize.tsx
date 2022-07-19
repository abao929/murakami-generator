const randHue = () => {
  return Math.floor(Math.random() * 360)
}
const randFromDistribution = (tensDistribution: number[]) => {
  if (tensDistribution.length < 10) {
    console.log("invalid distribution")
    return 0
  }
  const tensDigit = tensDistribution[Math.floor(Math.random() * 10)]
  return Math.floor((Math.random() + tensDigit) * 10)
}

const randHSL = (randomness?: number) => {
  let lightnessDistribution: number[] = []
  let saturationDistribution: number[] = []
  switch (randomness) {
    case 1:
      lightnessDistribution = [4, 4, 5, 5, 5, 5, 5, 5, 6, 6]
      saturationDistribution = [4, 5, 6, 7, 8, 9, 9, 9, 9, 9]
      break
    case 2:
      lightnessDistribution = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      saturationDistribution = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      break
    default:
      lightnessDistribution = [4, 4, 5, 5, 5, 5, 5, 5, 6, 6]
      saturationDistribution = [4, 5, 6, 7, 8, 9, 9, 9, 9, 9]
  }
  const h: number = randHue()
  const s: number = randFromDistribution(saturationDistribution)
  const l: number = randFromDistribution(lightnessDistribution)
  return `hsl(${h}, ${s}%, ${l}%)`
}

const randPosition = (canvasSize: Size): Position => {
  let position: Position = {
    x: Math.floor(Math.random() * canvasSize.width) - 50,
    y: Math.floor(Math.random() * canvasSize.height) - 50,
    z: 1,
  }
  return position
}

const randRotation = (): number => {
  return Math.floor(Math.random() * 60) - 30
}

const randScale = (min: number, max: number): number => {
  return min + Math.random() * (max - min)
}

export { randHSL, randHue, randPosition, randScale, randRotation }
