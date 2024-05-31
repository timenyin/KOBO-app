import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import  Kobodrop  from "../assets/logos/kobodrop_logo.svg";

import ButtonLink from "../assets/common/ButtonLink";

function Nav() {
    const textLinkClasses =
    "text-gray-500 hover:text-gray-900 active:text-gray-400";

    const navLinks = [
        { href: "#features", children: "Features" },
        { href: "#partners", children: "Partners" },
        { href: "#reviews", children: "Reviews" },
      ];
    return (
    <Disclosure as="nav">
        {({open}) => (
                <>
                    <div className="flex h-[15vh]  items-center max-w-7x justify-between px-8 xl:m-auto lg:px-12">
                       <div className="flex">
                       <ButtonLink href="#" children={<img src={Kobodrop} alt="logo" />}/>
                        <div className="flex hidden sm:flex  space-x-4 items-center ml-4 sm:ml-6  lg:ml-8 lg:space-x-8">
                           {navLinks.map((link, index) => (
                            <ButtonLink 
                            key={index} 
                            href={link.href} 
                            children={link.children} 
                            className={textLinkClasses} 
                            />
                           ))}
                        </div>
                       </div>

                        {/* -- button links  */}
                       <ButtonLink 
                            href="https://play.google.com"
                            target="_blank"
                            children={"Install Kobodrop"} 
                            className="hidden sm:flex  bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600" 
                            />

                       <Disclosure.Button className="no-underline rounded-md p-2  text-gray-500 hover:bg-gray-700  hover:text-white sm:hidden" >
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" />
                        ) : <Bars3Icon className="block h-6 w-6"/> }
                        
                        
                       </Disclosure.Button>
                    </div> 
                    {/* hamburger show here  */}
                    <Disclosure.Panel className="space-y-1 px-4 sm:flex">
                    {navLinks.map((link, index) => (
                            <Disclosure.Button 
                            className="block" 
                            as="a" 
                            href="#features"
                            key={index}
                            >
                                {link.children}
                                
                            </Disclosure.Button >
                           ))}
                    </Disclosure.Panel>
                </>
        )}
    </Disclosure>)
}

export default Nav;