import React from 'react'

const  Data = [
  {
    img:'../src/assets/Frame 151 (4).png',
  },
  {
    img:'../src/assets/Frame 151 (5).png',
  },
  {
    img:'../src/assets/Frame 151 (6).png',
  },
  {
    img:'../src/assets/Frame 151 (7).png',
  },
  {
    img:'../src/assets/Frame 151.png',
  },
  {
    img:'../src/assets/Frame 151 (1).png',
  },
  {
    img:'../src/assets/Frame 151 (2).png',
  },
  {
    img:'../src/assets/Frame 151 (3).png',
  },
 
]
const Card = () => {
  return (
    <><div className="cards-toptext">Inspiration for your next adventure</div>
    <div className='cards' >
      {Data.map(({img}, index) =>{
        return(
          <div className='card-cont' key={index}>
              <img src={img} alt="img" />
              <div className="card-textone"><span>Desert king</span><span className='mbt'>1MBT per night</span></div>
              <div className="card-texttwo"><span>2345km away</span><span className='available'>available for 2weeks stay</span></div>
                  <img src="../src/assets/Frame 59528.svg" alt="" className='stars' />
          </div>
            )
          }
          )
      }
  </div>
  </>
  )
}

export default Card