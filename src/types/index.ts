interface Address {
  cep: string;
  street: string;
  number: number;
  city: string;
  state: string;
}

export interface DocumentRequest {
  documentName: string;
  typeOfPerson: string;
  cpf: string;
  fullName: string;
  address: Address;
}