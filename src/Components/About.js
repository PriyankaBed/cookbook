import about_img from "../Images/about_img.jpg";

function About() {
    return (
        <div className="about-page">
            <h1>...Our Mission...</h1>
            <section className='aboutimg'>
                <img src={about_img} alt='about' key='about' />
                <p>
                    "Create chef-quality food without spending hours in the kitchen -- these are the recipes and straightforward tips you need to make good food fast. With unlimited access to recipes, why does anyone need another cookbook? Because not all recipes are born equal. Not all of them have
                    been created by a global superstar chef who has built his reputation on delivering the very best food -- whether that's the ultimate fine dining experience at his 3 Michelin-star Restaurant, Gordon Ramsay, or the perfectly crafted burger from his Las Vegas burger joint. Over the
                    course of his stellar career, Gordon has learned every trick in the trade to create dishes that taste fantastic and that can be produced without fail during even the busiest of days. Armed with that knowledge, he has written an inspired collection of recipes for the time-pressed
                    home cook who doesn't want to compromise on taste or flavor. The result is 100 tried and tested recipes that you'll find yourself using time and again. All the recipes take 30 minutes or less and use readily available ingredients that are transformed into something special with
                    Gordon's no-nonsense approach to delicious food."
                </p>
            </section>
        </div>
    );
}
export default About;