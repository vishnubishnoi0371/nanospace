import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cta from './Cta';
import Icons from '../common/Icons';
import logo from '../../assets/images/svg/page-logo.svg';
import { NAV_LINK_LIST } from '../../utils/helper';


const NavLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=' shadow-nav-shadow backdrop-blur-[50px] max-sm:py-3 max-lg:py-5'>
            <nav className="container flex items-center justify-between ">
                <Link onClick={() => setIsOpen(false)} to="/">
                    <img
                        className='w-[117px] h-9 sm:w-[135px] sm:h-[46px] md:w-[150px] md:h-[50px] lg:w-[180px] lg:h-[54px] relative z-50'
                        src={logo}
                        alt="logo"
                        width={154}
                        height={48}
                    />
                </Link>
                <div className={`${isOpen ? "left-0" : "-left-full"} flex common-transition items-center max-lg:flex-col max-lg:fixed max-lg:justify-center max-lg:items-center max-lg:min-h-screen max-lg:w-full max-lg:z-30 max-lg:top-0 max-lg:bg-black px-6 sm:px-0 sm:pr-9 xl:pr-0 `}>
                    {NAV_LINK_LIST.map((item, index) => (
                        <NavLink
                            aria-label={item.link}
                            onClick={() => setIsOpen(false)}
                            to={item.url}
                            key={index}
                            className={({ isActive }) =>
                                `${isActive ? "after:opacity-50 text-white lg:bg-opacity-50 opacity-100 lg:bg-dark-gray after:w-full px-4 py-[26px]" : "text-white  px-4 py-[26px] after:opacity-0"} 
      common-transition font-normal text-sm sm:text-base font-Saira relative 
      after:absolute  
      after:common-transition
      after:left-0 after:flex max-lg:flex max-lg:w-full 
      max-lg:justify-center `
                            }
                        >
                            {item.link}
                        </NavLink>

                    ))}
                </div>
                <div  className='flex gap-4 items-center'>
                    <Cta aria-label="Find more button " className=''>Find More</Cta>

                    <div onClick={() => setIsOpen(!isOpen)} className='relative z-50 cursor-pointer lg:hidden'>
                        <Icons icon={isOpen ? "nav-cross" : "nav-menu"} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavLayout;
