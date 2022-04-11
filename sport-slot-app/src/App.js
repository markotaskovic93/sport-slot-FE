//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './User/Components/navbar/navbar'
import Login from './User/Containers/Login/Login'
import Register from './User/Containers/Register/Register'
import RegisterConfirmation from './User/Containers/RegisterConfirmation/RegisterConfirmation';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './User/Containers/Home/Home';
import Footer from './User/Components/footer/footer';
import BookingSlot from './User/Containers/BookingSlot/BookingSlot';
import MyGames from './User/Containers/MyGames/MyGames';
import SlotDetails from './User/Containers/SlotDetails/SlotDetails';

function App() {
  return (
      <BrowserRouter path="/user">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/confirmation" element={<RegisterConfirmation/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/booking" element={<BookingSlot/>}/>
          <Route path="/my_games" element={<MyGames/>}/>
          <Route path="/details" element={<SlotDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;