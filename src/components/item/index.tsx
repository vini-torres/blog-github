import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface ItemProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  title: string
}
export function Item({ Icon, title }: ItemProps) {
  return (
    <li className="flex items-center gap-1 text-sm text-base-subtitle">
      <Icon className="text-base-label" size={18} />
      {title}
    </li>
  )
}
