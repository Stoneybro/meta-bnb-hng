import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer-logo'> <img src="../src/assets/Group (2).svg" alt="" /> <div className="socials"><img src="../src/assets/facebook (2).svg" alt="" /><img src="../src/assets/twitter (2).svg" alt="" /><img src="../src/assets/instagram (4).svg" alt="" /></div> <div>&#169;  2022  Metabnb</div></div>
        <div><span>Community</span>
        <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
        </ul>
        </div>
        <div><span>Places</span>
        <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
        </ul>
        </div>
        <div><span>About us</span>
        <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer