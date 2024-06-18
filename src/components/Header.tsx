
function Header() {
  return (
    <div className="bg-white p-8 relative shadow-2xl">
        <div className="absolute bg-white h-[9.188em] left-1/2 -translate-x-1/2 top-0 pb-4">
        </div>
        <div className="flex items-center justify-between gap-4 w-full [&>p]:hover:cursor-pointer border-b border-gray-300 flex-wrap">
            <p className="flex items-center gap-1 border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3] group">
                <span className="text-black text-xs font-semibold group-hover:text-[#0a21b3]">دانشگاه </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </p>

            <p className="flex items-center gap-1 border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3] group">
                <span className="text-black text-xs font-semibold group-hover:text-[#0a21b3]">آموزش </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </p>

            <p className="flex items-center gap-1 border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3] group">
                <span className="text-black text-xs font-semibold group-hover:text-[#0a21b3]">پذوهش </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </p>

            <p className="flex items-center gap-1 border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3] group">
                <span className="text-black text-xs font-semibold group-hover:text-[#0a21b3]">دانشکده ها </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </p>    

            <p className="flex items-center gap-1 border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3] group">
                <span className="text-black text-xs font-semibold group-hover:text-[#0a21b3]">رفاهی </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </p>

            <p className="flex items-center gap-1 border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3] group">
                <span className="text-black text-xs font-semibold group-hover:text-[#0a21b3]">فوق برنامه </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </p>

            <p className="text-black text-xs font-semibold border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3]">پایگاه خبری بسنا</p>

            <p className="text-black text-xs font-semibold border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3]">پیشخوان</p>

            <p className="text-black text-xs font-semibold border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-3 transition-all duration-200 hover:text-[#0a21b3]">اسپاد</p>

            <p className="flex items-center gap-1 border-b-2 border-b-transparent hover:border-b-[#0a21b3] pb-1 transition-all duration-200 hover:text-[#0a21b3] group">
                <span className="text-black text-xs font-semibold group-hover:text-[#0a21b3]">
                سامانه های الکترونیک</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>

            </p>
        </div>

        <div className="flex items-center justify-between flex-wrap mt-2 gap-4">
            <p className="text-[#62657e] text-xs hover:cursor-pointer hover:text-[#4150c5] mr-4">اعضای هیأت علمی</p>
            <p  className="text-[#62657e] text-xs hover:cursor-pointer hover:text-[#4150c5]">کارکنان
            </p>
            <p  className="text-[#62657e] text-xs hover:cursor-pointer hover:text-[#4150c5]">دانشجویان</p>
            <p  className="text-[#62657e] text-xs hover:cursor-pointer hover:text-[#4150c5]">فارغ التحصیلان
            </p>
            <p  className="text-[#62657e] text-xs hover:cursor-pointer hover:text-[#4150c5]">ارتباط با ما</p>
            <p  className="text-[#62657e] text-xs hover:cursor-pointer hover:text-[#4150c5]">
            روابط بین الملل</p>
            <p  className="text-[#62657e] text-xs hover:cursor-pointer hover:text-[#4150c5]">وب سایت قدیم</p>

            <div className="flex items-center gap-2 hover:cursor-pointer mr-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6 text-[#62657e] ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

<div className="flex gap-1 ">
<span className="text-[#969aba] text-xs">EN</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#969aba]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

</div>

            </div>
        </div>
    </div>
  )
}

export default Header