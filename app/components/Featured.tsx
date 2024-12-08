import Image from "next/image";
export function Featured(){
    return(
        <div>
        <div className="p-5 pl-6">
            <h1 className="font-medium text-[23px] leading-7 text-[#111]">Featured</h1>
        </div>
        <div className="flex items-center justify-center">
        <Image src="/images/banner2.jpg" alt="Banner" width={1300} height={700}/>
        </div>
        <div className="text-[#111] font-helvetica md:pt-4">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/3 w-full">
    
      <h1 className="title-font text-4xl md:text-[54px] md:leading-[60px] mb-4 font-medium text-[#111]">
      STEP INTO WHAT FEELS GOOD
      </h1>
      <p className="font-normal text-[15px] leading-6 text-[#111]">
      Cause everyone should know the feeling of running in that perfect pair.
      </p>
      <div className="flex justify-center mt-5">
        <button className="inline-flex mx-1 pt-[7.5px] pr-[22.08px] pl-[21.5px] pb-[7.5px] text-white bg-[#111] border-0 py-2 px-6 focus:outline-none hover:bg-[#111] rounded-[30px] text[15px] leading-6">
        Find Your Shoe
        </button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export function Dontmiss(){
    return(
        <div>
        <div className="p-5 pl-6">
            <h1 className="font-medium text-[23px] leading-7 text-[#111]">Featured</h1>
        </div>
        <div className="flex items-center justify-center">
        <Image src="/images/banner3.png" alt="Banner" width={1300} height={700}/>
        </div>
        <div className="text-[#111] font-helvetica md:pt-4">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/3 w-full">
    
      <h1 className="title-font text-4xl md:text-[52px] md:leading-[60px] mb-4 font-medium text-[#111]">
      FLIGHT ESSENTIALS
      </h1>
      <p className="font-normal text-[15px] leading-6 text-[#111]">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div className="flex justify-center mt-5">
        <button className="inline-flex mx-1 pt-[7.5px] pr-[22.08px] pl-[21.5px] pb-[7.5px] text-white bg-[#111] border-0 py-2 px-6 focus:outline-none hover:bg-[#111] rounded-[30px] text[15px] leading-6">
        Shop
        </button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export function Essent(){
  return(
    <div>
      <div className="p-5 pl-6">
            <h1 className="font-medium text-[23px] leading-7 text-[#111]">The Essentials</h1>
        </div>
  <div className="text-white font-helvetica">
  <div className="px-5 ">
    <div className="flex flex-wrap">
      <div className="p-2 lg:w-1/3">
      <div className=" h-[540px] lg:w-[430px] w-[300px] bg-[url('/images/bg1.png')] bg-cover bg-center">
        <div className="pt-[450.98px] pl-[48px]  pb-24 rounded-lg overflow-hidden text-left relative">
        <button className="title-font sm:text-2xl md:text-[15px] leading-6 font-medium text-[#111] rounded-[30px] bg-white px-[7.5px] pl-[21.5px] pr-[20.69px] ">
            Men's
          </button>
        </div>
      </div>
      </div>
      <div className="p-2 lg:w-1/3">
      <div className="h-[540px] lg:w-[430px] w-[300px] bg-[url('/images/bg3.png')] bg-cover bg-center">
        <div className="pt-[450.98px]  pl-[48px]  pb-24 rounded-lg overflow-hidden text-left relative">
        <button className="title-font sm:text-2xl md:text-[15px] leading-6 font-medium text-[#111] rounded-[30px] bg-white px-[7.5px]  pl-[21.5px] pr-[20.69px]">
            Women's
          </button>
        </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3">
      <div className=" h-[540px] lg:w-[430px] w-[300px] bg-[url('/images/bg2.png')] bg-cover bg-center">
        <div className="pt-[450.98px] pl-[48px]  pb-24 rounded-lg overflow-hidden text-left relative">
          <button className="title-font sm:text-2xl md:text-[15px] leading-6 font-medium text-[#111] rounded-[30px] bg-white px-[7.5px]  pl-[21.5px] pr-[20.69px]">
            Kids
          </button>
        </div>
        </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export function Catelink(){
  return(
    <section className="text-gray-600 body-font">
  <div className=" px-1 py-24 ">

    <div className="flex flex-wrap md:mx-36">
      <div className="p-4 lg:w-1/4 w-1/2  ">
        <h2 className="font-medium title-font tracking-widest text-[#111] font-helvetica mb-4 text-[15px] leading-6 md:text-left text-center">
        Icons
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-left items-center -mb-1 space-y-2.5">
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Air Force 1
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Huarache
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Air Max 90
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Air Max 95
          </a>
          
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 w-1/2 ">
        <h2 className="font-medium title-font tracking-widest text-[#111] font-helvetica mb-4 text-[15px] leading-6 md:text-left text-center">
        Shoes
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-left items-center -mb-1 space-y-2.5">
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          All Shoes
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Custom Shoes
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Jordan Shoes
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Running Shoes
          </a>
          
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 w-1/2">
        <h2 className="font-medium title-font tracking-widest text-[#111] font-helvetica mb-4 text-[15px] leading-6 md:text-left text-center">
        Clothing
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-left items-center -mb-1 space-y-2.5">
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          All Clothing
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Modest Wear
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Hoodies & Pullovers
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Shirts & Tops
          </a>
          
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 w-1/2">
        <h2 className="font-medium title-font tracking-widest text-[#111] font-helvetica mb-4 text-[15px] leading-6 md:text-left text-center">
        Kid's
        </h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-left items-center -mb-1 space-y-2.5">
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Infant & Toddler Shoes
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Kid's Shoes
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Kid's Jordan Shoes
          </a>
          <a className="text-[#757575] text-[15px] leading-6 font-medium">
          Kid's Basketball Shoes
          </a>
          
        </nav>
      </div>
    </div>
    
  </div>
</section>

  );
}