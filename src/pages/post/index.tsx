import moment from 'moment'
import {
  ArrowLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GitBranch,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import { Item } from '../../components/item'
import { Link } from '../../components/Link'
import { api } from '../../lib/axios'
import { IProps } from '../blog/components/publication'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [post, setPost] = useState({} as IProps)
  const { id } = useParams()

  const date = moment(post.created_at).fromNow()

  const getDetailsFromPublication = async () => {
    const response = await api.get(
      `/repos/${username}/${repoName}/issues/${id}`,
    )
    setPost(response.data)
  }

  useEffect(() => {
    getDetailsFromPublication()
  }, [])

  return (
    <section className="mx-auto mb-10 max-w-5xl px-5">
      <div className="mt-[-5rem] flex h-[10.5rem] w-full flex-col gap-4 rounded bg-base-profile p-8">
        <div className=" flex justify-between">
          <Link
            target={false}
            label="Voltar"
            Icon={ArrowLeft}
            to="/"
            iconPosition="left"
          />
          <Link
            label="Ver no Github"
            Icon={ArrowSquareOut}
            to={post.html_url}
          />
        </div>
        <h1 className="flex-1 font-bold text-base-title sm:text-xl">
          {post.title}
        </h1>
        <ul className="flex flex-wrap items-center gap-3 xsm:flex-nowrap sm:gap-6">
          <Item Icon={GitBranch} title={post.user?.login} />
          <Item Icon={Calendar} title={date} />
          <Item Icon={ChatCircle} title={`${post.comments} Comentários`} />
        </ul>
      </div>
      <div className="my-10 sm:px-32">
        {' '}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="[&>blockquote]:rounded [&>blockquote]:bg-base-text [&>blockquote]:p-1 [&>blockquote]:text-sm [&>h1]:mb-10 [&>h1]:font-bold [&>h1]:text-base-title [&>h2]:mb-5  [&>h2]:mt-10 [&>h2]:font-bold [&>h2]:text-blue [&>h3]:text-base-subtitle [&>p]:my-5 [&>p]:text-base-span [&>pre]:my-5 [&>pre]:overflow-auto [&>pre]:rounded [&>pre]:bg-base-post [&>pre]:p-8 [&>pre]:text-base-span"
        >
          {post.body}
        </ReactMarkdown>
      </div>
    </section>
  )
}
