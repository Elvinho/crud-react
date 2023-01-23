import Layout from "../components/Layout";

export default function Home() {
  return (
    <div
      className={`flex h-screen justify-center items-center bg-gradient-to-t from-blue-500 to-purple-500`}
    >
      <Layout titulo="Cadastro Simples">
        <span>Conteudo</span>
      </Layout>
    </div>
  );
}
