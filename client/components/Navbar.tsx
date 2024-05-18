import Link from 'next/link';
import { NAVBAR_LINKS } from '../constants/data';
import Button from './Button';
import Image from 'next/image';
//import user from '../public/user.png';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 mx-auto max-w-[1440px] lg:px-20 3xl:px-0">
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-xl font-bold">
        <Link href="/">TravelSphere</Link>
      </div>
      <ul className="hidden md:gap-5 lg:gap-14 md:flex text-md text-gray-500">
        {NAVBAR_LINKS.map((link) => (
          <li key={link.key} className="transition-all hover:font-bold">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden md-flex">
        <Button
          type="button"
          title="Login"
          icon="/user.png"
          variant="btn_blue"
        />
      </div>

      <Image
        src="/menu.png"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer md:hidden"
      />
    </nav>
  );
};
export default Navbar;
