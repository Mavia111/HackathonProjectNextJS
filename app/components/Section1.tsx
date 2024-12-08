import Image from "next/image";
export function Section1(){
    return(
        <div>
    <div className="bg-[#F5F5F5] h-14 text-center pt-[10px] text-[#111]">
    <h1 className="font-helvetica font-medium text-[15px] leading-4 ">Hello Nike App</h1>
    <p className="font-normal text-[11px] leading-6 font-helvetica">Download the app to access everything Nike. <b><u>Get Your Great</u></b></p>
   </div>
   <div className="flex items-center justify-center">
    <Image src="/images/banner1.png" alt="Banner" width={1300} height={700}/>
   </div>

<div className="text-[#111] font-helvetica md:pt-4">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/3 w-full">
    <h3 className="font-medium text-[15px] leading-6 text-[#111]">First Look</h3>
      <h1 className="title-font text-4xl md:text-[56px] md:leading-[60px] mb-4 font-medium text-[#111]">
      Nike Air Max Pulse
      </h1>
      <p className="font-normal text-[15px] leading-6 text-[#111]">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.
      </p>
      <div className="flex justify-center mt-5">
        <button className="inline-flex mx-1 pt-[7.5px] pr-[22.08px] pl-[21.5px] pb-[7.5px] text-white bg-[#111] border-0 py-2 px-6 focus:outline-none hover:bg-[#111] rounded-[30px] text[15px] leading-6">
        Notify Me
        </button>
        <button className="inline-flex mx-1 pt-[7.5px] pr-[22.08px] pl-[21.5px] pb-[7.5px] text-white bg-[#111] border-0 py-2 px-6 focus:outline-none hover:bg-[#111] rounded-[30px] text[15px] leading-6">
        Shop Air Max
        </button>
      </div>
    </div>
  </div>
</div>
</div>

    );
}