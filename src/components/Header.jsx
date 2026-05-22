export default function Header() {
  return (
    <header className="font-header font-medium text-sm flex items-center justify-between py-4">
      <div className="flex items-center">
        <p>BADOL Léo</p>
      </div>
      <div className="flex items-center gap-4">
        <a href="" className="hover:underline">About</a>
        <a href="" className="hover:underline">Projects</a>
        <a href="" className="hover:underline">Contacts</a>
      </div>
    </header>
  )
}