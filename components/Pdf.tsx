import React, {FunctionComponent} from "react";


export interface PdfProps {
  path: string;
}

const Pdf: FunctionComponent<PdfProps> = (props) => {
  const path = props.path;

  return <object className="curriculum-box" data={path} type="application/pdf">
    <h1><a target="" href={path} download>Baixar PDF</a></h1>
    <embed src={path} type="application/pdf"/>
  </object>
}

export default Pdf;