import NavLayout from './common/NavLayout';
import { HEADER_DATA_LIST } from '../utils/helper';

const Header = () => {

    return (
        <div className="bg-hero-bg min-h-screen bg-center bg-no-repeat bg-cover flex flex-col">
            <NavLayout />
            <div className="flex-grow flex items-center justify-center">
                <div className="container flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="font-bold text-white max-w-[810px] text-center font-Orbitron text-3xl sm:text-4xl md:text-5xl lg:text-custom-6xl !leading-120 mb-4">
                            Save NANOSPACE World from Enemies
                        </h1>
                        <p className="text-center text-white text-lg md:text-xl font-normal mb-6 md:mb-11 font-Saira !leading-150">
                            Unleash ever-existing excitement with adorable girls armed with destructive gunfire.
                        </p>
                        {HEADER_DATA_LIST.map((item, index) => (
                            <div key={index} className="flex items-center justify-center gap-4">
                                {item.links.map((link, linkIndex) => (
                                    <a key={linkIndex} target="_blank" rel="noopener noreferrer" href={link.href}>
                                        <img
                                            className=""
                                            src={link.imgSrc}
                                            alt={link.alt}
                                        />
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Header;
