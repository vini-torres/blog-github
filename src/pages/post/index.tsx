import {
  ArrowLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GitBranch,
} from 'phosphor-react'

import { Item } from '../../components/item'
import { Link } from '../../components/Link'

export function Post() {
  return (
    <section className="mx-auto mb-10 max-w-5xl px-5">
      <div className="mt-[-5rem] flex h-[10.5rem] w-full flex-col gap-4 rounded bg-base-profile p-8">
        <div className=" flex justify-between">
          <Link label="Voltar" Icon={ArrowLeft} to="/" iconPosition="left" />
          <Link label="Ver no Github" Icon={ArrowSquareOut} to="" />
        </div>
        <h1 className="flex-1 text-xl font-bold text-base-title">
          JavaScript data types and data structures
        </h1>
        <ul className="flex flex-wrap items-center gap-3 xsm:flex-nowrap sm:gap-6">
          <Item Icon={GitBranch} title="diego3g" />
          <Item Icon={Calendar} title="Há 1 dia" />
          <Item Icon={ChatCircle} title="0 Comentários" />
        </ul>
      </div>
      <div className="my-10 px-32">
        <h3 className="text-base-subtitle">Content</h3>
      </div>
    </section>
  )
}
