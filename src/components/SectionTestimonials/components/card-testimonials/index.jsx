import avatar from "../../../../assets/avatar.svg";
import Stars from "../../../Stars";
import "./styles.scss";

const CardTestimonials = () => {
  return (
    <div className="card__container">
      <div className="card__content">
        <img src={avatar} alt="" />
        <h3>talisson b</h3>
        <h5>talisson b</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, eveniet.
        </p>
        <div className="stars">
          <Stars count={5} />
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
