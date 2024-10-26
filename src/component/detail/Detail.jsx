import React from 'react'

function Detail() {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="User avatar" />
        <h2>Naman</h2>
        <p>Lorem, ipsum dolor sit amet consecte</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat setting</span>
            <img src="./arrowUp.png" alt="Arrow up" />
          </div>
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="Arrow up" />
          </div>
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="Arrow down" />
          </div>

          <div className="photos">
            {[...Array(5)].map((_, index) => (
              <div className="photoItem" key={index}>
                <div className="photoDetail">
                  <img src="https://th.bing.com/th/id/OIP.GvntOdvz80txbfbW4rz2kAHaEo?rs=1&pid=ImgDetMain" alt={`Shared photo ${index + 1}`} />
                  <span>photo_2204_2.png</span>
                </div>
                <img src="./download.png" alt="Download icon" className="icons" />
              </div>
            ))}
          </div>

          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Arrow up" />
          </div>

          <div>
            <button>Block User</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail