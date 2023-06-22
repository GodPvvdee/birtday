import React from "react";

export default function Page() {
  return (
    <div>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          <h1 className="mx-5">Tursun udriin mend bronuudaa</h1>
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
            className="dark:hidden w-[272px] h-[572px]"
            alt
          />
          <img
            src="https://cdn.guff.com/site_0/media/32000/31950/items/22e23fdcef2ffb23e9bfc411.jpg"
            className="hidden dark:block w-[272px] h-[572px]"
            alt
          />
        </div>
      </div>
    </div>
  );
}
