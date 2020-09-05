import React, {FunctionComponent} from "react";


export interface PdfProps {
  path: string;
}

const Pdf: FunctionComponent<PdfProps> = (props) => {
  return <object className="curriculum-box" data={props.path} type="application/pdf">
    <embed src={props.path} type="application/pdf"/>
  </object>
}

export default Pdf;