import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./Components/About";
import { Routes, Route } from 'react-router-dom';
import RecipesList from './Components/RecipesList';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
        .get("https://preview.contentful.com/spaces/n7f3fgb05lp6/environments/master/entries?access_token=8foAHjJd3QryedFIqT5HEywIS_UYmkFZ7gaqRsUA-GU")
        .then((response) => {
            setRecipes(response.data.items);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);
  
return (
  <div className='App'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
      </Routes>
      <div>
          <RecipesList recipes={recipes} />
      </div>
  </div>
);
}
   
export default App;
