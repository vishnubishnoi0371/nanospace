import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cta from './Cta';
import Icons from '../common/Icons';
import logo from '../../assets/images/svg/page-logo.svg';
import { NAV_LINK_LIST } from '../../utils/helper';

const NavLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('max-lg:overflow-hidden')
        }
       else {
            document.body.classList.remove('max-lg:overflow-hidden')
        }
    }, [isOpen])
    return (
        <div className='shadow-nav-shadow relative z-50 backdrop-blur-lg max-sm:py-3 max-lg:py-5'>
            <nav className="container flex items-center justify-between ">
                <Link onClick={() => setIsOpen(false)} to="/">
                    <img
                        className='w-[135px] h-[46px] md:w-[150px] md:h-[50px] relative z-50'
                        src={logo}
                        alt="logo"
                        width={154}
                        height={48}
                    />
                </Link>
                <div className={`${isOpen ? "left-0" : "-left-full"} flex common-transition items-center max-lg:flex-col max-lg:fixed max-lg:justify-center max-lg:items-center max-lg:min-h-screen max-lg:w-full z-40 max-lg:top-0 max-lg:bg-black px-6 sm:px-0 sm:pr-9 xl:pr-0 `}>
                    {NAV_LINK_LIST.map((item, index) => (
                        <NavLink
                            aria-label={item.link}
                            onClick={() => setIsOpen(false)}
                            to={item.url}
                            key={index}
                            className="text-white hover:!bg-opacity-50 lg:hover:bg-dark-gray px-4 py-5 md:py-7 common-transition font-normal text-sm sm:text-base font-Saira relative max-lg:flex max-lg:w-full max-lg:justify-center">
                            {item.link}
                        </NavLink>
                    ))}
                    <Cta aria-label="Find more button" className='md:!hidden flex'>Find More <span className='mt-1'><Icons icon='arrow-icon' /></span></Cta>
                </div>
                <div className='flex gap-4 items-center'>
                    <Cta aria-label="Find more button" className='!hidden md:!flex'>Find More <span className='mt-1'><Icons icon='arrow-icon' /></span></Cta>
                    <div onClick={() => setIsOpen(!isOpen)} className='relative z-50 cursor-pointer lg:hidden'>
                        <Icons icon={isOpen ? "nav-cross" : "nav-menu"} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavLayout;
