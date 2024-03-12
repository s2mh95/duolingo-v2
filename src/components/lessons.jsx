import { Routes, Route } from "react-router-dom"
import LeftSideBar from './leftsidbar';
import Course from './course';
import LeaderBoard from "./leaderboard";
import Quests from "./quests";
import Shop from "./shop";
import Profile from "./profile";

const Lessons = ()=>{
    return(
        <>
            <div className="flex flex-row font-custom bg-zinc-900  text-white">
                <LeftSideBar/>
                <Routes>
                    <Route path="/" element={<Course/>}/>
                    <Route path="/leaderboard" element={<LeaderBoard/>}/>
                    <Route path="/quest" element={<Quests/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </>
    )
    
}

export default Lessons;