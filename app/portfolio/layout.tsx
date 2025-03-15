import React from 'react'


interface Prop {
    pictures: React.ReactNode;
    heading: React.ReactNode; } 

function Portfoliolayout({ pictures, heading}:Prop) {
  return (
    <div>
        <div>
            {heading}
        </div>
        <div>
            {pictures}
        </div>
    </div>
  )
}

export default Portfoliolayout;