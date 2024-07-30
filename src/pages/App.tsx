import { NavLink } from "react-router-dom";
import Header from "../components/Header";
export default function App() {
  return (
    <>
      <Header />
      <section className="w-11/12 h-[400px] bg-cyan-500 m-auto mt-10">
        <div className="w-64 h-full border">
        <NavLink to="/memorygame">Jugar</NavLink>
        </div>
      </section>
    </>
  )
}