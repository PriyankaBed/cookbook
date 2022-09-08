import RecipesList from "./Components/RecipesList";
import Banner from "./Components/Banner";

function Home({recipes}) {
  return (
    <div className="home-style">
      <Banner />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default Home;