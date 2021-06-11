import Navbar from './components/Navbar';
import RequestInfoCard from './components/RequestInfoCard';
import DocumentRequestForm from './components/DocumentRequestForm';
import RequestedDocument from './components/RequestedDocument';
import Footer from './components/Footer';

import { GlobalStyle } from './styles/global';
import { MainContainer } from './styles/MainContainer';

function App() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <h1>Pedido #1</h1>
        <RequestInfoCard />
        <DocumentRequestForm />
        <section className="requestedDocuments">
          <h2>2 documentos solicitados</h2>
          <RequestedDocument />
          <RequestedDocument />
        </section>
      </MainContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
