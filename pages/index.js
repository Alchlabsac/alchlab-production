import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Auxiliar from "../components/hoc/Auxiliar/Auxiliar";
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";
import ServiceBox from "../components/UI/Boxes/ServiceBox/ServiceBox";
import { ServiceBoxItems } from "../components/UI/Boxes/ServiceBox/ServiceBoxItems";
import PageTitleBox from "../components/UI/Boxes/PageTitleBox/PageTitleBox";
import ContactBox from "../components/Contact/ContactBox/ContactBox";

const IndexPage = () => {
  return (
    <Auxiliar>
      <Header />
      <Container>
        <div>
          <PageTitleBox text="Qué hacemos"></PageTitleBox>
          <ServiceBox items={ServiceBoxItems} />
          <ContactBox title="Soporte" phone="+51 947157351" email="admin@alchlab.com"></ContactBox>
        </div>
      </Container>
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
