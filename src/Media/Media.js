import React from 'react'
import './Media.css'
function Media() {

  return (
    <div className='Media_contain'>
    <div className='Media_content'>
    <div>
      <h1 className='Media_title'>Media </h1>
      <div className='videos'>
      <video controls className='vids'>
      <source src="https://firebasestorage.googleapis.com/v0/b/profile-78495.appspot.com/o/AXE_VERSION_1.mp4?alt=media&token=66e0aea0-0f94-43aa-8a66-fb7c8f13ffbf" />
      </video>
      <video controls className='vids'>
      <source src="https://firebasestorage.googleapis.com/v0/b/profile-78495.appspot.com/o/NEW%20BALANCE%20vid4.mov?alt=media&token=33eaaf96-38b0-463f-9829-9d64a01572c5" />
      </video>
      <video controls className='vids'>
      <source src="https://firebasestorage.googleapis.com/v0/b/profile-78495.appspot.com/o/Time%20is%20Always%20Now%2002%20(low%20res%20with%20mix).mp4?alt=media&token=bfb94293-23b9-4a6d-b949-b1ae6d0ab540" controls/>
      </video>
      <video controls className='vids'>
      <source src="https://firebasestorage.googleapis.com/v0/b/profile-78495.appspot.com/o/tumi%20reel%202021%20480p.m4v?alt=media&token=4377b9b3-4dd7-4422-a8db-ef11a81cc5f4" controls/>
      </video>
      </div>

    </div>
    <dvi>

    </dvi>
    </div>

    </div>
  )
}

export default Media