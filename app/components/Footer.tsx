import Image from "next/image";
export function Footer(){
    return(
        <footer className="text-gray-600 bg-[#111]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10">
          <li>
            <a className="text-white font-normal leading-[32.67px] text-[10px] font-helvetica">Find A Store</a>
          </li>
          <li>
            <a className="text-white font-normal leading-[32.67px] text-[10px] font-helvetica">Become A Member</a>
          </li>
          <li>
            <a className="text-white font-normal leading-[32.67px] text-[10px] font-helvetica">Sign Up for Email</a>
          </li>
          <li>
            <a className="text-white font-normal leading-[32.67px] text-[10px] font-helvetica">Send Us Feedback</a>
          </li>
          <li>
            <a className="text-white font-normal leading-[32.67px] text-[10px] font-helvetica">Student Discounts</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10">
          <li>
            <a className="text-white font-normal text-[10px] leading-[32.67px] font-helvetica">Get Help</a>
          </li>
          <li>
            <a className="text-gray-600font-normal text-[10px] leading-[32.67px] font-helvetica">Order Status</a>
          </li>
          <li>
            <a className="text-[#7E7E7E] font-normal text-[10px] leading-[32.67px] font-helvetica">Delivery</a>
          </li>
          <li>
            <a className="text-gray-600 font-normal text-[10px] leading-[32.67px] font-helvetica">Returns</a>
          </li>
          <li>
            <a className="text-gray-600font-normal text-[10px] leading-[32.67px] font-helvetica">Payment Options</a>
          </li>
          <li>
            <a className="text-[#7E7E7E] font-normal text-[10px] leading-[32.67px] font-helvetica">Contact Us On Nike.com Inquiries</a>
          </li>
          <li>
            <a className="text-gray-600 font-normal text-[10px] leading-[32.67px] font-helvetica">Contact Us On All Other Inquiries</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        
        <nav className="list-none mb-10">
          <li>
            <a className="text-white font-normal text-[10px] leading-[32.67px] font-helvetica">About Nike</a>
          </li>
          <li>
            <a className="text-gray-600font-normal text-[10px] leading-[32.67px] font-helvetica">News</a>
          </li>
          <li>
            <a className="text-[#7E7E7E] font-normal text-[10px] leading-[32.67px] font-helvetica">Careers</a>
          </li>
          <li>
            <a className="text-gray-600 font-normal text-[10px] leading-[32.67px] font-helvetica">Investors</a>
          </li>
          <li>
            <a className="text-gray-600font-normal text-[10px] leading-[32.67px] font-helvetica">Sustainability</a>
          </li>
          </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4"></div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4"></div>
      <div className="lg:w-1/6 md:w-1/2 w-full items-end justify-end px-4">
        
        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-end md:justify-end md:w-auto">
        <a className="text-gray-500">
            <Image  src="/images/twitter.png" alt="Twitter" width={30} height={30}/>
        </a>
        <a className="ml-3 text-gray-500">
        <Image  src="/images/facebook.png" alt="Twitter" width={30} height={30}/>
        </a>
        <a className="ml-3 text-gray-500">
        <Image  src="/images/youtube.png" alt="Twitter" width={30} height={30}/>
        </a>
        <a className="ml-3 text-gray-500">
        <Image  src="/images/insta.png" alt="Twitter" width={30} height={30}/>
        </a>
       
      </span>
      </div>
    </div>
  </div>
 
  <div className="bg-[#111]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row md:justify-between">
      <p className="text-[#7E7E7E] text-sm text-center sm:text-left">
        © 2024 Nike, Inc.
        <a
          href="#"
          className="text-[#7E7E7E] ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Right Reserved
        </a>
      </p>
      <div>
      <nav className="list-none mb-10 flex ">
          <li>
            <a className="text-[#7E7E7E] font-normal text-[12px] leading-7 font-helvetica lg:mx-4 mx-1">Guides</a>
          </li>
          <li>
            <a className="text-[#7E7E7E] font-normal text-[12px] leading-7 font-helvetica lg:mx-4 mx-1">News</a>
          </li>
          <li>
            <a className="text-[#7E7E7E] font-normal text-[12px] leading-7 font- lg:mx-4 mx-1">Careers</a>
          </li>
          <li>
            <a className="text-[#7E7E7E] font-normal text-[12px] leading-7 font-helvetica lg:mx-4 mx-1">Investors</a>
          </li>
          <li>
            <a className="text-[#7E7E7E] font-normal text-[12px] leading-7 font-helvetica lg:mx-4 mx-1">Sustainability</a>
          </li>
          </nav>
      </div>
    </div>
  </div>
</footer>

    );
}