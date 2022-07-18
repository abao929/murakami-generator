import { useState } from 'react'
import styled from 'styled-components'
interface SliderPropType {
  min: number
  max: number
  label: string
  value: number
  setValue: (arg0: number) => void
  step?: number
  showInput?: boolean
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input[type='number'] {
    border: none;
    background: none;
    &:focus-visible {
      outline: none;
      background: none;
    }
  }
  input[type='range'] {
    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-ms-thumb {
      background-color: red;
    }
  }
`

export default function Slider({
  min,
  max,
  label,
  value,
  setValue,
  step,
  showInput,
}: SliderPropType) {
  const changeHandler = (event: any) => {
    console.log(event.target.valueAsNumber)
  }
  return (
    <div>
      <label>{label}</label>
      <Box>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step ?? 1}
          onChange={(event) => {
            // console.log(event.target.valueAsNumber)
            setValue(event.target.valueAsNumber)
          }}
        />
        {showInput && (
          <input
            type="number"
            value={value}
            onChange={(event) => {
              // console.log(event)
              let num = event.target.valueAsNumber
              console.log(num)
              if (num >= max) {
                setValue(max)
              } else if (num <= min) {
                setValue(min)
              } else {
                setValue(num)
              }
            }}
          />
        )}
      </Box>
    </div>
  )
}
