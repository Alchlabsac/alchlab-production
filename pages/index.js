import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Auxiliar from "../components/hoc/Auxiliar/Auxiliar";

const IndexPage = () => {
  return (
    <Auxiliar>
      <Header />
      <body style={{ height: "80%" }}>content</body>
      <Footer />
    </Auxiliar>
  );
};

export default IndexPage;
