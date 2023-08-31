import React from 'react'
import { recentlyPlayed } from '../utils/recentelyPlayed'
import SideBar from './SideBar'



const HistorySection = () => {
  return (
    <>
    <div className='flex'>
      <div><SideBar/></div>
    
    <div className="p-4">
    <h2 className="text-xl font-semibold mb-4">Recently Played</h2>
    <div className="grid grid-cols-2 gap-4">
      {recentlyPlayed.map((song, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow-md flex items-center"
        >
          <img
            src={song.albumCover} // Replace with the actual URL of the album cover
            alt={song.title}
            className="w-16 h-16 rounded-md mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{song.title}</h3>
            <p className="text-gray-600">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  </>
  )
}

export default HistorySection