import { ArrowSquareOut, Buildings, GitBranch, Users } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { Item } from '../../../../components/item'

export function Profile() {
  return (
    <div className="mt-[-5rem] flex w-full gap-8 rounded bg-base-profile p-5 shadow-md sm:h-[13.25rem] sm:px-10 sm:py-8">
      <img
        src="https://avatars.githubusercontent.com/u/2254731?v=4"
        alt=""
        className="h-[6.25rem] w-[6.25rem] rounded sm:h-[9.25rem] sm:w-[9.25rem]"
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-xl text-base-title">Cameron Williamson</h2>
            <NavLink to="" className="flex items-center gap-1">
              <span className="text-xs font-bold text-blue">Github</span>
              <ArrowSquareOut className="text-blue" />
            </NavLink>
          </div>
          <p className="text-sm text-base-text">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <ul className="flex items-center gap-6">
          <Item Icon={GitBranch} title="diego3g" />
          <Item Icon={Buildings} title="Sem organização" />
          <Item Icon={Users} title="32K Seguidores" />
        </ul>
      </div>
    </div>
  )
}
