import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout/Layout';
import Hero from './Pages/Home/Hero/Hero';
import Amenities from './Pages/Home/Amenities/Amenities';
import Beaches from './Pages/Home/Beaches/Beaches';
import Culture from './Pages/Home/Culture/Culture';
import Explore from './Pages/Home/Explore/Explore';
import Food from './Pages/Home/Food/Food';
import Weather from './Pages/Home/Weather/Weather';
import TravelBlog from './Pages/TravelBlog/TravelBlog';
import Home from './Pages/Home/Home';
import Upcoming from './Pages/Upcoming/Upcoming';
import Book from './Pages/Book/Book';
import Credits from './Pages/Credits/Credits';
import ExploreTaniti from './Pages/ExploreTaniti/ExploreTaniti';
import TanitianCulture from './Pages/TanitianCulture/TanitianCulture';
import TanitianFood from './Pages/TanitianFood/TanitianFood';
import TanitianBeaches from './Pages/TanitianBeaches/TanitianBeaches';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="#Hero" element={<Hero />} />
          <Route path="#Amenities" element={<Amenities />} />
          <Route path="#Beaches" element={<Beaches />} />
          <Route path="/TanitianBeaches" element={<TanitianBeaches />} >
            <Route path="/TanitianBeaches/*" element={<TanitianBeaches />} />
          </Route>
          <Route path="#Culture" element={<Culture />} />
          <Route path="/TanitianCulture" element={<TanitianCulture />} >
            <Route path="/TanitianCulture/*" element={<TanitianCulture />} />
          </Route>
          <Route path="#Explore" element={<Explore />} />
          <Route path="/ExploreTaniti" element={<ExploreTaniti />} >
            <Route path="/ExploreTaniti/*" element={<ExploreTaniti />} />
          </Route>
          <Route path="#Food" element={<Food />} />
          <Route path="/TanitianFood" element={<TanitianFood />} >
            <Route path="/TanitianFood/*" element={<TanitianFood />} />
          </Route>
          <Route path="#Weather" element={<Weather />} />
          
          <Route path="/TravelBlog" element={<TravelBlog />} >
            <Route path="/TravelBlog/*" element={<TravelBlog />} />
          </Route>
          
          <Route path="/Upcoming" element={<Upcoming />} >
            <Route path="/Upcoming/*" element={<Upcoming />} />
          </Route>
          
          <Route path="/Book" element={<Book />} >
            <Route path="/Book/*" element={<Book />} />
          </Route>
          <Route path="/Credits" element={<Credits />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
