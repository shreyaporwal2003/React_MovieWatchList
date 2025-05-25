import React, { useState } from "react";

function Watchlist({watchlist, setWatchlist, handleRemoveFromWatchlist }) {
  const[search, setSearch]=useState('')
  let handleSearch=(e)=>{
    setSearch(e.target.value)

  }
  let sortIncreasing=()=>{
    let sortIncreasing= watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...sortIncreasing])
  }
  let sortDecreasing=()=>{
    let sortDecreasing= watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...sortDecreasing])


  }

  return (
    <>

    <div className="flex justify-center flex-wrap m-4">
    {/* <div className=" flex justify-center items-center h-[2rem] bg-blue-400 rounded-xl text-white font-bold mx-4">Action</div>
    <div className=" flex justify-center   items-center h-[2rem] bg-gray-400 rounded-xl text-white font-bold">Action</div>
     */}
    
    </div>
      <div className="flex justify-center my-4">
        <input
          type="text" onChange={handleSearch} value={search}
          placeholder="Search Movie"
          className="h-[3rem] w-[18rem] bg-amber-100 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-lg  border border-gray-200 m-8">
        <table className="w-full text-center ">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex justify-center">
              <div onClick={sortIncreasing} className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
              <div className="p-2" > <th>Ratings</th></div>
              <div onClick={sortDecreasing} className="p-2"><i class="fa-solid fa-arrow-down"></i></div>
              </div>
             
              <th>Popularity</th>
              {/* <th>Genre</th> */}
            </tr>
          </thead>
          <tbody>
          {watchlist.filter((movieObj)=>{
           return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())

          }).map((movieObj)=>{
            return <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem] "
                  src={ `https://image.tmdb.org/t/p/original${movieObj.poster_path}`
                  }
                />
                <div className="mx-10">{movieObj.title}</div>
              </td>

              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              {/* <td>Action</td> */}
              <td className="text-red-800" onClick={()=>handleRemoveFromWatchlist(movieObj)}>Delete</td>
            </tr>

          })}
            
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
