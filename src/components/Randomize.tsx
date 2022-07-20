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
  const h: number = randHue()
  const s: number = randSaturation(randomness ?? 1)
  const l: number = randLightness(randomness ?? 1)
  return `hsl(${h}, ${s}%, ${l}%)`
}

const randSaturation = (randomness: number): number => {
  let saturationDistribution: number[] = []
  switch (randomness) {
    case 1:
      saturationDistribution = [4, 5, 6, 7, 8, 9, 9, 9, 9, 9]
      break
    case 2:
      saturationDistribution = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      break
    default:
      saturationDistribution = [4, 5, 6, 7, 8, 9, 9, 9, 9, 9]
  }
  return randFromDistribution(saturationDistribution)
}

const randLightness = (randomness: number): number => {
  let lightnessDistribution: number[] = []
  switch (randomness) {
    case 1:
      lightnessDistribution = [4, 4, 5, 5, 5, 5, 5, 5, 6, 6]
      break
    case 2:
      lightnessDistribution = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      break
    default:
      lightnessDistribution = [4, 4, 5, 5, 5, 5, 5, 5, 6, 6]
  }
  return randFromDistribution(lightnessDistribution)
}

const randPosition = (canvasSize: Size, scale: number): Position => {
  let position: Position = {
    x: Math.floor(Math.random() * canvasSize.width) - 50 * scale,
    y: Math.floor(Math.random() * canvasSize.height) - 50 * scale,
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

export {
  randHSL,
  randHue,
  randSaturation,
  randLightness,
  randPosition,
  randScale,
  randRotation,
}
