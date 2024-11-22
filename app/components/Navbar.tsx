import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          <Link href="/"></Link>
        </h1>
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className="hidden md:flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link href="#home" className="text-white hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-orange-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
