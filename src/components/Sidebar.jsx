import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = ({menu}) => {
  return (
    <ul className='sidebar'>
        <img src="../src/assets/x.svg" alt="" className='close' onClick={menu}/>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='./places'>Place to stay</Link></li>
    <li>NFTs</li>
    <li>Community</li>
</ul>
  )
}

export default Sidebar