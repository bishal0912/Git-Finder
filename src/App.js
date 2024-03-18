import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  const [user,setUser] = useState("");
  const [userName,setUserName] = useState('');
  const [followers,setFollowers] = useState('');
  const [repo,setRepo] = useState([]);
  const fetchData = async(val)=>{
    try{
      let data = await fetch(`https://api.github.com/search/users?q=${val}`)
      data = await data.json();
      setUserName(data.items[0].login);
      let data1 = await fetch(`https://api.github.com/users/${user}/followers`);
      data1 = await data1.json();
      setFollowers(data1.length);
      let data2 = await fetch(`https://api.github.com/users/${user}/repos`)
      data2 = await data2.json();
      setRepo(data2);
    }catch(e){
      setUserName("No user found!!");
      setRepo([]);
      setFollowers(''); 
    }
} 
  return (
    <div className="App">
    <Nav setUser={setUser} user={user} fetchData={fetchData}/>
    <Home userName={userName} repo={repo} followers={followers}/>
    </div>
  );
} 
 
export default App;
