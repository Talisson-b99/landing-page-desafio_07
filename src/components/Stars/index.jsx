/* eslint-disable react/prop-types */
import "./styles.scss";
import Star from "../../assets/star.svg";

const Stars = ({ count }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <div key={i}>
          <img src={Star} alt="" />
        </div>
      );
    }
    return stars;
  };
  return <div className="container__stars">{renderStars()}</div>;
};

export default Stars;
