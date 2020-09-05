import React, {FunctionComponent} from "react";
import Layout from "../../components/Layout";
import Pdf from "../../components/Pdf";

const FinalReport: FunctionComponent<{}> = () => <Layout>
  <Pdf path="relatorio-final-lucas-barioni-toma.pdf" />
</Layout>;


export default FinalReport;

