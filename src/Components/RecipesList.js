import Recipe from "./Recipe";
import React from "react";

const RecipesList = ({recipes}) => {

  return (
    <div className="recipes-list">
        {recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.sys.id} />)}
    </div>
  );
}

export default RecipesList;