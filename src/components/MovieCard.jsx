import React from 'react'

function MovieCard({movieObj, poster_path, name, handleAddtoWatchList, handleRemoveFromWatchlist}) {
  return (
    <div
      className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative overflow-hidden flex  flex-col'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}
    >
   <div onClick={()=>(handleAddtoWatchList(movieObj))} className='absolute top-2 right-2 h-10 w-10 bg-gray-900/60 bg-opacity-80 text-black flex justify-center items-center rounded-lg shadow-md text-xl'>
        &#128525;
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-gray-900/60 text-white text-center text-lg p-2'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
