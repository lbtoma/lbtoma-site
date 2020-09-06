import React, {FunctionComponent} from "react";
import Layout from "../components/Layout";

const Project: FunctionComponent<{}> = () => {
  return <Layout>
    <h1>Soluções Tecnológicas Específicas para Pacientes Especiais e Sistemas em Tempo Real</h1>
    <ul>
      <li>
        <i className="pi pi-info-circle" />
        <a target="_blank" href="https://sites.google.com/view/stepes-tr"> Página de índices </a>
      </li>
      <li>
        <i className="pi pi-github" />
        <a target="_blank" href="https://github.com/stepestr/ipbl2020">Repositório</a>
      </li>
    </ul>
  </Layout>
}

export default Project;
