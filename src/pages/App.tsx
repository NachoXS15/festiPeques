import Header from "../components/Header";
import memoryIndex from '../assets/init/memoryIndex.webp'
import qaIndex from '../assets/init/qaIndex.webp'
import { NavLink } from "react-router-dom";
export default function App() {
  return (
    <>
      <Header />
      <div className="w-4/5 h-[600px] m-auto mt-12 flex flex-wrap justify-center items-center gap-16">
        <NavLink to="/memorygame-rules" className="active:scale-105 transition w-[35%] relative rounded-md bg-cover" style={{ fontFamily: "gambado-sans", }}>
          <img src={memoryIndex} alt="" />
        </NavLink>
        <NavLink to="/qagame-rules" className="active:scale-105 transition w-[35%] relative rounded-md bg-cover" style={{ fontFamily: "gambado-sans", }}>
          <img src={qaIndex} alt="" />
        </NavLink >
        {/* <NavLink to="puzzlegame-rules" className="active:scale-105 transition w-[35%] relative rounded-md bg-cover" style={{ fontFamily: "gambado-sans", }}>
          <img src={puzzleIndex} alt="" />
        </NavLink> */}
      </div>
    </>
  )
}
