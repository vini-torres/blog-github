import logoTipo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="flex h-[18.5rem] w-full items-center justify-center bg-[url('/public/cover-header.svg')] bg-cover bg-no-repeat">
      <img src={logoTipo} alt="Logo do Github Blog" />
    </header>
  )
}
