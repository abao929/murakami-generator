export {}
declare global {
  interface Position {
    x: number
    y: number
    z?: number
  }

  interface FlowerColors {
    petal0: string
    petal1: string
    petal2: string
    petal3: string
    petal4: string
    petal5: string
    petal6: string
    petal7: string
    petal8: string
    petal9: string
    petal10: string
    petal11: string
    leftEye: string
    rightEye: string
    face: string
    mouth: string
  }

  interface FlowerProps {
    idx: number
    hidden: boolean
    colors: FlowerColors
    randomness?: number
    scale?: number
    rotate?: number
    placement?: Position
  }

  interface Size {
    width: number
    height: number
  }
}
