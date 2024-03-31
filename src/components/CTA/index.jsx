/* eslint-disable react/prop-types */
import ArrowLeft from "../../assets/icon-arrow-left.svg";
import "./styles.scss";

const CtaAction = ({ title }) => {
  return (
    <a href="#" className="cta-action">
      {title} <img src={ArrowLeft} alt="" />
    </a>
  );
};

export default CtaAction;
