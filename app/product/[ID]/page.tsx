import { client } from "@/sanity/lib/client";
import Image from "next/image"
import { FaShoppingCart } from 'react-icons/fa';



  
  export default async function Single_Product(props:any){
    
   
    console.log(props);
    const num = props.name;
     const fetchData = await client.fetch(`*[_type == "product" && customID == 5555] {
      productName,
      productDescription,
      productShort,
      price,
      category,
      "image_url": image.asset->url
    }
    `);
    console.log(fetchData);
    const data = await fetchData;
  return(
      
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
  {data.map((val:any,i:number)=>{
    return(
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={val.image_url}
        width={653} height={653}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-[48px] font-medium leading-[48px] title-font text-[#111] font-poppins tracking-widest">
          {val.productName}
        </h2>
        <p className="text-[15px] leading-7 font-normal text-[#111]">{val.productDescription}</p>
         
        <div className="">
          <span className="title-font  text-[36px] leading-7 font-medium text-[#111]">
          MRP: ₹{val.price}
          </span>
          <button className="flex items-center rounded-[30px] bg-[#111] text-white px-4 py-2  shadow-lg ">
      <FaShoppingCart className="mr-2" /> {/* Shopping Cart Icon */}
      <span className="text-[15px] leading-6 font-medium">Add To Cart</span>
    </button>
          
        </div>
      </div>
    </div>
  );})}
  </div>
</section>

    );
}