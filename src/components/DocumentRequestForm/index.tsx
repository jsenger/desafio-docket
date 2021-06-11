import { FormEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { Formik, Form, Field, ErrorMessage, FormikErrors } from 'formik';

import { DocumentRequest } from '../../types';
import { RequestContainer } from './styles';
import { api } from '../../services/api';

const DocumentRequestForm: React.FC = () => {
  return (
    <RequestContainer>
      <header>
        <h2>Adicionar documentos ao pedido</h2>
      </header>
      <Formik
        initialValues={{
          id: 0,
          documentName: '',
          typeOfPerson: 'Pessoa fisica',
          cpf: '',
          fullName: '',
          cep: '',
          street: '',
          number: '',
          city: '',
          state: '',
        }}
        validate={values => {
          const errors: FormikErrors<DocumentRequest> = {};

          if (!values.documentName) errors.documentName = 'Campo obrigatório';

          if (!values.typeOfPerson) errors.typeOfPerson = 'Campo obrigatório';

          if (!values.cpf) errors.cpf = 'Campo obrigatório';
          else if (
            values.typeOfPerson === 'Pessoa fisica' &&
            !/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(values.cpf)
          )
            errors.cpf = 'CPF inválido';
          else if (
            values.typeOfPerson === 'Pessoa juridica' &&
            !/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/.test(
              values.cpf
            )
          )
            errors.cpf = 'CNPJ inválido';

          if (!values.fullName) errors.fullName = 'Campo obrigatório';

          if (!values.cep) errors.cep = 'Campo obrigatório';
          else if (!/^[0-9]{5}-[0-9]{3}$/.test(values.cep))
            errors.cep = 'CEP inválido';

          if (!values.street) errors.street = 'Campo obrigatório';

          if (!values.number) errors.number = 'Campo obrigatório';

          if (!values.city) errors.city = 'Campo obrigatório';

          if (!values.state) errors.state = 'Campo obrigatório';

          return errors;
        }}
        onSubmit={(documentRequest, { setSubmitting, resetForm }) => {
          documentRequest.id = Math.floor(Math.random() * 10000);
          
          api
            .post('documentRequests', documentRequest)
            .then(() => {
              alert('Documento criado com sucesso');
              resetForm();
            })
            .catch(err => alert('Erro de conexão, tente novamente'))
            .finally(() => setSubmitting(false));
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="document-name">
                Nome do documento: <span>*</span>
              </label>
              <Field
                type="text"
                name="documentName"
                id="document-name"
                placeholder="Digite aqui"
                className={
                  errors.documentName && touched.documentName
                    ? 'not-valid'
                    : null
                }
              />
              {errors.documentName && touched.documentName ? (
                <small>{errors.documentName}</small>
              ) : null}
            </div>

            <div className="form-group select">
              <label htmlFor="type-of-person">
                Tipo de pessoa: <span>*</span>
              </label>
              <Field
                component="select"
                name="typeOfPerson"
                id="type-of-person"
                className={
                  errors.typeOfPerson && touched.typeOfPerson
                    ? 'not-valid'
                    : null
                }
              >
                <option value="Pessoa fisica">Pessoa física</option>
                <option value="Pessoa juridica">Pessoa jurídica</option>
              </Field>
              {errors.typeOfPerson && touched.typeOfPerson ? (
                <small>{errors.typeOfPerson}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="cpf">
                {values.typeOfPerson === 'Pessoa fisica' ? 'CPF' : 'CNPJ'}:
                <span>*</span>
              </label>
              <Field
                name="cpf"
                id="cpf"
                required
                render={({ field }: any) => (
                  <InputMask
                    {...field}
                    mask={
                      values.typeOfPerson === 'Pessoa fisica'
                        ? '999.999.999-99'
                        : '99.999.999/9999-99'
                    }
                    placeholder="Digite aqui"
                    type="text"
                    className={errors.cpf && touched.cpf ? 'not-valid' : null}
                  />
                )}
              />
              {errors.cpf && touched.cpf ? <small>{errors.cpf}</small> : null}
            </div>

            <div className="form-group">
              <label htmlFor="full-name">
                Nome Completo: <span>*</span>
              </label>
              <Field
                type="text"
                name="fullName"
                id="full-name"
                placeholder="Digite aqui"
                className={
                  errors.fullName && touched.fullName ? 'not-valid' : null
                }
              />
              {errors.fullName && touched.fullName ? (
                <small>{errors.fullName}</small>
              ) : null}
            </div>

            <h3>Dados do cartório</h3>

            <div className="form-group">
              <label htmlFor="cep">
                CEP: <span>*</span>
              </label>
              <Field
                name="cep"
                id="cep"
                required
                render={({ field }: any) => (
                  <InputMask
                    {...field}
                    mask="99999-999"
                    placeholder="Digite aqui"
                    type="text"
                    className={errors.cep && touched.cep ? 'not-valid' : null}
                  />
                )}
              />
              {errors.cep && touched.cep ? <small>{errors.cep}</small> : null}
            </div>

            <div className="form-group">
              <label htmlFor="street">
                Rua: <span>*</span>
              </label>
              <Field
                type="text"
                name="street"
                id="street"
                placeholder="Digite aqui"
                className={errors.street && touched.street ? 'not-valid' : null}
              />
              {errors.street && touched.street ? (
                <small>{errors.street}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="number">
                Número: <span>*</span>
              </label>
              <Field
                type="text"
                name="number"
                id="number"
                placeholder="Digite aqui"
                className={errors.number && touched.number ? 'not-valid' : null}
              />
              {errors.number && touched.number ? (
                <small>{errors.number}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="city">
                Cidade: <span>*</span>
              </label>
              <Field
                type="text"
                name="city"
                id="city"
                placeholder="Digite aqui"
                className={errors.city && touched.city ? 'not-valid' : null}
              />
              {errors.city && touched.city ? (
                <small>{errors.city}</small>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="state">
                UF: <span>*</span>
              </label>
              <Field
                type="text"
                name="state"
                id="state"
                placeholder="Digite aqui"
                className={errors.state && touched.state ? 'not-valid' : null}
              />
              {errors.state && touched.state ? (
                <small>{errors.state}</small>
              ) : null}
            </div>

            <button type="submit">Criar documento</button>
          </Form>
        )}
      </Formik>
    </RequestContainer>
  );
};

export default DocumentRequestForm;
