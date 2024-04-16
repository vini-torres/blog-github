import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { NavLink } from 'react-router-dom'

interface LinkProps {
  to: string
  label: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export function Link({ to, label, Icon }: LinkProps) {
  return (
    <NavLink className="flex items-center gap-1" to={to}>
      <span className="text-xs font-bold text-blue">{label}</span>
      <Icon className="text-blue" />
    </NavLink>
  )
}
