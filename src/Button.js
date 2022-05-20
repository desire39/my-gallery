import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
        <h1 style={{textAlign:'center',color:'red', fontFamily:'Satisfy cursive',fontSize:'50px'}}>Short Video Clip</h1>
      <iframe
       width="560"
        height="315"
        src="https://www.youtube.com/embed/kXShLPXfWZA" 
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    />
     <iframe
       width="560"
        height="315"
        src="https://www.youtube.com/embed/PRkI15fIJ1w" 
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    />
         <iframe
       width="560"
        height="315"
        src="https://www.youtube.com/embed/a5ITNmnS680"
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    />
        <iframe
       width="560"
        height="315"
        src="https://www.youtube.com/embed/r_OPdu7bELc"
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    />

<iframe
       width="560"
        height="315"
        src="https://www.youtube.com/embed/lB6s28aMLEo"
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    />
    
   
  </div>
 
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;