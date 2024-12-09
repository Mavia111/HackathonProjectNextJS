import Image from "next/image";
import Link from "next/link";

export function Topbar(){
    return(
<div className="bg-[#F5F5F5]">
      <div className="h-9 container mx-auto flex flex-wrap  flex-col md:flex-row items-center justify-between">
    <div>
    <Link href="/" className="flex title-font font-medium items-center text-[#1111] mb-4 md:mb-0">
    <Image src="/images/Vector.png" alt="An example image" width={19.2} height={17.97} className="pt-[3px] pl-[2.21px]"/>
    </Link>
    </div>
   
    <div >
     
    <Link className="px-2 font-helvetica font-medium leading-[14px] text-[11px] border-[#111] border-r-[1px] hover:text-gray-900" href="/product">Find a Store</Link>
      <Link  className="px-2 font-helvetica font-medium leading-[14px] text-[11px] border-[#111] border-r-[1px] hover:text-gray-900" href="/help">Help</Link>
      <Link  className="px-2 font-helvetica font-medium leading-[14px] text-[11px] border-[#111] border-r-[1px] hover:text-gray-900" href="/join_us">Join Us</Link>
      <Link className="px-2 font-helvetica font-medium leading-[14px] text-[11px] hover:text-gray-900" href="/login">Sign In</Link>
    </div>
    
      
</div>
       
  </div>


    );}
