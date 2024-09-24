import './hero.scss';
export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>HARVEY TYLER</h2>
          <h1>Web Developer and UI Designer</h1>
          <div className="buttons">
            <button>See The Laste</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <img className="imageContainer" src="/hero.png" alt="" />
    </div>
  );
};
