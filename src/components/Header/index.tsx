import backgroundHeader from '../../assets/bg-header.svg'

export function Header() {
  return (
    <header>
      <img
        src={backgroundHeader}
        alt="background do Header com a logo do Github Blog"
        className="max-h-72 w-full"
      />
    </header>
  )
}
