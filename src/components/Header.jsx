import NavLayout from './common/NavLayout';
import { HEADER_DATA_LIST } from '../utils/helper';
import headerBottom from '../assets/images/webp/header-bottom-layer.webp'
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <div className='relative max-w-[1920px] mx-auto'>
            <div className='bg-hero-bg min-h-screen flex flex-col lg:min-h-[810px] bg-center bg-no-repeat bg-cover'>
                <NavLayout />
                <div className=" grow flex relative z-10 flex-col">
                    <div className="flex-grow flex items-center justify-center">
                        <div className="container flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center lg:-mt-16 flex-col">
                                <h1 className="font-bold text-white max-w-[810px] text-center font-Orbitron text-3xl sm:text-4xl md:text-5xl lg:text-custom-6xl !leading-120 mb-4">
                                    Save NANOSPACE World from Enemies
                                </h1>
                                <p className="text-center text-white text-lg md:text-xl font-normal mb-6 md:mb-11 font-Saira !leading-150">
                                    Unleash ever-existing excitement with adorable girls armed with destructive gunfire.
                                </p>
                                {HEADER_DATA_LIST.map((item, index) => (
                                    <div key={index} className="flex items-center justify-center gap-4">
                                        {item.links.map((link, linkIndex) => (
                                            <Link key={linkIndex} target="_blank" rel="noopener noreferrer" to={link.url}>
                                                <img
                                                    className="h-9 hover:scale-110 common-transition w-[120px]"
                                                    src={link.img}
                                                    alt={link.alt}
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <img className='absolute bottom-0 w-full max-sm:bottom-[48px] max-sm:h-36 z-0' src={headerBottom} alt="layer bottom" />
                </div>
            </div>
        </div>
    );
};




export default Header;
