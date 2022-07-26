import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import HotelList from "./pages/hotelList/HotelList";
import SingleHotelPage from "./pages/singleHotel/SingleHotelPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<SingleHotelPage />} />
      </Routes>
    </BrowserRouter>
  );
}
