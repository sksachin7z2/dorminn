import React from 'react'
import DragDropFile from '../components/Dragndrop';
function Addphotodorm() {
  
    return (
        <div>
            <div>
                <div className='h-[85vh]' >
                    <div className='h-[85vh] bg-[#FFFFFF30] ' >
                        <div className='h-[75vh] flex justify-center mt-[15vh] overflow-y-scroll'>
                            <div className='w-[70vw]'>
                                <div className='text-[2rem] text-[#3F3D56] font-semibold text-center'>Add some photos of your dormitory</div>
                                <div className='text-center text-[1.2rem] text-[#3F3D56] mb-6'>You'll need to add some photos to get started. You can add more or make changes later</div>
                                <DragDropFile/>
                            </div>
                        </div>
                        <div className='h-[10vh]'>
                            <div className='h-[10vh] flex justify-between items-center'>
                                <div>
                                    <div className='flex'>
                                        <svg width="48" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.05 35.9999L16 23.9499L28.05 11.8999L30.2 14.0499L20.3 23.9499L30.2 33.8499L28.05 35.9999Z" fill="#3F3D56" />
                                        </svg>

                                        <button type="button" className="text-[#3F3D56] bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Back</button>
                                    </div>

                                </div>
                                <div>
                                    <div className='flex'>
                                        <button type="button" className="text-white bg-[#3F3D56]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Next</button>
                                        <svg width="48" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.75 35.9999L16.6 33.8499L26.5 23.9499L16.6 14.0499L18.75 11.8999L30.8 23.9499L18.75 35.9999Z" fill="#3F3D56" />
                                        </svg>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addphotodorm