import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import RecipePage from "./RecipePage";

function Recipe({ recipe }) {
  const [image, setImage] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://preview.contentful.com/spaces/n7f3fgb05lp6/environments/master/assets/${recipe.fields.featuredImage.sys.id}?access_token=8foAHjJd3QryedFIqT5HEywIS_UYmkFZ7gaqRsUA-GU`
      )
      .then((response) => {
        setImage(response.data.fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="recipe">
      {image && (
        <>
          <div className="image-description">
            <img src={`https:${image.file.url}`} alt={image.title} />
            <h1 className="recipe-title">{recipe.fields.recipeName}</h1>
            <p className="date">{new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(new Date(recipe.fields.datePublished))}</p>
            <p className="recipe-text">{image.description}</p>
            <button
              className="button" onClick={()=>{navigate(`/recipes/${recipe.sys.id}`)}}
            >
              Read More
            </button>
          </div>
        </>
      )}
      
    </div>
  );
}

export default Recipe;
