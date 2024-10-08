import gunGirl from '../assets/images/webp/explore-girl.webp';
import logo from '../assets/images/svg/page-logo.svg';
import robotHead from '../assets/images/svg/robot-head.svg';
import { EXPLORE_DATA_LIST } from '../utils/helper';

const Explore = () => {
    return (
        <div className='max-w-[1920px] mx-auto -mt-1'>
            <div className='relative overflow-hidden min-h-[650px] xl:min-h-[800px] pb-20 bg-dark-black'>
                <div className=' absolute z-10 md:w-[500px] md:h-[700px] lg:w-[700px] lg:h-[900px] xl:w-[880px] xl:h-[1070px] left-3 xl:left-10 lg:-bottom-[30%]'>
                    <div className='relative'>
                        <img src={gunGirl} alt="Girl" />
                        <div className="max-w-[208px] lg:w-[408px] hidden md:block h-[200px] lg:max-h-[595px] bg-off-blue -z-10 blur-[80px] opacity-25 w-full lg:h-full absolute top-1/2 left-1/2 -translate-x-[85%] -translate-y-[64%]"></div>
                    </div>
                </div>
                <div className="container custom-container">
                    <div className='flex relative flex-col justify-end lg:items-end z-50 md:mt-20'>
                        <img className='md:absolute lg:size-[256px] size-[180px] hidden md:block md:right-0 z-30 md:top-[29%] xl:right-[-5%] lg:-top-[7%]' src={robotHead} alt="robot" />
                        <div className='p-5 md:p-8 lg:p-[50px_50px_34px_50px] rounded-[10px] backdrop-blur-[30px] xl:backdrop-blur-[4px] max-w-full max-sm:mt-[320px] max-lg:mt-[350px] lg:mt-20 max-md:mt-[350px] bg-white bg-opacity-[4%]'>

                            <div className='w-[234px] relative h-[73px]'>
                                <div className=' absolute'>
                                    <img className='w-[234px] h-[73px]' src={logo} alt="explore logo" />
                                    <span className="w-[156px] h-[56px] bg-off-white blur-[80px] md:block hidden absolute top-50 start-50 translate_middle z-0"></span>
                                </div>
                            </div>
                            <h2 className='font-bold text-start font-Orbitron text-3xl md:text-custom-4xl text-white mb-4 mt-6 !leading-120'>Explore NANOSPACE</h2>
                            <p className='font-normal text-start font-Saira text-lg md:text-xl text-white !leading-150'>Find best in class heart-pounding idle RPG experience</p>
                            <p className='mt-2.5 font-Saira text-start font-semibold text-lg md:text-xl text-off-white !leading-150 mb-4'>Adorable, Collectible Anime-Inspired Characters</p>

                            {EXPLORE_DATA_LIST.map((item, index) => (
                                <div className='flex gap-2.5 items-start mb-4' key={index}>
                                    <span className="block size-4 min-w-4 rounded-full bg-off-white mt-1.5 bg-opacity-20 after:absolute relative after:size-[11px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white after:rounded-full"></span>                                    <p className='text-base font-Saira max-w-[480px] font-normal text-off-white !leading-150'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore;
