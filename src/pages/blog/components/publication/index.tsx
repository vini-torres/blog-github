import moment from 'moment'
import { NavLink } from 'react-router-dom'

export interface IProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface PostType {
  post: IProps
}

export function Publication({ post }: PostType) {
  const dateFromNow = moment(post.created_at).fromNow()

  return (
    <NavLink
      to={`post/${post.number}`}
      className="w-fit space-y-5 rounded bg-base-post p-8"
    >
      <div className="flex justify-between gap-1">
        <h3 className="font-bold text-base-title">{post.title}</h3>
        <span className="whitespace-nowrap text-sm capitalize text-base-label">
          {dateFromNow}
        </span>
      </div>
      <p className="line-clamp-4 text-sm text-base-text">{post.body}</p>
    </NavLink>
  )
}
