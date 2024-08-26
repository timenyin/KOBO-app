import StoreLink from '../assets/common/StoreLink';
import AppleLogo from '../assets/logos/app_store.svg';
import GooglePlay from '../assets/logos/google_play.svg';
function Hero() {
    return ( 
        <section>
        <div>
            <h1>Start spending the smart way</h1>
            <p>take Control of your Finances Anytime, Anywhere with Kobodrop. Discover the smart way to Use your Money!</p>
            <div className='mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal'>
            {/* <a href="https://www.apple.com/app-store" className='flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white  hover:bg-zinc-950 active:bg-zinc-800'>
                <img src={AppleLogo} alt="Apple logo"  className='w-5'/>
               <div>
               <div className=''>
               <p className='text-xs'>Download on the </p>
               <p>App Store </p>
               </div>
               </div>
            </a> */}
             <StoreLink  href="https://www.apple.com/app-store" 
            upperText="Download on the " 
            lowerText='App store' 
            logo={AppleLogo} target='_blank'
            className='flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white  hover:bg-zinc-950 active:bg-zinc-800'
            />

            <StoreLink  href="https://play.google.com" 
            upperText="Get it on  " 
            lowerText='Google Play' 
            logo={GooglePlay} target='_blank'
            className='flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white  hover:bg-zinc-950 active:bg-zinc-800'
            />
            </div>
        </div>
        </section>
    )
    
}

export default Hero