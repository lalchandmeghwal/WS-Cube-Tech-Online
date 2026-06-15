
import Hero from '../components/Hero';
import Category from '../components/Category';

const Home = () => {

   


    return (
        <div>
            <div className='grid sm:grid-cols-[230px_auto] my-5  ' >
                <aside className=' sm:block hidden ' >
                    <Category/>

                </aside>

                <section>

                    {/* <div className='mt-3 flex justify-end  pr-3 ' >
                        <select name="" id="">
                            <option value="" selected>Sort by : Recommended</option>
                            <option value="">Name : A to Z</option>
                            <option value="">Name : Z to A</option>
                            <option value="">Price : High to Low</option>
                            <option value="">Discounted Price : Low to High</option>
                            <option value="">Discounted Price : High to Low</option>
                            <option value="">Rating : Low to High</option>
                            <option value="">Rating : High to Low</option>
                        </select>
                    </div> */}

                    <Hero/>

                </section>

            </div>

        </div>
    )
}

export default Home
