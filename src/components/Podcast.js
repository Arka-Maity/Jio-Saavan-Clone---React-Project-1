import React from 'react'
import SideBar from './SideBar'
import { recentlyPlayed } from '../utils/recentelyPlayed'

const Podcast = () => {
  return (
    <div className='flex'>
    <div><SideBar/></div>
    
  
  <div className="p-4">
  <h2 className="text-xl font-semibold mb-4">Podcast</h2>
  <div className="flex flex-col">
    {recentlyPlayed.map((song, index) => (
      <div
        key={index}
        className="bg-white p-4 rounded shadow-md flex items-center m-2 "
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
  )
}

export default Podcast