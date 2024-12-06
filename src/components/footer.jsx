import Logo from '/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="font-family:'SF_Pro_Display-Bold',Helvetica] bg-black text-sm text-gray-200 text-center">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-20">
        <div className="block col-span-1 ">
          <div className="flex items-center justify-center md:justify-start">
            <img src={Logo} alt="JamezSpace logo" />
            <h1 className="font-bold">JamezSpace</h1>
          </div>
          <p className='text-center md:text-start'>
            JamezSpace is your trusted marketplace for buying and selling goods locally. We connect communities, offering a seamless platform for exchanging quality products and services.

          </p>
          <p className='text-center md:text-start mt-6'>Info@jamezspace.com</p>
        </div>

        <div className="col-span-1 ">
          <div className="flex  justify-center md:text-start">
            <ul className="list-none pl-4 md:pl-0 space-y-4">
              <h2 className='font-bold'>Services</h2>
              <li><Link to="/">Home</Link></li>
              <li><a href="/">Sell an item</a></li>
              <li><a href="/">About us</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Terms of service</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div class="md:w-3/4 h-32 flex flex-col justify-center md:justify-start md:items-center gap-4">
          <div class="text-center text-white text-base font-medium leading-none">
            Access JamezPay Anywhere Anytime
          </div>
          <div class="h-24 flex flex-col justify-center md:justify-start items-center gap-2.5">
            <div class="w-36 h-10 bg-black rounded border border-gray-400">
              <img className="w-full " src="/footer/app.png" alt="App Store icon" />
            </div>
            <div class="w-36 h-10 rounded border border-gray-400 relative">
            <img src="/footer/play.png" alt="" />
              <div class="w-6 h-7 absolute left-2.5 top-2">
               
            </div>
          </div>
        </div>
        </div>

        <div class="md:w-44 flex justify-center md:justify-start items-start">
    <div class="w-6 h-6">
      <img src="/icons/Twitter.svg" alt="twitter" />
    </div>
    <div class="w-6 h-6">
    <img src="/icons/Facebook.svg" alt="facebook" />
    </div>
    <div class="w-6 h-6">
    <img src="/icons/Tiktok.svg" alt="tiktok" />
    </div>
    <div class="w-6 h-6">
    <img src="/icons/Instagram.svg" alt="instagram" />
    </div>
  </div>
      </section>
    </section>
  )
}

export default Footer