import React, {FunctionComponent} from "react";
import {GetStaticPaths, GetStaticProps} from "next"
import Layout, {ce229TeasureHuntIds} from "../../../components/Layout";
import ReactMarkdown from "react-markdown/with-html";
import {getImageUriTransformer, readMarkdown} from "../../../utils/helpers";


export interface ListexProps {
  content: string;
  id: string;
}


const Listex: FunctionComponent<ListexProps> = props => {
  const {id, content} = props;

  return <Layout>
    <ReactMarkdown
      source={content}
      escapeHtml={false}
      transformImageUri={getImageUriTransformer(`/ce-229/teasure-hunt-${id}`)}
    />
  </Layout>
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {paths: ce229TeasureHuntIds.map(id => ({params: {id}})), fallback: false};
}

export const getStaticProps: GetStaticProps<ListexProps> = async ({params}) => {
  const id = params?.id;
  
  const content = id ? readMarkdown(`public/ce-229/teasure-hunt-${id}/report.md`) : "";

  return {props: {content, id: id as string}};
}

export default Listex;

