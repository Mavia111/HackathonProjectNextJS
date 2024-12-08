import Image from "next/image"
import WishlistIcon from "../components/wishlist_Icon";
import DeleteIcon from "../components/wishlist_Icon";
export default function Cart(){
    return(
        <div className="lg:flex p-5">
            <div className="lg:w-[75%] w-full lg:px-56 py-10">
            <div className=" bg-[#F7F7F7] p-8 llg:h-[62.89px)] lg:pl-10">
                <h1 className="font-medium text-[#111] text-[13px] leading-[14px] tracking-tighter font-poppins">Free Delivery</h1>
                <p className="font-normal text-[#111] font-poppins text-[11px] leading-6">Applies to orders of ₹ 14 000.00 or more. &nbsp;&nbsp; <span><u>View details</u></span></p>
            </div>
            <div>
                <h2 className="font-medium text-[22px] leading-[33px] text-[#111] text-left font-poppins">Bag</h2>
                <div className="lg:flex">
                    <div className="lg:w-1/4"><Image src="/images/pro1.png" alt="product" width={150} height={150} /></div>
                    <div className="px-10 lg:w-1/2"><h2 className="font-medium text-[15px] leading-7 text-[#111] font-poppins">Nike Dri-FIT ADV TechKnit Ultra</h2>
                    <p className="font-normal text-[15px] leading-7 text-[#757575]">Men's Short-Sleeve Running Top <br />Ashen Slate/Cobalt Bliss</p>
                    <div className="flex text-[15px] leading-7 font-poppins font-normal text-[#757575]">
                        <span className="px-2">Size</span><span className="pr-5">L</span><span className="px-2">Quanity</span><span className="pr-5">1</span>
                    </div>
                    <div className="flex"><WishlistIcon/><Image src="/images/delete1.png" alt="" width={30} height={2}/>
</div>
                    </div>
                    <div className="lg:w-1/4"><span className="font-normal text-[15px] leading-7 text-right font-poppins">MRP: ₹ 3 895.00</span></div>
                </div>
                <div className="lg:flex p-5">
                    <div className="lg:w-1/4"></div>
                    <div className="px-10 lg:w-1/2"><h2 className="font-medium text-[15px] leading-7 text-[#111] font-poppins">Nike Air Max 97 SE</h2>
                    <p className="font-normal text-[15px] leading-7 text-[#757575]">Men's Shoes<br />Flat Pewter/Light Bone/Black/White </p>
                    <div className="flex text-[15px] leading-7 font-poppins font-normal text-[#757575]">
                        <span className="px-2">Size</span><span className="pr-5">8</span><span className="px-2">Quanity</span><span className="pr-5">1</span>
                    </div>
                    <div className="flex"><WishlistIcon/><Image src="/images/delete1.png" alt="" width={30} height={2}/></div>
                    </div>
                    <div className="lg:w-1/4"><span className="font-normal text-[15px] leading-7 text-right font-poppins">MRP: ₹ 3 895.00</span></div>
                </div>
            </div>
            </div>
            <div className="lg:w-[25%] w-full  py-10">
            <h2 className="font-medium text-[22px] py-10 leading-[33px] text-[#111] text-left font-poppins">Summary</h2>
            <div className="py-5 flex justify-between"><span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">Subtotal</span>
            <span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">₹ 20 890.00</span></div>
            
            <div className="py-5 flex justify-between"><span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">Estimated Delivery & Handling</span>
            <span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">Free</span></div>
            <div className="py-5 flex justify-between border-t-[1px] border-b-[1px]"><span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">Total</span>
            <span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">₹ 20 890.00</span></div>
            <button className="title-font sm:text-2xl md:text-[15px] leading-6 font-medium text-white w-full h-16 rounded-[30px] bg-[#111] px-[7.5px]  pl-[21.5px] pr-[20.69px]">
            Member Checkout
          </button>
            </div>
       </div>

    );
}