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

          <p className="text-center md:text-start text-sm font-normal font-['SF Pro Display'] leading-loose ">
            JamezSpace is your trusted marketplace for buying and selling goods locally. We connect communities, offering a seamless platform for exchanging quality products and services.

          </p>
          <p className='text-center md:text-start mt-6'>Info@jamezspace.com</p>
        </div>

        <div className="col-span-1 ">
          <div className="flex  justify-center md:text-start">
            <ul className="list-none pl-4 md:pl-0 space-y-3 font-light font-['SF Pro Display'] leading-loose">
              <h2 className="text-base font-bold font-['SF Pro Display'] leading-loose" >Services</h2>
              <li><Link to="/">Home</Link></li>
              <li><a href="/">Sell an item</a></li>
              <li><a href="/">About us</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Terms of service</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div class="">
          <div class="text-center md:text-start text-white text-base font-bold leading-none">
            Access JamezPay Anywhere Anytime
          </div>
          <div class="mt-6 flex flex-col items-center md:items-start">
            <div class="w-36 h-10 bg-black rounded border border-gray-400">
              <img className="w-full " src="/footer/app.png" alt="App Store icon" />
            </div>
            <div class="w-36 h-10 rounded border mt-4 border-gray-400 relative">
            <img src="/footer/play.png" alt="" />
          </div>
        </div>
        </div>

  <div class="flex justify-center md:justify-start items-start gap-6">
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