import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  
  return (
   <div className="App">
    <Router>
    <Navbar/>

    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/adduser" element={<AddUser/>}/> {/*cai route nay minh dung de link voi ben fuc nav thi khi link luc bam vao add no se dua minh qua fuc AddUser la mot cai form moi minh co the thiet ke o day */}
      <Route exact path="/edituser/:id" element={<EditUser/>}/>
      <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
    </Routes>

    </Router>
   </div>
  )
}

export default App
