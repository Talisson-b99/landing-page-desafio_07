import "./styles.scss";

import imgExperience from "../../assets/experience.png";
import CtaAction from "../CTA";

const SectionExperience = () => {
  return (
    <section className="s__experiences">
      <div className="container">
        <div className="s__experiences__img">
          <img src={imgExperience} alt="" />
        </div>
        <div className="s__experiences__content">
          <h5 className="subtitle">experiences</h5>
          <h2>we provide you the best experience</h2>
          <p>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <div className="btn">
            <CtaAction title="More Info" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
