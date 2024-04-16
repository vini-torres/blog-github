import { Route, Routes } from 'react-router-dom'

import { Blog } from '../pages/blog'
import { Post } from '../pages/post'
import { DefaultLayout } from './layout'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
      </Route>
    </Routes>
  )
}
