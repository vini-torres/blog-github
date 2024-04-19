import { zodResolver } from '@hookform/resolvers/zod'
import { CircleNotch } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '../../lib/axios'
import { Profile } from './components/profile'
import { IProps, Publication } from './components/publication'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

const formSchema = z.object({
  query: z.string(),
})

type FormData = z.infer<typeof formSchema>

export function Blog() {
  const [posts, setPost] = useState<IProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const handleFilter = async (data: FormData) => {
    await getPosts(data.query)
  }

  const allPosts = posts.length

  const getPosts = async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )

      setPost(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <section className="mx-auto mb-10 max-w-5xl px-5">
      <Profile />

      <div className="mt-[4.5rem]">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-base-subtitle">Publicações</h4>
          <span className="text-sm text-base-span">{allPosts} publicações</span>
        </div>
        <form onSubmit={handleSubmit(handleFilter)} className="mb-10 mt-3 ">
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
            className="w-full rounded-[0.375rem] border border-base-border bg-base-input px-4 py-3 text-base-subtitle outline-none placeholder:text-sm placeholder:text-base-label"
          />
        </form>

        <div>
          {isLoading ? (
            <div className="flex items-center justify-center gap-1">
              <p className="text-base-title">Carregando</p>
              <CircleNotch className="animate-spin text-blue" size={22} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {posts.map((post) => (
                <Publication key={post.number} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
