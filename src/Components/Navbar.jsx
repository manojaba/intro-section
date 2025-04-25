import React, { useState } from 'react';
import Menubar from './Menubar';

function Navbar() {

    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);
    const [menu, setMenu] = useState(false);
    return (
        <div className='md:flex items-center mx-[16px] md:mx-[40px] md:mt-[24px] mt-[16px] justify-between font-medium text-[14px] leading-[16px] relative text-[#686868]' >
            <div className='flex justify-between   items-center md:gap-[60px]' >
                <img src='./images/logo.svg' alt='icon-image'></img>
                <button onClick={() => setMenu(!menu)} className='md:hidden hover:cursor-pointer'>  <img src='./images/icon-menu.svg' alt='menu icon image'></img></button>
                <ul className=' hidden md:flex gap-[40px] '>
                    <li ><button className='flex items-center gap-[9px] hover:cursor-pointer  hover:text-black  ' onClick={() => setFeatures(!features)}>Features {features ? <img src='./images/icon-arrow-down.svg' alt='arrow-down image' ></img> : <img src='./images/icon-arrow-up.svg' alt='arrow up icon' className=''></img>}</button> </li>
                    <li ><button className='flex items-center gap-[9px] hover:cursor-pointer  hover:text-black  ' onClick={() => setCompany(!company)} >Company {company ? <img src='./images/icon-arrow-down.svg' alt='arrow-down image' ></img> : <img src='./images/icon-arrow-up.svg' alt='arrow up icon' className=''></img>}</button> </li>
                    <li className='hover:cursor-pointer   hover:text-black'>Careers</li>
                    <li className='hover:cursor-pointer   hover:text-black'>About</li>

                </ul>
            </div>
            <div className='hidden md:flex items-center gap-[40px]'>
                <div className='hover:cursor-pointer  hover:text-black'>Login</div>
                <div className=' hover:cursor-pointer border-[1.5px] border-black px-[23px] py-[13px] rounded-[14px] h-[42px] flex items-center  hover:text-black'>Register</div>

            </div>
            {
                features && (
                    <div className=' md:absolute top-[60px] left-[113px] bg-white rounded-[10px] p-[24px] shadow-2xl '>
                        <ul className='space-y-[16px]'>
                            <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-todo.svg' alt='todo list icon'></img>Todo List</li>
                            <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-calendar.svg' alt='calender icon'></img> Calender</li>
                            <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-reminders.svg' alt='reminder icon'></img> Reminders</li>
                            <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-planning.svg' alt='planning icon'></img> Planning</li>
                        </ul>
                    </div>
                )
            }

            {
                company && (
                    <div className=' md:absolute top-[60px] left-[306px]  bg-white rounded-[10px] p-[24px] shadow-2xl'>
                        <ul className='space-y-[16px]'>
                            <li className='hover:cursor-pointer hover:text-black'>History</li>
                            <li className='hover:cursor-pointer hover:text-black'>Our Team</li>
                            <li className='hover:cursor-pointer hover:text-black'>Blog</li>
                        </ul>
                    </div>
                )
            }



            {
                menu && (
                    <Menubar setFeatures={setFeatures} features={features} setCompany={setCompany} company={company} menu={menu} setMenu={setMenu} />
                )
            }




        </div>

    )
}

export default Navbar