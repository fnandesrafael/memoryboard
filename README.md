# Memory Board

## Visão Geral
Essa é uma aplicação front-end que reimagina o conceito tradicional de *"Memory Board"* em um ambiente digital. Originalmente, um Memory Board é uma ferramenta física usada para organizar e exibir memórias visuais, como fotos, cartões postais e lembranças. Ele serve como um lembrete tangível de momentos especiais, experiências significativas ou mesmo personalidades importantes na vida de alguém.

Seu objetivo principal é fornecer aos usuários uma plataforma digital onde eles possam:

- **Capturar Memórias:** Os usuários podem realizar o upload de suas memórias, ou seja, arquivos de imagens.

- **Organizá-las:** A aplicação permite que os usuários organizem suas imagens de forma personalizada, semelhante à disposição física tradicional.

- **Persisti-las:** Através do uso do LocalStorage, o Memory Board garante que as memórias permaneçam acessíveis e intocadas entre sessões de uso.

Este projeto é desenvolvido como parte de um esforço para aprimorar minhas habilidades de desenvolvimento frontend e serve como um exemplo prático das tecnologias e técnicas que domino. É também uma expressão do meu apreço pela nostalgia e pelo poder da memória e portanto da história em nossa vida cotidiana.

## Sumário
- [Visão Geral](#visão-geral)
- [Sumário](#sumário)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Produção](#produção)
- [Principais Features](#principais-features)
  - [Componente de Dropzone](#componente-de-dropzone)

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


## Produção
Essa aplicação está disponível em ambiente de produção, pela **[Vercel](https://vercel.com/)**, através do link: [memoryboardio.vercel.app](https://memoryboardio.vercel.app)

## Principais Features

### Componente de Dropzone
A principal feature dessa aplicação é sem dúvidas a capacidade do usuário realizar o envio de suas memórias, ou seja, seus arquivos de imagem.

Ele pode fazê-lo de duas maneiras, arrastando as imagens para o menu de importação, ou simplesmente clicando no mesmo menu.

<div style="display: flex;flex-flow: column; gap: 5px">
  <img src="./src/assets/images/docs/dropzone_pov_action.png" alt="Dropzone Preview Importer Action">

  > Preview do Botão Responsável Pela Operação de Importação.

  <img src="./src/assets/images/docs/dropzone_pov_modal.png" alt="Dropzone Preview Importer Modal">

  > Preview do Modal de Importação.
</div>

#####
Isso tudo é possível graças a biblioteca **[React Dropzone](https://react-dropzone.js.org/)**, que facilita a implementação do `<input />` responsável por realizar o upload dos arquivos.
