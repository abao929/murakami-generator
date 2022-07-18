import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as DropdownArrow } from './assets/icons/dropdown-arrow.svg'

interface DropdownProps {
  defaultItem: string
  currentItem: string
  items: Object[]
  labelField: keyof Object
  selectItem: (arg0: any) => void
}

const Container = styled.div`
  border: 1px solid red;
`

const Header = styled.div`
  border: 1px solid purple;
  .rotate {
    transform: rotate(180deg);
  }
`

const ItemList = styled.div`
  border: 1px solid green;
`

export default function Dropdown({
  defaultItem,
  currentItem,
  items,
  selectItem,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  return (
    <Container onClick={() => setOpen(!open)}>
      <Header>
        {defaultItem}
        <DropdownArrow className={open ? 'rotate' : ''} />
      </Header>
      {open && <ItemList>Hey there</ItemList>}
    </Container>
  )
}
