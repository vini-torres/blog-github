import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface ItemProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  title: string
}
export function Item({ Icon, title }: ItemProps) {
  return (
    <li className="flex items-center gap-1">
      <Icon className="text-base-label" size={18} />
      <span className="hidden text-xs text-base-subtitle small:flex sm:text-sm">
        {title}
      </span>
    </li>
  )
}
