import gunGirl from '../assets/images/webp/explore-girl.webp';
import logo from '../assets/images/svg/page-logo.svg';
import robotHead from '../assets/images/svg/robot-head.svg';
import { EXPLORE_DATA_LIST } from '../utils/helper';


const Explore = () => {
    return (
        <div className='relative overflow-hidden min-h-screen bg-dark-black'>
            <img className='lg:absolute max-lg:relative z-10 md:w-[500px] md:h-[700px] lg:w-[700px] lg:h-[900px] xl:w-[880px] xl:h-[1070px] left-3 lg:left-10 lg:-bottom-[30%]' src={gunGirl} alt="Girl" />
            <div className="container">
                <div className='flex relative flex-col justify-end lg:items-end z-50 -mt-20 lg:mt-20'>
                    <img className='absolute lg:size-[256px] size-[180px] right-0 -top-[25%]' src={robotHead} alt="robot" />
                    <div className='p-5 md:p-8 lg:p-[50px] rounded-[10px] bg-white bg-opacity-[4%]'>
                        <img className='w-[234px] h-[73px]' src={logo} alt="" />
                        <h2 className='font-bold text-start font-Orbitron text-3xl md:text-custom-4xl text-white mb-4 mt-6 !leading-120'>Explore NANOSPACE</h2>
                        <p className='font-normal text-start font-Saira text-lg md:text-xl text-white !leading-150'>Find best in class heart-pounding idle RPG experience</p>
                        <p className='mt-2.5 font-Saira text-start font-semibold text-lg md:text-xl text-off-white !leading-150 mb-4'>Adorable, Collectible Anime-Inspired Characters</p>

                        {EXPLORE_DATA_LIST.map((item, index) => (
                            <div className='flex gap-2.5 items-start mb-4' key={index}>
                                <span className='w-1.5 h-1.5 md:w-[11px] md:h-[11px] mt-2 md:mt-1 border-opacity-20 bg-white border-4 border-solid border-white rounded-full'></span>
                                <p className='text-base font-Saira max-w-[480px] font-normal text-off-white !leading-150'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore;
