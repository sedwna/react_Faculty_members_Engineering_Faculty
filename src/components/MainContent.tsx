import { useState } from "react"
import Card from "./Card"
function MainContent() {
  const data = [
    {id: 1, role: "مربی", edu: "مهندسی کامپیوتر", pic:"https://intl.basu.ac.ir/web/eng/ce-profs?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Funiversity_people%2Fperson_image&p_p_cacheability=cacheLevelPage&_ir_sain_university_people_UniversityFacultyListPortlet_universityPersonImageId=1031389", name: "نرگس السادات بطحائیان"},
    {id: 2, role: "مربی", edu: "مهندسی کامپیوتر", pic:"https://intl.basu.ac.ir/web/eng/ce-profs?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Funiversity_people%2Fperson_image&p_p_cacheability=cacheLevelPage&_ir_sain_university_people_UniversityFacultyListPortlet_universityPersonImageId=1031389", name: "نرگس السادات بطحائیان"},
    {id: 3, role: "مربی", edu: "مهندسی کامپیوتر", pic:"https://intl.basu.ac.ir/web/eng/ce-profs?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Funiversity_people%2Fperson_image&p_p_cacheability=cacheLevelPage&_ir_sain_university_people_UniversityFacultyListPortlet_universityPersonImageId=1031389", name: "نرگس السادات بطحائیان"},
    {id: 4, role: "مربی", edu: "مهندسی کامپیوتر", pic:"https://intl.basu.ac.ir/web/eng/ce-profs?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Funiversity_people%2Fperson_image&p_p_cacheability=cacheLevelPage&_ir_sain_university_people_UniversityFacultyListPortlet_universityPersonImageId=1031389", name: "نرگس السادات بطحائیان"},
    {id: 5, role: "مربی", edu: "مهندسی کامپیوتر", pic:"https://intl.basu.ac.ir/web/eng/ce-profs?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Funiversity_people%2Fperson_image&p_p_cacheability=cacheLevelPage&_ir_sain_university_people_UniversityFacultyListPortlet_universityPersonImageId=1031389", name: "نرگس السادات بطحائیان"},
    {id: 6, role: "مربی", edu: "مهندسی کامپیوتر", pic:"https://intl.basu.ac.ir/web/eng/ce-profs?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Funiversity_people%2Fperson_image&p_p_cacheability=cacheLevelPage&_ir_sain_university_people_UniversityFacultyListPortlet_universityPersonImageId=1031389", name: "نرگس السادات بطحائیان"},
    {id: 7, role: "مربی", edu: "مهندسی کامپیوتر", pic:"https://intl.basu.ac.ir/web/eng/ce-profs?p_p_id=ir_sain_university_people_UniversityFacultyListPortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Funiversity_people%2Fperson_image&p_p_cacheability=cacheLevelPage&_ir_sain_university_people_UniversityFacultyListPortlet_universityPersonImageId=1031389", name: "نرگس السادات بطحائیان"},
  ]

  const [inputValue, setInputValue] = useState("")
console.log(inputValue);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {setInputValue(e.target.value)}

  return (
    <div>
      <div className="flex gap-20 mt-4 md:flex-nowrap flex-wrap">
        <div className="pr-8">
          <h3 className="text-[24px] font-bold">گروه آموزشی مهندسی کامپیوتر
          </h3>
          <ul className="list-disc pr-8 pt-1">
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5] text-sm">درباره گروه</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">مدیر گروه</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">اعضای هیأت علمی</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">کارشناسان گروه</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">زمینه‌های تحقیقاتی گروه</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">اخبار و اطلاعیه ها</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">افتخارات و جوایز</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">ارتباطات ملی و بین‌المللی</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">انجمن‌های علمی دانشجویی</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">دانشجویان دکتری</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">محققان پسادکتری</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">آزمایشگاه ها و کارگاه ها</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">سمینارها و پایان نامه ها</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">سمینارها و پایان نامه ها
            سرفصل دروس</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">دروس ارائه شده</li>
            <li className="hover:cursor-pointer transition-all duration-300 hover:text-[#007ce5]  text-sm">تقویم آموزشی</li>
          </ul>
        </div>

        <div className=" pr-8">
        <h3 className="text-[24px] font-bold">اعضای هیات‌علمی
        </h3>
<div className="flex items-center gap-4">
        <input value={inputValue} onChange={handleChangeInput} type="text" placeholder="جستوجو بر اساس نام یا نام خانوادگی" className="bg-white outline-none shadow-md w-72 px-4 py-2 rounded placeholder:text-xs" />
        <button className="flex items-start justify-center gap-1 p-2 bg-[#8b9bb6] hover:bg-[#59769b] text-white text-xs rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <span>جستوجو</span>

                            </button>

                            <p className="font-bold text-xs">مجموع نتایج: 7</p>
</div>

<div className="grid grid-cols-3 max-[1240px]:grid-cols-2 max-[840px]:grid-cols-1 gap-x-8 gap-y-12 my-8 ml-4">
                {data.map(item => <Card key={item.id} name={item.name} role={item.role} pic={item.pic} edu={item.edu}/>)}
            </div>

        </div>
      </div>
    </div>
  )
}

export default MainContent