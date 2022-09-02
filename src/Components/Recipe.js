import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Recipe({recipe}) {
    const [image, setImage] = useState();
  
    useEffect(() => {
      axios
        .get(
          `https://preview.contentful.com/spaces/n7f3fgb05lp6/environments/master/assets/${recipe.fields.featuredImage.sys.id}?access_token=8foAHjJd3QryedFIqT5HEywIS_UYmkFZ7gaqRsUA-GU`
        )
        .then((response) => {
          setImage(response.data.fields);
          console.log(response.data.fields);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <div className="recipe">
      {image && <>
        <h1>{recipe.fields.recipeName}</h1>
        <div className="image-description">
        <img src={`https:${image.file.url}`} alt={image.title}/>
        <h6>{recipe.fields.dataPublished}</h6>
        <p>{recipe.fields.recipeDescription}</p>
        <Link to={`/${recipe.sys.id}`} className="button">
          Read More
        </Link>
        </div>
        </>}
    </div>
  );
}

export default Recipe;
