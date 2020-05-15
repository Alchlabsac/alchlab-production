import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Auxiliar from "../components/hoc/Auxiliar/Auxiliar";
import Container from "../components/UI/Container/Container";
import IndexInfo from "../components/Layout/Index/IndexInfo/IndexInfo";
import IndexServices from "../components/Layout/Index/IndexServices/IndexServices";
import IndexCloud from "../components/Layout/Index/IndexCloud/IndexCloud";
import Contact from "../components/Contact/Contact";
import IndexHeading from "../components/Layout/Index/IndexHeading/IndexHeading";
import ProductBar from "../components/ProductBar/ProductBar"
import { productBarItems } from "../components/ProductBar/productBarItems"
import RespNavigation from "../components/Layout/RespNavigation/RespNavigation"
import Head from 'next/head';

const IndexPage = () => {
  return (
    <Auxiliar>
      <Head>
        <title>Alchlab 🧪</title>
      </Head>
      <Header />
      <RespNavigation></RespNavigation>
      <Container>
        <IndexHeading />
        <IndexInfo></IndexInfo>
        <IndexServices></IndexServices>
        <IndexCloud></IndexCloud>
        <ProductBar items={productBarItems} />
        <Contact />
      </Container>
      <Footer />
    </Auxiliar>
  );
};

export default IndexPage;
