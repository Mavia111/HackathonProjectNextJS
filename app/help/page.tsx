import React from "react";
import Image from "next/image"
export default function Gethelp(){
    return(
        <div>
            <div> <h1 className="title-font my-10 text-center font-helvetica text-4xl md:text-[32px] md:leading-9 mb-4 font-medium text-[#111]">
            GET HELP
      </h1></div>
      <div>
      <div className="flex items-center w-full max-w-md mx-auto">
  <div className="relative md:w-full">
    <div className="absolute inset-y-0 right-0 flex items-center justify-between pr-3 rounded-full">
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-[#757575]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
    <input
      type="text"
      placeholder="What can we help you with?"
      className="block p-4 text-[15px] leading-6 font-normal h-[56px] w-[300px] mx-2 lg:w-[457.33px] text-[#757575] border bg-white rounded-[8px] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
    />
  </div>
</div>
      </div>
      <div>
      <div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-[28px] leading-8 text-left text-[#111] font-helvetica">
      WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
      </h1>
      <p className="leading-7 font-helvetica font-normal text-[15px] mt-4">
      We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
      </p>
      <p className="leading-7 font-helvetica font-normal text-[16px] pl-4 mt-4">
      Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro<br/>
      If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.<br/>
      Apple Pay</p>
      <p className="leading-7 font-helvetica font-medium text-[16px] mt-4">
      <b><u>Nike Members</u></b> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
      <div className="flex justify-start items-start my-8">
        <button className="inline-flex font-helvetica mx-1 pt-[7.5px] pr-[22.08px] pl-[21.5px] pb-[7.5px] text-white bg-[#111] border-0 py-2 px-6 focus:outline-none hover:bg-[#111] rounded-[30px] text[15px] leading-6">
        JOIN US
        </button>
        <button className="inline-flex font-helvetica mx-1 pt-[7.5px] pr-[22.08px] pl-[21.5px] pb-[7.5px] text-white bg-[#111] border-0 py-2 px-6 focus:outline-none hover:bg-[#111] rounded-[30px] text[15px] leading-6">
        SHOP NIKE
        </button>
      </div>
      {/*Faqs*/}
      <h2 className="title-font font-medium  text-[20px] leading-6 text-left text-[#111] font-helvetica">
      FAQs
      </h2>

      <h3 className="title-font font-bold text-[16px] leading-7 text-left text-[#111] font-helvetica">
      Does my card need international purchases enabled?
      </h3>
      <p className="leading-7 font-helvetica font-normal text-[16px] mt-4">
      Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
      <p className="leading-7 font-helvetica font-normal text-[16px] mt-4">
      Please note, some banks may charge a small transaction fee for international orders.</p>

      <h3 className="title-font font-bold text-[16px] leading-7 text-left text-[#111] font-helvetica">
      Can I pay for my order with multiple methods? </h3>
      <p className="leading-7 font-helvetica font-normal text-[16px] mt-4">
      No, payment for Nike orders can't be split between multiple payment methods.</p>
     
      <h3 className="title-font font-bold text-[16px] leading-7 text-left text-[#111] font-helvetica">
      What payment method is accepted for SNKRS orders? </h3>
      <p className="leading-7 font-helvetica font-normal text-[16px] mt-4">
      You can use any accepted credit card to pay for your SNKRS order.</p>
      
      <h3 className="title-font font-bold text-[16px] leading-7 text-left text-[#111] font-helvetica">
      Why don't I see Apple Pay as an option?</h3>
      <p className="leading-7 font-helvetica font-normal text-[16px] mt-4">
      To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
    
      <p className="leading-7 font-helvetica font-normal text-[15px] mt-4">
      Was this answer helpful?</p>
      <div className="flex justify-start items-start my-5">
      <Image src="/images/thum_up.png" alt="thum" width={30} height={30} className="px-1"/>
      <Image src="/images/thum_down.png" alt="thum" width={30} height={30} className="px-1"/>
</div>
<h2 className="title-font font-medium text-[16px] leading-7 underline pl-3 text-left text-[#111] font-helvetica">
WHAT ARE NIKE'S DELIVERY OPTIONS?
      </h2>
      <h2 className="title-font font-medium text-[16px] leading-7 underline pl-3 text-left text-[#111] font-helvetica">
      HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
      </h2>
    </div>
    <div className="lg:w-2/6 md:w-1/2   flex flex-col md:ml-auto w-full lg:mt-[-25%]">
    <h1 className="text-center title-font font-medium text-[28px] leading-8 py-5 text-[#111] font-helvetica">
    CONTACT US
      </h1>
         
     <div className="text-center">
        <div className="flex justify-center items-center py-5">
     <Image  src="/images/phone.png" alt="phone" width={64} height={64}/>
       </div> <p className="font-medium font-helvetica text-[16px] leading-7 text-center">000 800 919 0566</p>
        <p className="font-normal font-helvetica text-[16px] leading-7 text-center">Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
     </div>
     <div>
     <div className="flex justify-center items-center py-5">
     <Image className="text-center" src="/images/msg.png" alt="Message" width={64} height={64}/>
       </div> <p className="font-medium font-helvetica text-[15px] leading-7 text-center">24 hours a day</p>
        <p className="font-normal font-helvetica text-[15px] leading-7 text-center">7 days a week</p>
     </div>
     <div>
     <div className="flex justify-center items-center py-5">
     <Image className="text-center" src="/images/env.png" alt="Emai" width={64} height={64}/>
       </div> <p className="font-medium font-helvetica text-[15px] leading-7 text-center">We'll reply within</p>
        <p className="font-normal font-helvetica text-[15px] leading-7 text-center">five business days</p>
     </div>
     <div>
     <div className="flex justify-center items-center py-5">
     <Image className="text-center" src="/images/locate.png" alt="Location" width={64} height={64}/>
        </div><p className="font-medium font-helvetica text-[15px] leading-7 text-center"><a>STORE LOCATOR</a></p>
        <p className="font-normal font-helvetica text-[15px] leading-7 text-center">Find Nike retail stores near you</p>
     </div>
    </div>
  </div>
</div>

      </div>
        </div>
    );
}