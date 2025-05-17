import "./App.css";
import "tailwindcss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

function App() {
  let[watchlist,setWatchlist]=useState([])
  let handleAddtoWatchlist=(movieObj)=>{
    let newWatchList=[...watchlist,movieObj]
    setWatchlist(newWatchList)
    console.log(newWatchList)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/> <Movies handleAddtoWatchList={handleAddtoWatchlist} /></>} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
