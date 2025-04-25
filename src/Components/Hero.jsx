import React from 'react';
import Navbar from './Navbar';

function Hero() {
    return (
        <div>

            <Navbar />
            <div className='mt-[24px] md:flex flex-row-reverse md:mr-[80px] md:mt-[67px] xl:mr-[130px] md:ml-[100px] xl:ml-[165px] md:mb-[130px] md:gap-x-[80px] xl:gap-x-[125px] items-center'>
                <picture >
                    <source srcSet='/images/image-hero-desktop.png' media='(min-width:768px)'></source>
                    <img src='/images/image-hero-mobile.png'
                        alt='hero image'
                    >
                    </img>
                </picture>
                <div className='mx-[6px] md:mx-0   '>
                    <div className='text-center md:text-left'>
                        <h1 className='font-bold text-[36px] leading-[42px] tracking-[0.5px] text-black mt-[48px] md:text-[80px] md:leading-[80px] md:tracking-[-1.11px] xl:w-[540px] '>Make <span className='xl:block'>remote work</span></h1>
                        <p className='font-medium text-[#686868] text-[16px] leading-[26px] mt-[16px] md:mt-[48px] xl:w-[445px]'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                        <button className='bg-black text-[#FAFAFA] w-[136px] h-[48px] rounded-[15px] font-bold text-[16px] hover:bg-white hover:text-black hover:border-[1.5px] hover:border-black hover:cursor-pointer leading-[26px] tracking-[-0.22px] mt-[24px] md:mt-[54px]'>Learn more</button>
                    </div>
                    <div className='flex flex-wrap items-center justify-between  mt-[48px]  md:mt-[108px] mx-[10px] md:mx-0 '>
                        <img className='max-w-[80px] md:max-w-[113px] h-auto ' src='/images/client-databiz.svg' alt='databiz icon'></img>
                        <img className='max-w-[53px] md:max-w-[73px] h-auto ' src='/images/client-audiophile.svg' alt='audiophile icon'></img>
                        <img className='max-w-[64px] md:max-w-[90px] h-auto ' src='/images/client-meet.svg' alt='meet icon'></img>
                        <img className='max-w-[60px] md:max-w-[82px] h-auto ' src='/images/client-maker.svg' alt='maker icon'></img>
                    </div>

                </div>


            </div>


        </div>
    )
};

export default Hero