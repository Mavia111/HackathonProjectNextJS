import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

// Define the type for the product
interface Ty {
  customID: string;
  productName: string;
  image_url: string;
  price: number;
  productShort: string;
}

// Fetch the products
export async function Get_Product() {
  const products = await client.fetch(
    `*[_type == "product"]{
      customID,
      productName,
      productShort,
      price,
      "image_url": image.asset->url
    }`
  );
  return products;
}

export  async function ProductList() {
  const products = await Get_Product();

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="lg:w-[20%] sm:w-[100%]">
          <div className="h-[400.72px] overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 scrollbar-thumb-rounded-full">
            {/* Categories */}
            <ul className="px-10 py-10">
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Shoes</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Sports Bras</li>
              <li className="text-[#111] text-[15px] leading-[21.6px] font-medium font-helvetica mt-2">Tops & T-Shirts</li>
              {/* More categories here */}
            </ul>
          </div>
        </div>

        <div className="lg:w-[80%] sm:w-[100%]">
          {/* Display Products */}
          {products.map((product: Ty) => (
            <div key={product.customID}>
              {/* Link to the dynamic product page */}
              <Link href={`/singleproduct`}>
                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <Image
                    alt={product.productName}
                    className="object-cover object-center w-full h-full block"
                    src={product.image_url}
                    width={348}
                    height={348}
                  />
                  <div className="mt-4 h-[185px]">
                    <h2 className="text-[#9E3500] font-medium text-[15px] leading-7 font-helvetica">Just In</h2>
                    <h3 className="text-[#111] text-[15px] leading-6 title-font mb-1 font-medium font-helvetica">
                      {product.productName}
                    </h3>
                    <h2 className="text-[#757575] text-[15px] leading-6 title-font font-normal">
                      {product.productShort}
                    </h2>
                    <p className="text-[#111] text-[15px] leading-6 title-font mb-1 font-medium font-helvetica">
                      MRP: ₹{product.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
