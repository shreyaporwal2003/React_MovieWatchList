import React from "react";

function Watchlist() {
  return (
    <>

    <div className="flex justify-center flex-wrap m-4">
    <div className=" flex justify-center items-center h-[2rem] bg-blue-400 rounded-xl text-white font-bold mx-4">Action</div>
    <div className=" flex justify-center   items-center h-[2rem] bg-gray-400 rounded-xl text-white font-bold">Action</div>
    
    
    </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movie"
          className="h-[3rem] w-[18rem] bg-amber-100 outline-none px-4"
        />
      </div>
      <div className="overflow-hidden rounded-lg  border border-gray-200 m-8">
        <table className="w-full text-center ">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem] "
                  src={
                    "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg"
                  }
                />
                <div className="mx-10"> Alone</div>
              </td>

              <td>8.5</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-800">Delete</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
