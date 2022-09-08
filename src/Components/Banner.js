import banner from "../Images/banner.jpg";

function Banner() {
  return (
    <section className="banner-style">
      <img src={banner} alt="banner" key="banner" />
      <h1>Welcome to our Cookbook</h1>
    </section>
  );
}

export default Banner;
