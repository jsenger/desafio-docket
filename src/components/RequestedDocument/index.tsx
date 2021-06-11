import { DocumentRequest } from '../../types';
import { RequestsContainer } from './styles';

import { FiTrash } from 'react-icons/fi';
import { api } from '../../services/api';

interface RequestedDocumentsProps {
  requestedDocument: DocumentRequest;
  getRequestedDocuments: () => void;
}

const RequestedDocument = ({
  requestedDocument,
  getRequestedDocuments,
}: RequestedDocumentsProps) => {
  return (
    <RequestsContainer>
      <header>
        <h3>{requestedDocument.documentName}</h3>
        <button
          onClick={() => {
            api
              .delete(`documentRequests/${requestedDocument.id}`)
              .then(() => {
                alert('Solicitação excluída com sucesso.');
                getRequestedDocuments();
              })
              .catch(err => alert('Erro de conexão, tente novamente'));
          }}
        >
          <FiTrash />
        </button>
      </header>

      <div className="card-info">
        <div>
          <h4>{requestedDocument.typeOfPerson}</h4>
          <p>Nome: {requestedDocument.fullName}</p>
          <p>CPF: {requestedDocument.cpf}</p>
        </div>

        <div>
          <h4>Dados do cartório</h4>
          <p>
            {requestedDocument.typeOfPerson === 'Pessoa física'
              ? 'CPF'
              : 'CNPJ'}
            : {requestedDocument.cep}
          </p>
          <p>
            Rua: {requestedDocument.street}{' '}
            <span>N°: {requestedDocument.number}</span>
          </p>
          <p>
            Cidade: {requestedDocument.city}{' '}
            <span>UF: {requestedDocument.state}</span>
          </p>
        </div>
      </div>

      <p>
        <strong>Data de criação: </strong>
        {new Intl.DateTimeFormat('pt-BR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(new Date(requestedDocument.createdAt))}
      </p>
    </RequestsContainer>
  );
};

export default RequestedDocument;
