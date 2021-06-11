import { RequestsContainer } from './styles';

const RequestedDocument: React.FC = () => {
  return (
    <RequestsContainer>
      <header>
        <h3>Certidão de nascimento</h3>
      </header>

      <div className="card-info">
        <div>
          <h4>Pessoa física</h4>
          <p>Nome: João da Silva Santos</p>
          <p>CPF: 125.154.156-45</p>
        </div>

        <div>
          <h4>Dados do cartório</h4>
          <p>CEP: 99999-999</p>
          <p>
            Rua: Eugênio de Medeiros <span>N°: 10</span>
          </p>
          <p>
            Cidade: São Paulo <span>UF: SP</span>
          </p>
        </div>
      </div>

      <p>
        <strong>Data de criação:</strong> 11 de maio de 2021
      </p>
    </RequestsContainer>
  );
};

export default RequestedDocument;
