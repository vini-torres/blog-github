import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { NavLink } from 'react-router-dom'

interface LinkProps {
  to: string
  label: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  iconPosition?: 'left' | 'right'
  target?: boolean
}

export function Link({
  to,
  label,
  Icon,
  iconPosition = 'right',
  target = true,
}: LinkProps) {
  return (
    <NavLink
      target={`${target ? '_blank' : '_self'}`}
      className="flex items-center gap-1"
      to={to}
    >
      {iconPosition === 'left' && <Icon className="text-blue" />}
      <span className="text-xs font-bold text-blue">{label}</span>
      {iconPosition === 'right' && <Icon className="text-blue" />}
    </NavLink>
  )
}
