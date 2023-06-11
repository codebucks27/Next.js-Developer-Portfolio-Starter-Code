import Link from "next/link";
import { REACT }  from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header
      className='w-full px-32 py-8 font-medium flex items-center justify-between'
      >
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/projects'>projects</Link>
          <Link href='/articles'>articles</Link>
        </nav>
        
        <nav>
          <Link href='/' target={"_black"}>T</Link>
          <Link href='/' target={"_black"}>T</Link>
          <Link href='/' target={"_black"}>T</Link>
          <Link href='/' target={"_black"}>T</Link>
          <Link href='/' target={"_black"}>T</Link>
          <Link href='/' target={"_black"}>T</Link>
        </nav>

        <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
        </div>
      </header>
  ); 
}

export default NavBar;