import React from 'react';
import image from '../../Media/pexels-pixabay-531880.jpg'

const Subscribe = () => {
    return (
        <div className='md:w-6/12 mx-auto bg-orange-300 p-10 rounded-md'>
            <h2 className='text-3xl text-center my-5 font-bold'>Save your time, and Grow <br /> your business</h2>
            <p className='text-center mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            
<form className=''>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        
        <input type="search" id="default-search" class="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
    </div>
</form>

        </div>
    );
};

export default Subscribe;