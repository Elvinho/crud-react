import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
export default function Home() {
  const clientes = [
    new Cliente("Ana", 31, "1"),
    new Cliente("Joao", 12, "2"),
    new Cliente("Carlos", 22, "3"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }
  return (
    <div
      className={`flex h-screen justify-center items-center bg-gradient-to-t from-blue-500 to-purple-500`}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
