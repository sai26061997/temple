import React ,{ useState, useEffect } from 'react'
import {styles} from "../stykes1"
import { logo } from '../assets'

import MainAnimation from './Animation1'

import photo1 from "../Swami_Photos/Sawmi_front_1.jpg"
import photo2 from "../Swami_Photos/Swami_murugar.jpg"
import photo3 from "../Swami_Photos/Swami_kumbam.jpg"
import photo4 from "../Swami_Photos/Swami_navagra1.jpg"
import photo5 from "../Swami_Photos/Swami_navagraham.jpg"
import photo6 from "../Swami_Photos/Swami_vinayagar.jpg"
import overall from "../Swami_Photos/Swami_al.jpg"








//import im1 from "https://c0.wallpaperflare.com/preview/274/162/449/mayan-temple-surrounded-by-buildings.jpg"


const Homepage=()=>{




    const images = [
      photo1,photo2,photo3,photo4,photo5,photo6,
        "https://c0.wallpaperflare.com/preview/274/162/449/mayan-temple-surrounded-by-buildings.jpg",
        "https://images.unsplash.com/photo-1538460120076-604b93a2ce88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "https://c0.wallpaperflare.com/preview/274/162/449/mayan-temple-surrounded-by-buildings.jpg",
        // Add more image paths
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const shuffleInterval = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000); // Adjust the interval as needed
    
        return () => {
          clearInterval(shuffleInterval);
        };
      }, []);
    
      const currentImage = images[currentIndex];



      const [currentIndex1, setCurrentIndex1] = useState(0);

  const items = [
    // ... Your list items ...

    {
        Num:200,
        Date:"june 14 9:30 PM",
        Poojai:"SATYANARAYANA PUJA",
        customer:"Srinivas"
        
        
        },
        {
            Num:200,
            Date:"june 14 9:30 PM",
            Poojai:"SATYANARAYANA PUJA",
            customer:"Srinivas"
            
            
            },{
                Num:200,
                Date:"june 14 9:30 PM",
                Poojai:"SATYANARAYANA PUJA",
                customer:"Srinivas"
                
                
                },
                {
                    Num:200,
                    Date:"june 14 9:30 PM",
                    Poojai:"SATYANARAYANA PUJA",
                    customer:"Srinivas"
                    
                    
                    },

                    {
                        Num:200,
                        Date:"june 14 9:30 PM",
                        Poojai:"SATYANARAYANA PUJA",
                        customer:"Srinivas"
                        
                        
                        },
                        {
                            Num:200,
                            Date:"june 14 9:30 PM",
                            Poojai:"SATYANARAYANA PUJA",
                            customer:"Srinivas"
                            
                            
                            }
  ];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex1(prevIndex => (prevIndex + 1) % items.length);
    }, 3000); // Adjust the interval as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
    return(
       
        <div  >
          <MainAnimation/>
             <div className="overlay1"></div>
             <div className="homepage">
        <div className="flex-col-reverse md:flex-row justify-between px-4 mx-auto md:px-8">
          <div > 

          <div>
          <div className="left-section">  

          
       

          
        
          
          <div className="photo-frame">
            <img src={currentImage} alt="Image 1" className="tilted-image" />
          </div>

          
        </div>
        </div>
          </div>

          
          
        
          
         
        </div>
        
      </div>
      </div>
      
    )

}

export default Homepage


