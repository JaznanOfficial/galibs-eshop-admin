import React from 'react';

const CustomerDetailsAbout = () => {
    return (
        <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 w-11/12 mx-auto">
            <div class="w-full flex flex-col 2xl:w-1/3">
                <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
                    <ul class="mt-2 text-gray-700 text-start">
                        <li class="flex border-y py-2">
                            <span class="font-bold w-24">Full name:</span>
                            <span class="text-gray-700">Amanda S. Ross</span>
                        </li>
                        
                        
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Mobile:</span>
                            <span class="text-gray-700">(123) 123-1234</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Email:</span>
                            <span class="text-gray-700">amandaross@example.com</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Address:</span>
                            <span class="text-gray-700">New York, US</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Joined:</span>
                            <span class="text-gray-700">10 Jan 2022 (25 days ago)</span>
                        </li>
                        
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
};

export default CustomerDetailsAbout;