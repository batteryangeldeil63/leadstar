import Cabecalho from "./components/Cabecalho";
import Chamada from "./components/Chamada";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import GlobalStyle from "./components/GlobalStyle";
import LayoutSite from "./components/LayoutSite";
import Livro from "./components/Livro";
import TextoChamada from "./components/TextoChamada";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <LayoutSite>
        <Cabecalho namebook='Como fazer amigos e Influenciar pessoas'/>
        <Container>
          <Livro />
          <Chamada>
            <TextoChamada/>
            <Formulario/>
          </Chamada>
        </Container>
        <Footer />
      </LayoutSite>
    </div>
  );
}

export default App;
