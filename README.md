# Memory Board

## Visão Geral
Essa é uma aplicação frontend que reimagina o conceito tradicional de *"Memory Board"* em um ambiente digital. Originalmente, um Memory Board é uma ferramenta física usada para organizar e exibir memórias visuais, como fotos, cartões postais e lembranças. Ele serve como um lembrete tangível de momentos especiais, experiências significativas ou mesmo personalidades importantes na vida de alguém.

Seu objetivo principal é fornecer aos usuários uma plataforma digital onde eles possam:

- **Capturar Memórias:** Os usuários podem realizar o upload de suas memórias, ou seja, arquivos de imagens.

- **Organizá-las:** A aplicação permite que os usuários organizem suas imagens de forma personalizada, semelhante à disposição física tradicional.

- **Persisti-las:** Através do uso do LocalStorage, o Memory Board garante que as memórias permaneçam acessíveis e intocadas entre sessões de uso.

Este projeto é desenvolvido como parte de um esforço para aprimorar minhas habilidades de desenvolvimento frontend e serve como um exemplo prático das tecnologias e técnicas que domino. É também uma expressão do meu apreço pela nostalgia e pelo poder da memória e portanto da história em nossa vida cotidiana.

## Sumário
- [Visão Geral](#visão-geral)
- [Sumário](#sumário)
- [Produção](#produção)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Principais Features](#principais-features)
  - [1. Componente de Dropzone](#1-componente-de-dropzonecomponente-de-dropzone)
  - [2. State Management com Zustand](#2-state-management-com-zustand)

## Produção
Essa aplicação está disponível em ambiente de produção, pela **[Vercel](https://vercel.com/)**, através do link abaixo:

### [memoryboardio.vercel.app](https://memoryboardio.vercel.app)

## Tecnologias Utilizadas
<div style="display: flex; gap: 2px;">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>

  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=cyan" alt="React">
  </a>

  <a href="https://react-dropzone.js.org/">
    <img src="https://img.shields.io/badge/React_Dropzone-black?style=for-the-badge&logo=react&logoColor=cyan" alt="React Dropzone">
  </a>

  <a href="https://react-icons.github.io/react-icons/">
    <img src="https://img.shields.io/badge/React_Icons-black?style=for-the-badge&logo=react&logoColor=eb4e63" alt="React Icons">
  </a>

  <a href="https://docs.pmnd.rs/zustand/getting-started/introduction">
    <img src="https://img.shields.io/badge/Zustand-efefef?style=for-the-badge&logo=zustand&logoColor=e229c4" alt="Zustand">
  </a>

  <a href="https://styled-components.com/">
    <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components">
  </a>

  <a href="https://www.framer.com/motion/">
    <img src="https://img.shields.io/badge/Framer_Motion-efefef?style=for-the-badge&logo=framer&logoColor=e229c4" alt="Framer Motion">
  </a>
</div>

## Principais Features

### 1. Componente de Dropzone
A principal feature dessa aplicação é sem dúvidas a capacidade do usuário realizar o envio de suas memórias, ou seja, seus arquivos de imagem.

Ele pode fazê-lo de duas maneiras, arrastando as imagens para o menu de importação, ou simplesmente clicando no mesmo menu.

<div style="display: flex;flex-flow: column; gap: 5px">
  <img src="./src/assets/images/docs/dropzone_pov_action.png" alt="Dropzone Preview Importer Action">

  > Preview do botão responsável pela operação de importação.

  <img src="./src/assets/images/docs/dropzone_pov_modal.png" alt="Dropzone Preview Importer Modal">

  > Preview do modal de importação.
</div>

#####
Isso tudo é possível graças ao framework **[React Dropzone](https://react-dropzone.js.org/)**, que facilita a implementação do `<input />` responsável por realizar o upload dos arquivos.

Essa implementação em código fica assim:

<div style="display: flex;flex-flow: column; gap: 5px">

  <img style="width: 100%" src="./src/assets/images/docs/dropzone_code_hook.png">


  > Bloco de código jsx que desestrutura alguns dos objetos retornados pelo custom hook useDropzone, que serão utilizados no jsx e em outras funções.

 <img style="width: 100%" src="./src/assets/images/docs/dropzone_code_jsx.png">

  > Bloco de código jsx utilizando os objetos retornados pelo método getRootProps() e getInputProps() do custom hook useDropzone.
</div>

## 2. State Management com Zustand

Após as imagens serem importadas, é necessário lidar com elas, para que possam ser acessadas por outros componentes.

Para tal, fora utilizado o framework **Zustand**, criando algumas *Stores*, dentre as quais, a `polaroidStore`, que trata os dados de importação.

<div style="display: flex;flex-flow: column; gap: 5px">
  <img style="width: 100%" src="./src/assets/images/docs/polaroid_store_code_block.png">

  > Zustand store responsável pelos arquivos importados.

  <img style="width: 100%" src="./src/assets/images/docs/polaroid_store_code_hook.png">

  > Importação do custom hook no componente Dropzone.
</div>

Assim, utilizando uma *Handler Function*, os arquivos importados, salvos no array `acceptedFiles` são salvos "globalmente", ao utilizar o método `addPolarids`:

<div style="display: flex;flex-flow: column; gap: 5px">
  <img style="width: 100%" src="./src/assets/images/docs/polaroid_store_code_handler.png">

  > Utilização do método `addPolaroids`, através da função, handleUploads.
</div>

Isso faz com que o anterior array de `Files`(`acceptedFiles`), retornado pelo hook `useDropzone`, seja mapeado como um novo array do tipo `PolaroidObject`, apresentado no bloco de código da `polaroidStore` agora com novas informações.
