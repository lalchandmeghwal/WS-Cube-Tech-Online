import React, { useState } from 'react'
import { useMyContext } from '../store/MyContext';

const Pagination = () => {

    const { page, setPage } = useMyContext();
  
    const totalPages = 17;

    return (
        <div>

            <h1 className='mb-5'>
                Current Page : {page}
            </h1>

            <div className='flex gap-3'>

                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className='border px-4 py-2 cursor-pointer '
                >
                    Prev
                </button>

                {
                    [...Array(totalPages)].map((_, i) => (

                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`border px-4 py-2  cursor-pointer 
                                
                                ${page === i + 1
                                    ? 'bg-black text-white'
                                    : ''
                                }
                            `}
                        >
                            {i + 1}
                        </button>

                    ))
                }

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className='border px-4 py-2 cursor-pointer '
                >
                    Next
                </button>

            </div>

        </div>
    )
}

export default Pagination