import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";


function Movies() {
  const[movies, setMovies]=useState([])
  const[pageNo, setPageNo]=useState(1)

  const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(1)
    }
    else{setPageNo(pageNo-1)}
  }
  const handleNext=()=>{
    setPageNo(pageNo+1)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3863991500937dff8d07a8c02ccd1dd3&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div className="p-5">
      <div className="text-2xl  m-5 font-bold text-center">
        {" "}
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
      {movies.map((movieObj)=>{
        return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
      })}
       
       
              
      </div>

      <Pagination pageNo={pageNo} handeleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  
  );
}

export default Movies;
