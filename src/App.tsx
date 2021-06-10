import Navbar from './components/Navbar';
import RequestInfoCard from './components/RequestInfoCard';
import DocumentRequestForm from './components/DocumentRequestForm';
import RequestedDocuments from './components/RequestedDocuments';
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
        <RequestedDocuments />
      </MainContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
