
function Card({name, edu, role, pic} :{name: string, edu: string, role: string, pic: string} ) {
    return (
      <div className="border p-6 shadow-sm rounded-md">
          <div className="flex">
              <div className="p-2 bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl transition-all duration-150 hover:-translate-y-2">
              <img src={pic} alt="ostad" className=" w-[92px] h-[125px] bg-white"/>
  
              </div>
              <div className="space-y-2 flex flex-col justify-end mb-4 mr-4">
                  <span className="text-xs text-gray-500">{role}</span>
                  <span className="text-lg text-black">{name}</span>
                  <span className="text-xs text-gray-500">{edu}</span>
              </div>
          </div>
      </div>
    )
  }
  
  export default Card