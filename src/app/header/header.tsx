import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Site Name */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <h1>My Portfolio</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/about">
           <ul className="text-gray-600 hover:text-gray-900">About</ul>
          </Link>
          <Link href="/projects">
            <ul className="text-gray-600 hover:text-gray-900">Projects</ul>
          </Link>
          <Link href="/contact">
            <ul className="text-gray-600 hover:text-gray-900">Contact</ul>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-600">
          {/* This icon could be replaced with an actual SVG icon or component */}
          <span className="material-icons">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
