import Image from "next/image";
import { NotebookIcon, ShoppingBagIcon } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";

export default function Checkout(){
    return(
        <div>
        <div className="lg:flex justify-between">
            <div className="w-1/4 flex justify-center items-center py-10"><Image src="/images/logo.png" alt="logo" width={64} height={21.75} /></div>
            <div></div>
            <div className="lg:flex py-10 "><h2 className="text-[14px] leading-6 font-normal font-poppins px-5">000 800 100 9538</h2><span className="px-2"><NotebookIcon/></span><span className="px-2"><ShoppingBagIcon/></span></div>
        </div>

        <div className="lg:flex justify-center">
            <div className="lg:w-1/4"></div>
            <div className="lg:w-1/2 p-5">
                <h2 className="text-[21px] leading-6 font-poppins font-medium text-[#111]">How would you like to get your order?</h2>
                <p className="text-[15px] leading-6 font-poppins font-normal text-[#757575]">Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                <div className="border-2 border-[#111] text-[#111] rounded-xl p-5"><h2 className="flex"><NotebookIcon/>Deliver It</h2></div>
                <h2 className="text-[21px] py-5 leading-6 font-poppins font-medium text-[#111]">Enter your name and address:</h2>
                {/*Form*/}
                <div className="flex items-center justify-center">
    
                <form>
  <div className="grid w-full gap-6 px-4 py-6 sm:px-6 lg:px-8">
    {/* Personal Information */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#111]">Personal Information</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          id="fname"
          type="text"
          placeholder="First Name"
          className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
        />
        <input
          id="lname"
          type="text"
          placeholder="Last Name"
          className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
        />
      </div>

      <input
        id="address1"
        type="text"
        placeholder="Address Line 1"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
      <input
        id="address2"
        type="text"
        placeholder="Address Line 2"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
      <input
        id="address3"
        type="text"
        placeholder="Address Line 3"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          id="postalCode"
          type="text"
          placeholder="Postal Code"
          className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
        />
        <input
          id="locality"
          type="text"
          placeholder="Locality"
          className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
        />
      </div>

      <p className="text-center text-xs text-[#BCBCBC]">
        Get a Nike Member Reward every year on your Birthday.
      </p>

      {/* State and Country Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select>
          <SelectTrigger className="text-[#BCBCBC]">
            <SelectValue className="text-[#111] text-[15px] p-3 border-2 border-[#111] rounded-md" placeholder="Select a State" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="India">State</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        
        <Select>
          <SelectTrigger className="text-[#BCBCBC]">
            <SelectValue className="text-[#BCBCBC] p-3 border-2 border-[#111] rounded-md" placeholder="Select a Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="India">India</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>

    {/* Contact Information */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#111]">What's your contact information?</h2>

      <input
        id="email"
        type="email"
        placeholder="Email"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
      <p className="text-xs text-center text-[#8D8D8D]">
        A confirmation email will be sent after checkout.
      </p>

      <input
        id="phone"
        type="text"
        placeholder="Phone Number"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
      <p className="text-xs text-center text-[#8D8D8D]">
        A carrier might contact you to confirm delivery.
      </p>
    </div>

    {/* PAN Information */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#111]">What's your PAN?</h2>
      
      <input
        id="pan"
        type="text"
        placeholder="PAN"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
      <p className="text-xs text-center text-[#8D8D8D]">
        Enter your PAN to enable payment with UPI, Net Banking, or local card methods
      </p>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <label htmlFor="terms1" className="text-xs text-[#8D8D8D]">
          Save PAN details to Nike Profile
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" />
        <label htmlFor="terms2" className="text-xs text-[#8D8D8D]">
          I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy.
        </label>
      </div>

      <input
        id="continue"
        type="button"
        value="Continue"
        disabled
        className="text-[#BCBCBC] border border-[#E5E5E5] rounded-md p-3 w-full cursor-not-allowed"
      />
    </div>

    {/* Delivery Information */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#111]">Delivery</h2>

      <input
        id="shipping"
        type="text"
        placeholder="Shipping"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
      <input
        id="billing"
        type="text"
        placeholder="Billing"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
      <input
        id="payment"
        type="text"
        placeholder="Payment"
        className="text-[#111] text-[15px] w-full p-3 border border-[#E5E5E5] rounded-md"
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-center pt-6">
     
    </div>
  </div>
</form>

    
      

    </div>
           
            </div>
            <div className="lg:w-1/4 p-5">
            <h2 className="font-medium text-[22px] py-10 leading-[33px] text-[#111] text-center font-poppins">Order Summary</h2>

                <div className="py-5 flex justify-between"><span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">Subtotal</span>
            <span className="text-[22px] leading-7 font-poppins font-normal text-[#757575]">₹ 20 890.00</span></div>
            <div className="py-5 flex justify-between"><span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">Delivery/Shipping </span>
            <span className="text-[15px] leading-7 font-poppins font-normal text-[#757575]">Free</span></div>
            <div className="py-5 flex justify-between border-t-[1px] border-b-[1px]"><span className="text-[15px] leading-7 font-poppins font-normal text-[#111]">Total</span>
            <span className="text-[15px] leading-7 font-poppins font-normal text-[#111]">₹ 20 890.00</span></div>
            <p className="text-[9px] leading-6 font-normal font-poppins text-[#111]">(The total reflects the price of your order, including all duties and taxes)</p>
            <p className="text-[15px] leading-6 font-normal font-poppins text-[#111]">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            <div className="flex">
            <Image src="/images/pro1.png" alt="product" width={150} height={100} />
            <div>
            <h2 className="font-medium text-[15px] leading-7 text-[#111] font-poppins">Nike Dri-FIT ADV TechKnit Ultra</h2>
                    <p className="font-normal text-[15px] leading-7 text-[#757575]">Men's Short-Sleeve Running Top <br />Ashen Slate/Cobalt Bliss</p>
                    <p className="px-2">Size<span className="pl-2">L</span></p><p className="pr-5">Quantity <span className="pl-2">1</span> </p>
                    <p className="font-normal text-[15px] leading-7 text-left font-poppins">MRP: ₹ 3 895.00</p>
            </div>
            </div>
            <div className="flex">
            <Image src="/images/frame.png" alt="product" width={150} height={150} />
            <div>
            <h2 className="font-medium text-[15px] leading-7 text-[#111] font-poppins">Nike Air Max 97 SE</h2>
                    <p className="font-normal text-[15px] leading-7 text-[#757575]">Men's Shoes<br />Flat Pewter/Light Bone/Black/White </p>
                    <p className="px-2">Size <span className="pl-2">8</span></p><p className="pr-5">Quantity <span className="pl-2">1</span></p>
                    <p className="font-normal text-[15px] leading-7 text-left font-poppins">MRP: ₹ 3 895.00</p>
            </div>
            </div>
            </div>
        </div>
</div>
    );
}