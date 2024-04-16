import { ArrowSquareOut, Buildings, GitBranch, Users } from 'phosphor-react'

import { Item } from '../../../../components/item'
import { Link } from '../../../../components/Link'

export function Profile() {
  return (
    <div className="mt-[-5rem] flex w-full gap-8 rounded bg-base-profile p-5 shadow-md sm:h-[13.25rem] sm:px-10 sm:py-8">
      <img
        src="https://avatars.githubusercontent.com/u/2254731?v=4"
        alt=""
        className="h-[6.25rem] w-[6.25rem] rounded sm:h-[9.25rem] sm:w-[9.25rem]"
      />
      <div className="md:gap-0 flex w-full flex-col gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 small:flex-row sm:justify-between sm:gap-0">
            <h2 className="text-base-title sm:text-xl">Cameron Williamson</h2>
            <Link label="Github" Icon={ArrowSquareOut} to="" />
          </div>
          <p className="hidden text-xs text-base-text small:flex xsm:text-sm">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-3 xsm:flex-nowrap sm:gap-6">
          <Item Icon={GitBranch} title="diego3g" />
          <Item Icon={Buildings} title="Não vinculado" />
          <Item Icon={Users} title="32K Seguidores" />
        </ul>
      </div>
    </div>
  )
}
