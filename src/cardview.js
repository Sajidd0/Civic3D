import { Carousel } from 'react-carousel-minimal';
import React from 'react';
function card() {
 const data = [
    {
      image: "https://www.hdcarwallpapers.com/walls/honda_civic_sedan_2019_4k-HD.jpg",
      
    },
    {
      image: "https://www.hdcarwallpapers.com/walls/honda_civic_sedan_2019_4k_2-HD.jpg",
    
    },
    {
      image: "https://www.hdcarwallpapers.com/walls/honda_civic_hatchback_2019_4k_2-HD.jpg",
      
    },
    {
      image: "https://www.hdcarwallpapers.com/walls/honda_civic_hatchback_2019_4k-HD.jpg",
     
    },
    {
      image: "https://wallpapercave.com/wp/wp4070370.jpg",
    
    },
    {
      image: "https://www.hdcarwallpapers.com/walls/2017_honda_civic_type_r_4k_2-HD.jpg",
     
    },
    {
      image: "https://www.hdcarwallpapers.com/walls/honda_civic_type_r_2017_4k-HD.jpg",
      
    },
    {
      image: "https://www.hdcarwallpapers.com/walls/2017_honda_civic_touring_sedan-HD.jpg",
   
    },
    {
      image: "https://www.hdcarwallpapers.com/walls/2017_honda_civic_type_r_6-HD.jpg",
     
    }
  ];


  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2 style={{color:"gray"}}>A Model of Brilliance</h2>
        <p style={{color:"gray"}}>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1900px"
            height="700px"
   
            radius="10px"
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="200px"
            style={{
              textAlign: "center",
              maxWidth: "1900px",
              maxHeight: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default card;
