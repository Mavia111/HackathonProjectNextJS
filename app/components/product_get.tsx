import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Accordionlist } from "@/components/accordian";
import Link from "next/link";

// Define the type for the product
interface Ty {
  customID: string;   // Add customID for dynamic routing
  productName: string;
  image_url: string;
  price: number;
  productShort: string;
}

// Function to fetch product data
async function get_data() {
  const fetchData = await client.fetch(
    `*[_type == "product"]{
      customID,
      productName,
      productShort,
      price,
      "image_url": image.asset->url
    }`
  );
  return fetchData;
}

// Main component to fetch and display products
export async function Get_Product() {
  const data = await get_data();

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="lg:w-[20%] sm:w-[100%]">
          <div className="h-[400.72px] overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 scrollbar-thumb-rounded-full">
            <ul className="px-10 py-10">
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Shoes</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Sports Bras</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Tops & T-Shirts</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Hoodies & Sweatshirts</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Jackets</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Trousers & Tights</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Shorts</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Tracksuits</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Jumpsuits & Rompers</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Skirts & Dresses</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Socks</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Accessories & Equipment</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Sport Bags</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Caps</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Galahs</li>
            </ul>
          </div>
          <div className="px-10 py-5">
            <Accordionlist />
          </div>
        </div>

        <div className="lg:w-[80%] sm:w-[100%]">
          {/* Map through the product data */}
          {data.map((val: Ty, i: number) => {
            return (
              <div key={i}>
                {/* Link to the dynamic product page */}
                <Link href={`/product/[ID].page.tsx`}>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={val.image_url}
                      width={348}
                      height={348}
                    />
                    <div className="mt-4 h-[185px]">
                      <h2 className="text-[#9E3500] font-medium text-[15px] leading-7 font-helvetica">Just In</h2>
                      <h3 className="text-[#111] text-[15px] leading-6 title-font mb-1 font-medium font-helvetica">
                        {val.productName}
                      </h3>
                      <h2 className="text-[#757575] text-[15px] leading-6 title-font font-normal">
                        {val.productShort}
                      </h2>
                      <p className="text-[#111] text-[15px] leading-6 title-font mb-1 font-medium font-helvetica">
                        MRP: ₹{val.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
