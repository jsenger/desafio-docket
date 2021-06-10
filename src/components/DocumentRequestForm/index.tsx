import { useState } from 'react';
import { DocumentRequest } from '../../types';
import { RequestContainer } from './styles';

const DocumentRequestForm: React.FC = () => {
  const [documentRequest, setDocumentRequest] = useState<DocumentRequest>(
    {} as DocumentRequest
  );

  documentRequest.typeOfPerson = "Pessoa física";

  return (
    <RequestContainer>
      <header>
        <h2>Adicionar documentos ao pedido</h2>
      </header>
      <form>
        <div className="form-group">
          <label htmlFor="document-name">
            Nome do documento: <span>*</span>
          </label>
          <input
            type="text"
            id="document-name"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                documentName: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group select">
          <label htmlFor="type-of-person">
            Tipo de pessoa: <span>*</span>
          </label>
          <select
            id="type-of-person"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                typeOfPerson: e.target.value,
              })
            }
          >
            <option value="Pessoa física">Pessoa física</option>
            <option value="Pessoa jurídica">Pessoa jurídica</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cpf">
            CPF: <span>*</span>
          </label>
          <input
            type="text"
            id="cpf"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                cpf: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="full-name">
            Nome Completo: <span>*</span>
          </label>
          <input
            type="text"
            id="full-name"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                fullName: e.target.value,
              })
            }
          />
        </div>

        <h3>Dados do cartório</h3>

        <div className="form-group">
          <label htmlFor="cep">
            CEP: <span>*</span>
          </label>
          <input
            type="text"
            id="cep"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                address: { ...documentRequest.address, cep: e.target.value },
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">
            Rua: <span>*</span>
          </label>
          <input
            type="text"
            id="street"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                address: { ...documentRequest.address, street: e.target.value },
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">
            Número: <span>*</span>
          </label>
          <input
            type="text"
            id="number"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                address: {
                  ...documentRequest.address,
                  number: Number(e.target.value),
                },
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">
            Cidade: <span>*</span>
          </label>
          <input
            type="text"
            id="city"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                address: { ...documentRequest.address, city: e.target.value },
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">
            UF: <span>*</span>
          </label>
          <input
            type="text"
            id="state"
            placeholder="Digite aqui"
            onChange={e =>
              setDocumentRequest({
                ...documentRequest,
                address: { ...documentRequest.address, state: e.target.value },
              })
            }
          />
        </div>

        <button type="submit">Criar documento</button>
      </form>
    </RequestContainer>
  );
};

export default DocumentRequestForm;
