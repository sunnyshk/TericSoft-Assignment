import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Featured from "./Components/Featured";
import Armoury from "./Components/Armoury";
import Aquatics from "./Components/Aquatics";
import Cycling from "./Components/Cycling";
import Equestrian from "./Components/Eqestrian";
import Extream from "./Components/Extream";
import Golf from "./Components/Golf";
import Gymnastics from "./Components/Gymnastics";
import LakeSea from "./Components/LakeSea";
import Olympics from "./Components/NavPages/Olympics";
import Bmx from "./Components/NavPages/Bmx";
import Swimming from "./Components/NavPages/Swimming";
import Shooting from "./Components/NavPages/Shooting";
import HorseRacing from "./Components/NavPages/HorseRacing";
import Hiking from "./Components/NavPages/Hiking";
import Sea from "./Components/NavPages/Sea";
import GolfNav from "./Components/NavPages/GolfNav";
import Gymnastics1 from "./Components/NavPages/Gymn";








import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Featured />} />
        <Route path="/armoury" element={<Armoury />} />
        <Route path="/aquatics" element={<Aquatics />} />
        <Route path="/cycling" element={<Cycling />} />
        <Route path="/equestrian" element={<Equestrian />} />
        <Route path="/extream" element={<Extream />} />
        <Route path="/golf" element={<Golf />} />
        <Route path="/gymnastics" element={<Gymnastics />} />
        <Route path="/lake_sea" element={<LakeSea />} />
        <Route path="/Olympics" element={<Olympics/>}/>
        <Route path="/BMX" element={<Bmx/>}/>
        <Route path="/swimming" element={<Swimming/>}/>
        <Route path="/Shooting" element={<Shooting/>}/>
        <Route path="/HorseRacing" element={<HorseRacing/>}/>
        <Route path="/Hiking" element={<Hiking/>}/>
        <Route path="/WaterSports" element={<Sea/>}/>
        <Route path="/Golf1" element={<GolfNav/>}/>
        <Route path="/Gymnastics1" element={<Gymnastics1/>}/>









      </Routes>
    </div>
  );
}

export default App;
