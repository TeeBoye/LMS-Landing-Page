import React from "react";

function Adminfooter() {
  return (
    <div className="h-[248px] gap-[128px] pl-[128px] pr-[128px] bg-white text-black flex flex-row ">
      <div className="h-[248px] w-[556px] gap-8 bg-white text-black flex flex-row justify-between">
        <div className=" w-[180.25px] h-56 gap-1 p-0.5 bg-white text-[#184CD1] flex flex-row">
          <img
            className="w-[40px] h-[38px]"
            src="/images/logo2.png"
            alt="image"
          />
          <div className="w-[114px] h-[42px]">
            <p className="text-clash font-bold text-[17.53px] leading-none tracking-wider">
              Panthera
            </p>
            <p className="text-clash font-medium text-[13.15px] leading-none tracking-wide">
              Tech School
            </p>
          </div>
        </div>
        <div className="h-[225px] gap-4 flex flex-col">
          <div>
            <p className="font-sora font-semibold text-lg leading-6">
              About Us
            </p>
          </div>
          <div>
            <p>Courses</p>
            <p>Events</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="h-[225px] gap-4 flex flex-col">
          <div>
            <p className="font-sora font-semibold text-lg leading-6">
              Resources
            </p>
          </div>
          <div>
            <p>Webinars</p>
            <p>Partners</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
        </div>
      </div>
      <div className=" h-[220px] gap-6 flex flex-col">
        <div>
          <p className="font-sora font-semibold text-lg leading-6">Subscribe</p>
        </div>
        <p>
          Join our newsletter to stay up to date on features and
          <br />
          releases.
        </p>
        <div className="flex flex-row gap-[16px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[338px] h-[56px] gap-2 bg-[#B9BECA] opacity-45 border text-black border-gray-200 rounded-[16px] p-[16px]"
          />
          <button className="font-clash font-semibold text-lg leading-6 tracking-normal text-[#66D440] rounded-[8px] border border-gray-200 py-[16px] px-[32px]">
            Subscribe
          </button>
        </div>
        <p className="font-sora font-normal text-xs leading-4.5 tracking-normal">
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
}

export default Adminfooter;
