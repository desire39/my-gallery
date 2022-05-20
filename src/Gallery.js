import React, { useState } from 'react';
import './gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';





import img1 from './img/img13.jpg';
import img2 from './img/img6.jpg';
import img3 from './img/img12.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/image.jpg';
import img6 from './img/img5.png';
import img7 from './img/img7.jpg';
import img8 from './img/avatar-the-last-airbender-black-.png';
import img9 from './img/img11.jpg';
import img10 from './img/img.jpg';
import img11 from './img/img3.jpg';
import img12 from './img/avatar-the-last-airbender-black- - Copy.png';
import img13 from './img/img1.jpg';
import img14 from './img/img10.jpg';
import img15 from './img/image12.jpg';
import img16 from './img/img13.jpg';
import img17 from './img/img12.jpg';
import img18 from './img/img9.jpg';
import img19 from './img/black.jpg';
import img20 from './img/zuko.jpg';
import img21 from './img/sozin.webp';



const Gallery = () => {

    let data =[
        {
            id: 1,
            imgSrc: img1,
        },

        {
            id: 2,
            imgSrc: img2,
        },

        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },

        {
            id: 10,
            imgSrc: img10,
        },

        {
            id: 11,
            imgSrc: img11,
        },

        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 19,
            imgSrc: img19,
        },
        {
            id: 20,
            imgSrc: img20,
        },
        {
            id: 21,
            imgSrc: img21,
        },
        
    ]
    const [model, setModel] = useState(false);
    const[tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
       

    } 
    return(
        <>
       <div className='main-container'>
        <h1 style={{textAlign:'center'}}>AVATAR INTRO</h1>
       
        <h2>A century ago, the young Avatar Aang, afraid of his new responsibilities, fled from his home and was forced into the ocean by a storm. 
        He encased himself in suspended animation in an iceberg near the South Pole.
         Shortly after, Fire Lord Sozin, the ruler of the Fire Nation, launched a world war to expand his nation's empire. Knowing that the Avatar must be an Air Nomad, he carried out a genocide against the Air Nomads with the help of a comet enhancing firebenders' power.
          One hundred years later, Katara and Sokka, teenagers of the Southern Water Tribe, accidentally discover Aang and revive him.</h2>

         

        <h3 style={{textAlign:'center'}}>Gallery images</h3>
        
        </div>

   
     

  <div className={model? "model open" : "model"}>
           <img src={tempimgSrc}alt='chigago' />
           <FontAwesomeIcon icon={faClose} onClick={() => setModel(false)} />



          
 
            
     
          
         
          
           
 </div>
       
     <div className="gallery">
         {data.map((item, index)=>{
             return(
                 <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}> 
                     <img src={item.imgSrc}alt='chigago' style={{width: '100%'}} />

                 </div>

             )

         })}
         </div> 
       
         
          
        </>
          
        
        
        


        
    
    )

}



export default Gallery
