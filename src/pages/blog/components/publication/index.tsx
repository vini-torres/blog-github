import { NavLink } from 'react-router-dom'

export interface PostProps {
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
  post: PostProps
}

export function PostCard() {
  return (
    <NavLink to="" className="w-fit space-y-5 rounded bg-base-post p-8">
      <div className="flex justify-between gap-1">
        <h3 className="font-bold text-base-title">Blog Github</h3>
        <span className="whitespace-nowrap text-sm text-base-label">
          Há 1 dia
        </span>
      </div>
      <p className="line-clamp-4 text-sm text-base-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit
        ipsam minus et, quia repellat! Itaque accusantium odio cum, ad vel natus
        atque possimus laborum quaerat dolore error voluptas. Eum!
      </p>
    </NavLink>
  )
}
