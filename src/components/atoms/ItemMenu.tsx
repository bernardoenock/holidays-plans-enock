import { MouseEventHandler, ReactNode } from "react"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

type ItemMenuProps = {
  iconMUI: ReactNode,
  label: string,
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

export default function ItemMenu({ iconMUI, label, onClick }: ItemMenuProps) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        {iconMUI}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}