import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import king from '../../Media/king.png'

const Header = () => {
  return (
    <Navbar
  fluid={true}
  rounded={false}
  className='lg:hidden'
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex lg:order-2">
    <Button className="hidden lg:block">
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
  <Navbar.Link href="/navbars" className="bg-stone-400 hover:bg-stone-400 font-bold cursor-default md:hidden" >
      Quick Access
    </Navbar.Link>
    <Navbar.Link>
      Login & Register
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Language
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Accessibility
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Application Status
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Find US
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Information
    </Navbar.Link>
    <div>
    <Navbar.Link href="/navbars" className="bg-stone-400 hover:bg-stone-400 font-bold cursor-default md:hidden" >
      Main Menu
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Media Center
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Open Date
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Contract Us
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Help
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="bg-stone-400 hover:bg-stone-400 font-bold cursor-default md:hidden" >
      Other Links
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Miscellaneous Link
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Terms & Conditions
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      FAQs
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Privacy
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Coustomer Service
    </Navbar.Link>
    <Navbar.Link href="/navbars" className="md:hidden">
      Sitemap
    </Navbar.Link>
    </div>
  </Navbar.Collapse>
</Navbar>
  );
};

export default Header;
