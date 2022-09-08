import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipePage() {
  const [recipe, setRecipe] = useState();
  const [image, setImage] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://preview.contentful.com/spaces/n7f3fgb05lp6/environments/master/entries/${id}?access_token=8foAHjJd3QryedFIqT5HEywIS_UYmkFZ7gaqRsUA-GU`
      )
      .then((response) => {
        setRecipe(response.data.fields);
        axios
      .get(
        `https://preview.contentful.com/spaces/n7f3fgb05lp6/environments/master/assets/${response.data.fields.featuredImage.sys.id}?access_token=8foAHjJd3QryedFIqT5HEywIS_UYmkFZ7gaqRsUA-GU`
      )
      .then((response) => {
        setImage(response.data.fields);
      })
      .catch((err) => {
        console.log(err);
      });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="recipe-style">
      {recipe && image && (
        <>
          <h1>{recipe.recipeName}</h1>
          <p className="date">{new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(new Date(recipe.datePublished))}</p>
            <img src={`https:${image.file?.url}`} alt={image.title} width="100%"/>
          <table>
          {recipe.recipeIngredients.content.map((content) => {
            if (content.nodeType === "table") {
              return content.content.map((row) => {
                return (
                  <tr>
                    {row.content.map((col) => {
                      return <td>{col.content[0].content[0].value}</td>;
                    })}
                  </tr>
                );
              });
            }
          })}
          </table>
          {recipe.recipeSteps.content.map((content) => {
            if (content.nodeType === "paragraph") {
              return <p>{content.content[0].value}</p>;
            }
          })}
        </>
      )}
    </div>
  );
}

export default RecipePage;
