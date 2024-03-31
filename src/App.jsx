import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionExperience from "./components/SectionExperince";
import SectionMain from "./components/SectionMain";
import SectionMaterials from "./components/SectionMaterials";
import SectionOurAdvantages from "./components/SectionOurAdvantages";
import SectoinProducts from "./components/SectionProducts";
import SectionTestimonials from "./components/SectionTestimonials";

function App() {
  return (
    <>
      <Header />
      <SectionMain />
      <SectionOurAdvantages />
      <SectoinProducts />
      <SectionExperience />
      <SectionMaterials />
      <SectionTestimonials />
      <Footer />
    </>
  );
}

export default App;
