/* eslint-disable react/prop-types */
import "./styles.scss";

const Tabs = ({ options }) => {
  console.log(options);
  return (
    <ul className="tabs__list">
      {options?.map((option) => (
        <li
          className={option.active && "active"}
          onClick={option.handleClick}
          key={option.label}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
