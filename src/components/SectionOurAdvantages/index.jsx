import CardAdvantages from "./components/card-advantages";
import "./styles.scss";

const data = [
  {
    id: 1,
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
  {
    id: 2,
    title: "Affordable Price",
    description:
      "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
  },
  {
    id: 3,
    title: "Many Choices",
    description:
      "We provide many unique work space choices so that you can choose the workspace to your liking.",
  },
];

const SectionOurAdvantages = () => {
  return (
    <section className="s-ourAdvantages">
      <div className="container">
        <div className="title">
          <h2>Why Choosing Us</h2>
        </div>
        <div className="advantages">
          {data.map((item) => (
            <CardAdvantages key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOurAdvantages;
