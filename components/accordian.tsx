import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Checkbox } from "@radix-ui/react-checkbox"
  
  export function Accordionlist() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="border-t-[1px] font-medium text-[16px] leading-6 text-[#111]">Gender</AccordionTrigger>
          <AccordionContent>
          <div className="flex items-center space-x-2 justify-between">
            <label
             htmlFor="terms2"
            className="  font-normal text-left text-[15px] leading-6 text-[#8D8D8D]">
            <Checkbox id="terms2" />
            &nbsp;&nbsp;Men
            </label>
            <label
             htmlFor="terms2"
            className=" text-sm font-normal text-left text-[12px] leading-[14px] text-[#8D8D8D]">
            <Checkbox id="terms2" />
            &nbsp;&nbsp;Women
            </label>
            <label
             htmlFor="terms2"
            className=" text-sm font-normal text-left text-[12px] leading-[14px] text-[#8D8D8D]">
            <Checkbox id="terms2" />
            &nbsp;&nbsp;Unisex
            </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="border-t-[1px] font-medium text-[16px] leading-6 text-[#111]">Kids</AccordionTrigger>
          <AccordionContent>
          <div className="flex items-center space-x-2 justify-between">
            <label
             htmlFor="terms2"
            className="  font-normal text-left text-[15px] leading-6 text-[#8D8D8D]">
            <Checkbox id="terms2" />
            &nbsp;&nbsp;Boys
            </label>
            <label
             htmlFor="terms2"
            className=" text-sm font-normal text-left text-[12px] leading-[14px] text-[#8D8D8D]">
            <Checkbox id="terms2" />
            &nbsp;&nbsp;Girls
            </label>
            
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="border-t-[1px] font-medium text-[16px] leading-6 text-[#111]">Shop By Price</AccordionTrigger>
          <AccordionContent>
          <div className="flex items-center space-x-2 justify-between">
            <label
             htmlFor="terms2"
            className="  font-normal text-left text-[15px] leading-6 text-[#8D8D8D]">
            <Checkbox id="terms2" />
            &nbsp;&nbsp;Under ₹ 2 500.00
            </label>
            <label
             htmlFor="terms2"
            className=" text-sm font-normal text-left text-[12px] leading-[14px] text-[#8D8D8D]">
            <Checkbox id="terms2" />
            &nbsp;&nbsp;₹ 2 501.00 - ₹ 7 500.00
            </label>
            
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  