import React, {FunctionComponent} from "react";
import Pdf from "../components/Pdf";
import Layout from "../components/Layout";

const Curriculum: FunctionComponent<{}> = () => {
  return <Layout>
    <Pdf path="lucas-barioni-toma-cv.pdf" />
  </Layout>
}

export default Curriculum;
