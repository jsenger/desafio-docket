import { RequestContainer } from './styles';

const DocumentRequestForm: React.FC = () => {
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
          <input type="text" id="document-name" placeholder="Digite aqui" />
        </div>

        <div className="form-group select">
          <label htmlFor="type-of-person">
            Tipo de pessoa: <span>*</span>
          </label>
          <select id="type-of-person">
            <option value="Pessoa física">Pessoa física</option>
            <option value="Pessoa jurídica">Pessoa jurídica</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cpf">
            CPF: <span>*</span>
          </label>
          <input type="text" id="cpf" placeholder="Digite aqui" />
        </div>

        <div className="form-group">
          <label htmlFor="full-name">
            Nome Completo: <span>*</span>
          </label>
          <input type="text" id="full-name" placeholder="Digite aqui" />
        </div>

        <h3>Dados do cartório</h3>

        <div className="form-group">
          <label htmlFor="cep">
            CEP: <span>*</span>
          </label>
          <input type="text" id="cep" placeholder="Digite aqui" />
        </div>

        <div className="form-group">
          <label htmlFor="street">
            Rua: <span>*</span>
          </label>
          <input type="text" id="street" placeholder="Digite aqui" />
        </div>

        <div className="form-group">
          <label htmlFor="number">
            Número: <span>*</span>
          </label>
          <input type="text" id="number" placeholder="Digite aqui" />
        </div>

        <div className="form-group">
          <label htmlFor="city">
            Cidade: <span>*</span>
          </label>
          <input type="text" id="city" placeholder="Digite aqui" />
        </div>

        <div className="form-group">
          <label htmlFor="state">
            UF: <span>*</span>
          </label>
          <input type="text" id="state" placeholder="Digite aqui" />
        </div>

        <button type="submit">Criar documento</button>
      </form>
    </RequestContainer>
  );
};

export default DocumentRequestForm;
