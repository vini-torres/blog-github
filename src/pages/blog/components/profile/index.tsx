import { ArrowSquareOut, Buildings, GitBranch, Users } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { Item } from '../../../../components/item'
import { Link } from '../../../../components/Link'
import { api } from '../../../../lib/axios'

interface ProfileProps {
  avatar_url: string
  html_url: string
  login: string
  name: string
  bio: string
  company: string
  followers: string
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
  const [data, setData] = useState<ProfileProps>({} as ProfileProps)

  useEffect(() => {
    const getDataProfile = async () => {
      const response = await api.get(`users/${username}`)
      setData(response.data)
    }
    getDataProfile()
  }, [])

  return (
    <div className="mt-[-5rem] flex w-full gap-8 rounded bg-base-profile p-5 shadow-md sm:h-[13.25rem] sm:px-10 sm:py-8">
      <img
        src={data.avatar_url}
        alt=""
        className="h-[6.25rem] w-[6.25rem] rounded sm:h-[9.25rem] sm:w-[9.25rem]"
      />
      <div className="md:gap-0 flex w-full flex-col gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 small:flex-row sm:justify-between sm:gap-0">
            <h2 className="text-base-title sm:text-xl">{data.name}</h2>
            <Link label="Github" Icon={ArrowSquareOut} to={data.html_url} />
          </div>
          <p className="hidden text-xs text-base-text small:flex xsm:text-sm">
            {data.bio ? data.bio : 'Nenhuma bio foi adicionada.'}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-3 xsm:flex-nowrap sm:gap-6">
          <Item Icon={GitBranch} title={data.login} />
          <Item
            Icon={Buildings}
            title={data.company ? data.company : 'Não vinculado'}
          />
          <Item Icon={Users} title={`${data.followers} Seguidores`} />
        </ul>
      </div>
    </div>
  )
}
