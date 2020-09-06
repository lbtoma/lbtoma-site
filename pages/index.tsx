import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <h1 className="welcome-text">Bem vindo à página de índices de Lucas Barioni Toma</h1>

    <p>
      Esta página tem como objetivo centralizar todo conteúdo produzido
      pelo aluno durante o ano de 2020 referente as disciplinas "CE-229: Teste de Software"
      e "CE-237: Tópicos avançados de teste de software".
    </p>

    <p>
      Para acessar as listExes, artefatos e relatórios das disciplinas CE-229 e CE-237,
      clique no botão disciplinas na barra de navegação.
    </p>

    <img className="profile-pic" src="https://avatars3.githubusercontent.com/u/22775978" />

    <p className="catchphrase">"Intelligence is the ability to avoid doing work, yet getting the work done." - Linus Torvalds</p>

    <a
      href="https://github.com/lbtoma/lbtoma-site"
      className="repo-link"
      target="_blank"  
    >
      <i className="pi pi-github" /> Repositório desta página
    </a>

  </Layout>
)

export default IndexPage
