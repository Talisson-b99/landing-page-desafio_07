/* eslint-disable react/prop-types */

import CtaAction from "../../CTA";
import "./styles.scss";

const CardAdvantages = ({ data }) => {
  return (
    <div className="card-advantages">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <CtaAction title={"More info"} />
    </div>
  );
};

export default CardAdvantages;
