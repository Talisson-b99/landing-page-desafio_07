import "./styles.scss";

import imgMaterial01 from "../../assets/material-01.png";
import imgMaterial02 from "../../assets/material-02.png";
import imgMaterial03 from "../../assets/material-03.png";
import CtaAction from "../CTA";

const SectionMaterials = () => {
  return (
    <section className="s__materials">
      <div className="container">
        <div className="s__materials__content">
          <h5 className="subtitle">Materials</h5>
          <h2>Very serious materials for making furniture</h2>
          <p>
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <div className="btn">
            <CtaAction title="More Info" />
          </div>
        </div>
        <div className="s__materials__img">
          <div>
            <img src={imgMaterial03} alt="" />
            <img src={imgMaterial02} alt="" />
          </div>
          <img src={imgMaterial01} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SectionMaterials;
