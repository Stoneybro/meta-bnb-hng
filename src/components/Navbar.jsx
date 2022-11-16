import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({modal,menu}) => {
  return (
    <nav>
 <img src="../src/assets/Group (1).svg" alt="" />
        <ul className='nav-items'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='./places'>Place to stay</Link></li>
            <li>NFTs</li>
            <li>Community</li>
        </ul>
        <button className='nav-button' onClick={modal}>Connect wallet</button>
        <div className="menu" onClick={menu}><img src="../src/assets/bars-solid (1).svg" alt="" /></div>
    </nav>
  )
}

export default Navbar