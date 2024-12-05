import Logo from '/logo.png'
import Appstore from '/footer/appstore.png'
import Google from '/footer/Google.png'
import Play from '/footer/playstore.png'
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
    <div className="col-span-1 flex flex-col items-center">
      <div className="space-y-4 flex flex-col items-center md:items-start">

        <h1 className="font-semibold md:mb-4 ">Access Jamezspace anytime anywhere</h1>

        <a href="/">
          <img className="w-full md:w-2/3" src={Appstore} alt="App Store icon" />
        </a>
        <div className="border p-2 border-gray-100 md:w-2/3 rounded">
        <a className="flex items-center " href="/">
          <img src={Play} alt="Play Store icon" />
          <img className="" src={Google} alt="Google Play icon" />
        </a>
        </div>
      </div>
    </div>
    <div className="flex justify-center md:justify-start gap-6">
      <a href="">
        <img src="/icons/Twitter.svg" alt="" />
      </a>
      <a href="">
        <img src="/icons/Facebook.svg" alt="" />
      </a>
      <a href="">
        <img src="/icons/Tiktok.svg" alt="" />
      </a>
      <a href="">
        <img src="/icons/Instagram.svg" alt="" />
      </a>
    </div>
  </section>
</section>
  )
}

export default Footer