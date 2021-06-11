# Docket | Solicitação de documentos

## Índice

- [Arquitetura de pastas](#arquitetura-de-pastas)
- [Dependências](#dependências)
- [Executar](#executar)

## Arquitetura de pastas

```
.
├── public
│   ├── index.html
│   └── img
│
├── src
│    ├── App.tsx
│    ├── index.tsx
│    │
│    ├─── components
│    │    ├── Navbar
│    │    │   ├── index.tsx
│    │    │   └── styles.ts
│    │    ...
│    │
│    ├─── services
│    │    └── api.ts
│    │
│    ├─── styles
│    │    ├─── global.ts
│    │    └─── MainContainer.ts
│    │
│    └─── types
│         └─── index.ts
│
├── tsconfig.json
├── package.json
└── server.json
```

## Dependências

- [Axios](https://axios-http.com/)
- [styled-components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Formik](https://formik.org/)
- [react-input-mask](https://openbase.com/js/react-input-mask/documentation)
- [JSON Server](https://www.npmjs.com/package/json-server#getting-started)

## Executar

### Clonar o repositório:

```
git clone git@github.com:jsenger/desafio-docket.git
```

### Instalar dependências:

```
yarn
```

### Compilar para desenvolvimento:

```
yarn start
```

### Iniciar servidor:

```
yarn server
```

### Compilar e minificar para produção:

```
yarn build
```