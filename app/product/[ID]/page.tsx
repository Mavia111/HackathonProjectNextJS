import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  productName: string;
  image_url: string;
  price: number;
  productDescription: string;
}

interface Props {
  product: Product;
  customID: string; // To hold the CustomID from the query params
}

export default function SingleProduct({ product, customID }: Props) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt={product.productName}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image_url}
            width={653}
            height={653}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-[48px] font-medium leading-[48px] title-font text-[#111] font-poppins tracking-widest">
              {product.productName}
            </h2>
            <p className="text-[15px] leading-7 font-normal text-[#111]">
              {product.productDescription}
            </p>

            <div>
              <span className="title-font text-[36px] leading-7 font-medium text-[#111]">
                MRP: ₹{product.price}
              </span>
              <button className="flex items-center rounded-[30px] bg-[#111] text-white px-4 py-2 shadow-lg ">
                <FaShoppingCart className="mr-2" /> {/* Shopping Cart Icon */}
                <span className="text-[15px] leading-6 font-medium">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fetch product data on the server side using CustomID from the query params
export async function getServerSideProps(context: any) {
  const { CustomID } = context.query; // Get CustomID from the query params

  if (!CustomID) {
    return {
      notFound: true, // Return 404 if no CustomID is provided
    };
  }

  // Fetch the product based on CustomID
  const productData = await client.fetch(
    `*[_type == "product" && customID == $customID] {
      productName,
      productDescription,
      price,
      "image_url": image.asset->url
    }`,
    { customID }
  );

  if (!productData || productData.length === 0) {
    return {
      notFound: true, // If no product is found, return 404
    };
  }

  // Assuming you only want to render the first product
  const product = productData[0];

  return {
    props: { 
      product, 
      customID, // Pass CustomID as a prop to the page
    },
  };
}
