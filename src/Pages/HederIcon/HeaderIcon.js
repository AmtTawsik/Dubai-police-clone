import React from 'react';
import icon1 from '../../Media/icon1.svg'
import icon2 from '../../Media/icon2.svg'

const HeaderIcon = () => {
    return (
        <div className='md:flex hidden justify-between pt-2 bg-white w-11/12'>
            <div>
                <img className='w-[100px] ml-10' src={icon1} alt="" />
            </div>
            <div>
                <img className='w-[100px] ' src={icon2} alt="" />
            </div>
        </div>
    );
};

export default HeaderIcon;