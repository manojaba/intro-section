import React from 'react'

function Menubar({ setFeatures, features, setCompany, company, setMenu, menu }) {
    return (
        <div className='absolute left-0 top-0 -mx-[16px] -mt-[16px] bg-black/65  w-screen h-screen text-[16px]'>
            <div className=' bg-white h-screen w-2/3 ml-auto pr-[21px] pt-[21px] pl-[24px] '>
                <img className='ml-auto hover:cursor-pointer' onClick={() => setMenu(!menu)} src='./images/icon-close-menu.svg' width='24px' height='24px' alt='close icon' ></img>

                <ul className='mt-[32px]  leading-[26px] space-y-[16px]'>
                    <li ><button className='flex items-center gap-[9px] hover:cursor-pointer  hover:text-black  ' onClick={() => setFeatures(!features)}>Features {features ? <img src='./images/icon-arrow-down.svg' alt='arrow-down image' ></img> : <img src='./images/icon-arrow-up.svg' alt='arrow up icon' className=''></img>}</button>
                        {features && (
                            <ul className='space-y-[16px] ml-[23px] my-[24px] '>
                                <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-todo.svg' alt='todo list icon'></img>Todo List</li>
                                <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-calendar.svg' alt='calender icon'></img> Calender</li>
                                <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-reminders.svg' alt='reminder icon'></img> Reminders</li>
                                <li className='flex items-center gap-[15px] hover:cursor-pointer  hover:text-black'><img src='./images/icon-planning.svg' alt='planning icon'></img> Planning</li>
                            </ul>
                        )}
                    </li>
                    <li ><button className='flex items-center gap-[9px] hover:cursor-pointer  hover:text-black  ' onClick={() => setCompany(!company)} >Company {company ? <img src='./images/icon-arrow-down.svg' alt='arrow-down image' ></img> : <img src='./images/icon-arrow-up.svg' alt='arrow up icon' className=''></img>}</button>
                        {
                            company && (
                                <ul className='space-y-[16px] ml-[23px] my-[24px]' >
                                    <li className='hover:cursor-pointer hover:text-black'>History</li>
                                    <li className='hover:cursor-pointer hover:text-black'>Our Team</li>
                                    <li className='hover:cursor-pointer hover:text-black'>Blog</li>
                                </ul>
                            )
                        }
                    </li>
                    <li className='hover:cursor-pointer   hover:text-black'>Careers</li>
                    <li className='hover:cursor-pointer   hover:text-black'>About</li>

                </ul>
                <div className='space-y-[16px] mt-[32px]'>
                    <div className='text-center hover:cursor-pointer   hover:text-black'>Login</div>
                    <div className='border-[1.5px] border-[#686868] hover:border-black text-center rounded-[14px] py-[13px] hover:cursor-pointer   hover:text-black'>Register</div>
                </div>


            </div>
        </div>

    )
}

export default Menubar