import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define the product data type
interface Ty {
  id:string;// Use `string` instead of `String`
}
// The page component that receives params (from dynamic route)
export default async function ProductPage({ params }: { params: { id: Ty } }) {
  // Fetch product data using the dynamic "id" route parameter
  const productData = await client.fetch(
    `*[_type == "product" && customID == 5555][0] {
      productName,
      productDescription,
      price,
      "image_url": image.asset->url
    }`,
     // Use the dynamic "id" from the URL
  );
  const abc = { id: params.id };
  // If no product found, show a "not found" message
  if (!productData) {
    return <p>Product not found</p>;
  }

  // Destructure the product data
  const { productName, productDescription, price, image_url } = productData;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt={abc}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image_url}
            width={653}
            height={653}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-[48px] font-medium leading-[48px] title-font text-[#111] font-poppins tracking-widest">
              {productName}
            </h2>
            <p className="text-[15px] leading-7 font-normal text-[#111]">{productDescription}</p>
            <div>
              <span className="title-font text-[36px] leading-7 font-medium text-[#111]">
                MRP: ₹{price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
