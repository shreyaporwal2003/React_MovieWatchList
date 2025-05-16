import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div
      className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative overflow-hidden'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}
    >
      <div className='absolute bottom-0 left-0 right-0 bg-gray-900/60 text-white text-center text-lg p-2'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
