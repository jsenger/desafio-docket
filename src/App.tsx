import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import RequestInfoCard from './components/RequestInfoCard';
import DocumentRequestForm from './components/DocumentRequestForm';
import RequestedDocument from './components/RequestedDocument';
import Footer from './components/Footer';

import { GlobalStyle } from './styles/global';
import { MainContainer } from './styles/MainContainer';

import { api } from './services/api';
import { DocumentRequest } from './types';

function App() {
  const [requestedDocuments, setRequestedDocuments] = useState<
    DocumentRequest[]
  >([{} as DocumentRequest]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRequestedDocuments = () => {
    setIsLoading(true);

    api
      .get('documentRequests')
      .then(({ data }) => {
        setRequestedDocuments(data);
      })
      .catch(err => alert('Erro de conexão, tente novamente'))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getRequestedDocuments();
  }, []);

  return (
    <>
      <Navbar />
      <MainContainer>
        <h1>Pedido #1</h1>
        <RequestInfoCard />
        <DocumentRequestForm getRequestedDocuments={getRequestedDocuments} />
        {isLoading ? (
          'Carregando...'
        ) : (
          <section className="requestedDocuments">
            {requestedDocuments.length ? (
              <>
                <h2>{requestedDocuments.length} documentos solicitados</h2>
                {}
                {requestedDocuments.map(requestedDocument => (
                  <RequestedDocument
                    key={requestedDocument.id}
                    requestedDocument={requestedDocument}
                    getRequestedDocuments={getRequestedDocuments}
                  />
                ))}
              </>
            ) : (
              ''
            )}
          </section>
        )}
      </MainContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
