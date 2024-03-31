import "./styles.scss";
import search from "../../assets/icon-search.svg";

const FormSearch = () => {
  return (
    <form>
      <input type="text" placeholder="Search furniture" />
      <button>
        <img src={search} alt="" />
      </button>
    </form>
  );
};

export default FormSearch;
