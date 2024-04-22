import icon from "../assets/logo.png"
export default function Header() {
  return (
    <header className="bg-gray-600 py-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg w-14"><img src={icon} alt="" /></div>
        <nav className="space-x-4 p-5">
          <a href="#ha" className="text-white hover:text-gray-300">Home</a>
          <a href="#pe" className="text-white hover:text-gray-300">Personagens</a>
          <a href="#st" className="text-white hover:text-gray-300">Estúdio</a>
        </nav>
      </div>
    </header>
  );
}
