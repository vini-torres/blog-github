import { Profile } from './components/profile'
import { PostCard } from './components/publication'

export function Blog() {
  return (
    <section className="mx-auto mb-10 max-w-5xl px-5">
      <Profile />

      <div className="mt-[4.5rem]">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-base-subtitle">Publicações</h4>
          <span className="text-sm text-base-span">6 publicações</span>
        </div>
        <form action="" className="mb-10 mt-3 ">
          <input
            type="text"
            placeholder="Buscar conteúdo"
            className="w-full rounded-[0.375rem] border border-base-border bg-base-input px-4 py-3 text-base-subtitle outline-none placeholder:text-sm placeholder:text-base-label"
          />
        </form>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  )
}
