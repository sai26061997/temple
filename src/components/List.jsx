import React,{ useState, useEffect }  from 'react'

function List() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const items =[
      {
          Num: 1,
          Poojai: "THAI PONGAL (MAGAR SANGARANTHi",
          Day: "Sunday",
          Date: "15/01/23"
      },
      {
          Num: 2,
          Poojai: " THAI POOSAM",
          Day: "SATURDAY",
          Date: "04-02-23"
      },
      {
          Num: 3,
          Poojai: " MAHA SIVARATHRi",
          Day: "SATURDAY",
          Date: "18-02-23"
      },
      {
          Num: 4,
          Poojai: " MASi MAHAM",
         Day: "MONDAY",
          Date: "06-03-23"
      },
      {
          Num: 5,
          Poojai: " TELUNGU NEW YEAR",
          Day: "WEDNESDAY",
          Date: "22-03-23"
      },
      {
          Num: 6,
          Poojai: "SRI RAMA NAVAMI",
          Day: "THURSDAY",
          Date: "30-03-23"
      },
      {
          Num: 7,
          Poojai: "PANGuni utharam",
          Day: "TUESDAY",
          Date: "04- 04 - 23"
      },
      {
          Num: 8,
          Poojai: "GOOD FRIDAY",
          Day: "FRIDAY",
          Date: "07 - 04-25"
      },
      {
          Num: 9,
          Poojai: "TAMIL NEW YEAR CHITHIRAI (SOPAKIRUTHE",
          Day: "FRIDAY",
          Date: "14-04-23"
      },
      {
          Num: 10,
          Poojai: "ADSHAYA THIRUTHIYAI",
          Day: "SATURDAY",
          Date: "22-04-23"
      },
      {
          Num: 11,
          Poojai: "MEENATCHi KALYANAM",
          Day: "TuESDAy",
          Date: "02-05-23"
      },
      {
          Num: 12,
          Poojai: "CHITHRA POORANAI VIRATHAM",
          Day: "FRIDAy",
          Date: "05-05-23"
      },
      {
          Num: 13,
          Poojai: "VAIKASi VISAHAM",
          Day: "FRIDAY",
          Date: "02-06-23"
      },
      {
          Num: 14,
          Poojai: "ANI UTHARAM",
          Day: "MONDAY",
          Date: "26-06-23"
      },
      {
          Num: 15,
          Poojai: "ADI POORAM",
          Day: "FRIDAY",
          Date: "21-07-23"
      },
      {
          Num: 16,
          Poojai: "ADI AMAVASAI",
          Day: "TUESDAY",
          Date: "15-08-23"
      },
      {
          Num: 17,
          Poojai: "VARALUXMY VIRATHAM",
          Day: "FRIDAY",
          Date: "25-08-25"
      },
      {
          Num: 18,
          Poojai: "AVANi ONAM",
          Day: "TUESDAY",
          Date: "29-08-23"
      }, 
      {
          Num: 19,
          Poojai: "SRIKRISHNA JEYANTHi",
          Day: "WEDNESDAY",
          Date: "06-09-23"
      }
  ]
    
  return (
    <div className=' mx-48 space-y-4 bg-url("http://wycombemeenatchiammantemple.co.uk/images/home-banner-2.jpg")  '  style={{ maxHeight: '400px', overflowY: 'auto' }} >    
          

    {items.map((item, index) => (
       <div 
       key={index}
       className={`  bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5  rounded-3xl  border-double border-4 border-sky-500  ${index === currentIndex ? 'active' : ''}`}>
      <div
       
        className={`flex p-3 border-l-8 border-yellow-600 scrolling-list`}
      >
        
        <div className="space-y-1 border-r-2 pr-3">
      <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500"> Poojai #</span> {item.Num}</div>
         
         <div className="text-sm leading-5 font-semibold">{item.Date}</div>
      </div>
      <div className="flex-1">
         <div className="ml-3 space-y-1 border-r-2 pr-3">
            <div className="text-base leading-6 font-normal">{item.Poojai}</div>
            <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Customer</span> {item.Poojai}</div>
            
         </div>
      </div>
      <div className="border-r-2 pr-3">
         <div >
            <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
               <div className="uppercase text-xs leading-4 font-medium">Date</div>
               <div className="text-center text-sm leading-4 font-semibold text-gray-800">{item.Date}</div>
            </div>
         </div>
      </div>
      <div>
         <div className="ml-3 my-5 bg-yellow-600 p-1 w-20">
            <div className="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">Booked</div>
         </div>
      </div>
      

      </div>
       </div>
    ))}





<button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full mt-4 shadow-md transform hover:scale-105 transition duration-300 animate-bounce">
     Book Now
    </button>









    </div>
  )
}

export default List