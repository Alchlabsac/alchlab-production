import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Auxiliar from "../components/hoc/Auxiliar/Auxiliar";


const IndexPage = () => {
  return (
    <Auxiliar>
      <Header />
      <body>

      </body>
      <Footer />
    </Auxiliar>
  );
};

export default IndexPage;

/*
import { productBarItems } from '../components/ProductBar/productBarItems';
import ProductBar from '../components/ProductBar/productBar';

<ProductBar items={productBarItems}></ProductBar> listo
*/