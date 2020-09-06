import React, {FunctionComponent} from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Project: FunctionComponent<{}> = () => {
  return <Layout>
    <h1>Projeto S​oluções ​T​ecnológicas ​E​specíficas para ​P​acientes ​E​speciais e ​​S​istemas em ​B​anco de D​ados -​​ B​ig ​D​ata</h1>

    <ul>
      <li>
        <i className="pi pi-info-circle" />
        <a target="_blank" href="https://sites.google.com/view/stepes-bd"> Página de índices </a>
      </li>
      <li>
        <i className="pi pi-github" />
        <a target="_blank" href="https://github.com/stepesbd/ipbl2020"> Repositório</a>
      </li>
      <li>
        <i className="pi pi-file-pdf" />
        <Link href="/ce-229/final-report">Relatório Final</Link>
      </li>
    </ul>
  </Layout>
}

export default Project;
