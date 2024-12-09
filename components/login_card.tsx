
import * as React from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Login_Form() {
  return (
    <div className="flex items-center justify-center">
    <Card className="w-[380px] p-7 my-16 mt-24">
      <CardHeader className="text-center">
        <Image src="/images/logo.png" alt="Logo" width={100} height={17} className="mx-[6rem]"/>
        <CardTitle className="text-lg leading-[26px] font-bold font-helvetica text-center px-14">YOUR ACCOUNT FOR EVERYTHING NIKE</CardTitle>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <Input id="email" type="email" placeholder="Email Address" className=" text-[#BCBCBC] border border-[#E5E5E5]" />
              <Input id="password" type="password" placeholder="Password" className="text-[#BCBCBC] border border-[#E5E5E5]"/>
            </div>
            <div className="flex items-center space-x-2 justify-between">
            <label
             htmlFor="terms2"
            className=" text-sm font-normal text-left text-[12px] leading-[14px] text-[#8D8D8D]">
            <Checkbox id="terms2" />
            <span className="pl-2">Keep me signed in</span>
            </label>
            <label htmlFor="forget" className="text-right text-[12px] leading-[13.8px] font-normal text-[#BCBCBC]">Forgotten your password?</label>
    </div>
          </div>
          <p className="px-5 pt-5 text-[#8D8D8D] text-center text-[12px] leading-4 font-normal">By logging in, you agree to Nike's <u><a>Privacy Policy</a></u> and <u><a>Terms of Use</a></u>.</p>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">        
        <Button className="w-full bg-[#111]">SIGN IN </Button>
      </CardFooter>
      <p className="text-sm font-normal text-[12px] leading-[14px] text-[#8D8D8D] text-center">Not a Member? <a><u>Join Us</u></a>.</p>
    </Card>
    </div>
  )
}

 
export function Join_Form() {
  return (
    <div className="flex items-center justify-center">
    <Card className="w-[380px] p-2 my-16 mt-24">
      <CardHeader className="text-center">
        <Image src="/images/logo.png" alt="Logo" width={100} height={17} className="mx-[6rem]"/>
        <CardTitle className="text-lg leading-[26px] font-bold font-helvetica text-center ">BECOME A NIKE MEMBER</CardTitle>
        <p className="px-1 pt-5 text-[#8D8D8D] text-center text-[14px] leading-[22px] font-normal">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <Input id="email" type="email" placeholder="Email Address" className=" text-[#BCBCBC] border border-[#E5E5E5]" />
              <Input id="password" type="password" placeholder="Password" className="text-[#BCBCBC] border border-[#E5E5E5]"/>
              <Input id="fname" type="text" placeholder="First Name" className=" text-[#BCBCBC] border border-[#E5E5E5]" />
              <Input id="lname" type="text" placeholder="Last Name" className="text-[#BCBCBC] border border-[#E5E5E5]"/>
              <Input id="date" type="text" placeholder="Date of Birth" className=" text-[#BCBCBC] border border-[#E5E5E5]" />
              <p className="text-center text-[12px] leading-[13.8px] font-normal text-[#BCBCBC]">Get a Nike Member Reward every year on your Birthday.</p>
              <Select>
              <SelectTrigger className="text-[#BCBCBC]">
              <SelectValue className="text-[#BCBCBC] border border-[#E5E5E5]" placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
                <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                <SelectItem value="Texas United State">Texas US</SelectItem>
                <SelectItem value="Dubai">Dubai</SelectItem>
               </SelectGroup>
              </SelectContent>
              </Select>
              <div className="flex justify-center">
              <Button className="text-[#8D8D8D] border border-[#8D8D8D] bg-white mx-2 w-[50%]">Male</Button>
              <Button className="text-[#8D8D8D] border border-[#8D8D8D] bg-white mx-2 w-[50%]">Female</Button>              
              </div>
            </div>
            <div className="flex items-center space-x-2 justify-between">
            <label
             htmlFor="terms2"
            className=" text-sm font-normal text-left text-[12px] leading-[14px] text-[#8D8D8D]">
            <Checkbox id="terms2" />
            <span className="pl-2">Sign up for emails to get updates from Nike on products, offers and your Member benefits.</span>
            </label>
    </div>
          </div>
          <p className="px-5 pt-5 text-[#8D8D8D] text-center text-[12px] leading-4 font-normal">By creating an account, you agree to Nike's.<u><a>Privacy Policy</a></u> and <u><a>Terms of Use</a></u>.</p>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">        
        <Button className="w-full bg-[#111]">JOIN US </Button>
      </CardFooter>
      <p className="text-sm font-normal text-[12px] leading-[14px] text-[#8D8D8D] text-center">Already a Member? <a><u className="text-[#111]">Sign In</u></a>.</p>
    </Card>
    </div>
  )
}

    