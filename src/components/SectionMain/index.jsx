import "./styles.scss";
import FormSearch from "../FormSearch";

const SectionMain = () => {
  return (
    <section className="s__main">
      <h1 className="title">Make your interior more minimalistic & modern</h1>
      <p className="description">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      <FormSearch />
    </section>
  );
};

export default SectionMain;
