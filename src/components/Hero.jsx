    import React from 'react'
    
    const Hero = () => {
      return (
        <div className='hero'>
            <div className="hero-text-section">
                <div className="hero-maintext">
                <span className="hero-textblack">Rent a </span><span className="hero-textpurple">Place </span>
                <span className="hero-textblack">away from </span><span className="hero-textpurple">Home </span>
                <span className="hero-textblack">in the </span><span className="hero-textpurple">Metaverse </span>
                </div>
                <div className="hero-smalltext">
                we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </div>
                <div className="hero-search">
                <input type="text" placeholder='Search for location'/>
                <button>search</button>
                </div>
            </div>
            <div className="hero-image">
            <img src="../src/assets/Group 4028.png" alt="4 pictures of NFTs" />
            </div>
        </div>
      )
    }
    
    export default Hero