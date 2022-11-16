import React from 'react'

const Wallet = ({modal}) => {
  return (
    <div className='wallet'>
        <div className="wallet-head">Connect wallet <img src="../assets/x.svg" alt="" onClick={modal} /></div>
        <div className="wallet-body">
            choose your preferred wallet:
            <div>
                <img src="../assets/image 66.svg" alt="" /><span>Metamask</span><img src="../assets/Group (4).svg" alt="" className='arrow' />
            </div>
            <div>
            <img src="../assets/image 69.svg" alt="" /><span>Walletconnect</span><img src="../assets/Group (4).svg" alt="" className='arrow' />
            </div>
        </div>
    </div>
  )
}

export default Wallet