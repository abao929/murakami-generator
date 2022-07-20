import React from 'react'

type Props = {
  a: any
}

export default function Fodder({ a }: Props) {
  return <button onClick={() => a(0)}>Test</button>
}
