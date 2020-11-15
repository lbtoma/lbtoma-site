import React, {FunctionComponent, useState, useEffect} from "react";
import {Menubar} from "primereact/menubar";
import {MenuItem} from "primereact/components/menuitem/MenuItem";

export interface LayoutProps {
  children: React.ReactNode;
}

const FullScreenButton: FunctionComponent<{}> = () => {
  const [href, setHref] = useState<string>("/");

  useEffect(() => {
    setHref(window.location.pathname);
  }, []);

  return <a target="_parent" href={href}><i className="pi pi-window-maximize" /></a>;
}


export const ce229ListexIds: string[] = [
  "0",
  "1",
  "2a",
  "2b",
  "2c",
  "2d",
  "3",
  "4",
  "5"
];

export const ce229TeasureHuntIds: string[] = [
  "s3",
  "s5",
  "s6"
];

export const ce237ListextIds: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4"
];

// export const ce237TeasureHuntIds: string[] = [
// ];

const ce229Listexes = ce229ListexIds.map( (id: string): MenuItem => {
  return {label: `ListEx ${id}`, url: `/ce-229/listexes/${id}`}
});

const ce229TeasureHunts = ce229TeasureHuntIds.map( (id: string): MenuItem => {
  return {label: `Caça ao Tesouro ${id}`, url: `/ce-229/teasure-hunts/${id}`}
});

const ce237Listexes = ce237ListextIds.map( (id: string): MenuItem => {
  return {label: `ListEx ${id}`, url: `/ce-237/listexes/${id}`}
});

// const ce237TeasureHunts = ce237TeasureHuntIds.map( (id: string): MenuItem => {
//   return {label: `Caça ao Tesouro ${id}`, url: `/ce-237/teasure-hunts/${id}`}
// });


const Layout: FunctionComponent<LayoutProps> = (props) => {
  const {children} = props;

  return <div className="layout">
    <Menubar
      model={[
        {label: "Apresentação", icon: "pi pi-user", url: "/"},
        {label: "Curriculum", icon: "pi pi-id-card", url: "/curriculum"},
        {label: "Disciplinas", icon: "pi pi-bars", items: [
          {label: "CE-229: Teste de software", items: [
            {label: "ListExes", icon: "pi pi-file-o", items: ce229Listexes},
            {label: "Caças ao tesouro", icon: "pi pi-star-o", items: ce229TeasureHunts},
            {label: "Relatório final", icon: "pi pi-file-pdf", url: "/ce-229/final-report"}
          ]},
          {label: "CE-237: Tópicos avançados de teste de software", items: [
            {label: "ListExes", icon: "pi pi-file-o", items: ce237Listexes},
            {label: "Primeira prova", icon: "pi pi-file-pdf", url: "/ce-237/p1"}
            // {label: "Caças ao tesouro", icon: "pi pi-star-o"},
            // {label: "Artefatos", icon: "pi pi-file-pdf"},
            // {label: "Relatório final", icon: "pi pi-file-pdf"}
          ]}
        ]},
        {label: "Projetos", icon: "pi pi-star-o", items: [
          {label: "STEPES-BD", icon: "pi pi-circle-off", url: "/stepes-bd"},
          {label: "STEPES-TR", icon: "pi pi-circle-on", url: "/stepes-tr"},
        ]}
      ]}
      end={<FullScreenButton /> as any}
    />
    <div className="main-content">
      {children}
    </div>
  </div>
}

export default Layout;
