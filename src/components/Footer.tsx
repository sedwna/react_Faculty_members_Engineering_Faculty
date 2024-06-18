import mapImage from '../assets/image.png';

function Footer() {
  return (
    <div className="flex pt-11 p-[14px] w-full bg-[#05254b] justify-between flex-wrap">
        <ul className="my-3 px-3 text-white space-y-4 list-disc [&>li]:mr-6 [&>li]:text-xs [&>li]:hover:cursor-pointer">
            <h3 className="font-black text-[1.375rem] text-white mb-5">پیوند ها</h3>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">دفتر مقام معظم رهبری</li>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">وزارت علوم، تحقیقات و فناوری</li>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">صندوق حمایت از پژوهشگران و فناوران کشور</li>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">مرکز مطالعات راهبردی و آموزش وزارت کشور</li>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">بنیاد نخبگان استان همدان</li>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">شبکه آزمایشگاه‌های علمی ایران(شاعا)</li>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">بنیاد خیرین حامی دانشگاه بوعلی سینا</li>
            <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">صندوق رفاه دانشجویان</li>
        </ul>

        <ul className="my-3 px-3 text-white space-y-4 list-disc [&>li]:mr-6 [&>li]:text-xs">
           <h3 className="font-black text-[1.375rem] text-white mb-5 invisible">asdasd</h3>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">پورتال امام خمینی (ره)</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">سامانه تدارکات الکترونیکی دولت</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">ریاست جمهوری اسلامی ایران</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">معاونت علمی فناوری ریاست جمهوری</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">پارک علم و فناوری همدان</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">درگاه پرداخت درآمدها</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">مرکز آپا دانشگاه بوعلی سینا</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">پورتال صندوق رفاه دانشجویان</li>
        </ul>

        <ul className="my-3 px-3 text-white space-y-4 list-disc [&>li]:mr-6 [&>li]:text-xs">
           <h3 className="font-black text-[1.375rem] text-white mb-5">واحدها و مراکز</h3>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">دانشگاه بین المللی D-۸</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">دبیرستان پسرانه دانشگاه بوعلی سینا</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">سامانه پاسخگوئی به شکایات وزارت علوم، تحقیقات و فناوری</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">دانشگاه ها و موسسات آموزش عالی</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">کانون صنفی استادان</li>
           <li className="hover:text-[#04368f] duration-200 transition-all hover:cursor-pointer">شورای صنفی کارمندان</li>
        </ul>

        <ul className="my-3 px-3 text-white space-y-4 list-disc [&>li]:mr-6 [&>li]:text-xs">
           <h3 className="font-black text-[1.375rem] text-white mb-5">ارتباط با ما</h3>
           <div className="grid grid-cols-2 auto-cols-auto gap-4">
                <li className='text-xs'>
                    <p>نشانی</p>
                    <p> دانشگاه بوعلی سینا</p>
                </li>

                <li className="w-min text-xs">
                    <p>کدپستی</p>
                    <p>۶۵۱۷۸-۳۸۶۹۵</p>
                </li>

                <li className="w-min text-xs">
                    <p>شماره تماس</p>
                    <p>31400000 - 081</p>
                </li>

                <li className="w-min text-xs">
                    <p>پست الکترونیک
                    </p>
                    <p>info[at]basu.ac.ir</p>
                </li>
        </div>
            <img src={mapImage} alt="map" className='rounded-xl h-auto hover:cursor-pointer w-[461px]' />
        </ul>

<div className='w-full h-px bg-white ml-4 mr-6 mt-6'></div>
<div className="mt-6 mb-3 text-center w-full text-[10px] text-white"> تمام حقوق مادی و معنوی این وبگاه متعلق به دانشگاه بوعلی سینا همدان است.پیاده سازی توسط سپهرافزار ایرانیان</div>
    </div>
  )
}

export default Footer