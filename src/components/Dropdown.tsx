import { useState } from "react"
import styled from "styled-components"
import { ReactComponent as DropdownArrow } from "./assets/icons/dropdown-arrow.svg"

interface DropdownProps {
  defaultItem: string
  currentItem: string
  selectItem: (arg0: any) => void
  children: JSX.Element | JSX.Element[]
}

const Container = styled.div`
  border: 1px solid red;
`

const Header = styled.div`
  border: 1px solid purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  svg {
    transition: transform 0.4s ease;
    &.rotate {
      transform: rotate(180deg);
    }
  }
`

const ItemList = styled.div`
  border: 1px solid green;
`

export default function Dropdown({
  defaultItem,
  currentItem,
  selectItem,
  children,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Header onClick={() => setOpen(!open)}>
        {defaultItem}
        <DropdownArrow className={open ? "rotate" : ""} />
      </Header>
      {open && children}
    </Container>
  )
}
