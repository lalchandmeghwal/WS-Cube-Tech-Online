
import Hero from '../components/Hero';
import Category from '../components/Category';

import { useEffect } from 'react';

const Home = () => {

    return (
        <div>
            <div className='grid sm:grid-cols-[230px_auto] my-5  ' >
                <aside className=' sm:block hidden ' >
                    <Category />

                </aside>

                <section>



                    <Hero />

                </section>

            </div>

        </div>
    )
}

export default Home
