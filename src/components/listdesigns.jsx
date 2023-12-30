import React , { useState } from 'react';
import "./listsss.css";

const TeamComponent = () => {
    const items =[
        {
            Num: 1,
            Poojai: "THAI PONGAL (MAGAR SANGARANTHI",
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

    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="content1">
      <ul className="team">
        {items.map((item, index) => (
          <li
            key={index}
            className={`member co-funder ${index === currentIndex ? 'active' : ''}`}
          >
            {/* ... (same as your code) ... */}

		 <div className="thumb">
            <img src="https://w0.peakpx.com/wallpaper/32/622/HD-wallpaper-meenakshi-amman-god-madurai-meenakshi-god-lord-madurai-meenakshi.jpg" alt="Chris Coyier" />
          </div>
          <div className="description">
            <h3>{item.Poojai}</h3>
           <h3>{item.Day}</h3>
            
            
            <p>
            Experience the divine blessings of London Meenakshi Amman through sacred poojas, fostering spiritual connection, seeking blessings, and expressing gratitude for a meaningful and enriching spiritual journey.
              <br />
              <h3>@{item.Date}</h3>
              <a href="https://codepen.io/chriscoyier/">Book Here</a>
              
            </p>
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamComponent;
