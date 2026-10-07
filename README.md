# 🐾 PetSOS — Plataforma de Atendimento e Emergência Veterinária

Informação rápida. Cuidado quando mais importa.

## 📖 Sobre o Projeto

O PetSOS é uma plataforma desenvolvida para auxiliar tutores de animais a encontrar atendimento veterinário e acessar rapidamente informações importantes sobre seus pets em situações de emergência.

A proposta combina cadastro de animais, informações de saúde, busca por atendimento veterinário e um Cartão de Emergência, permitindo que dados essenciais estejam organizados e disponíveis de forma rápida.

⸻

## 🎯 Objetivo

O principal objetivo do PetSOS é facilitar o acesso às informações do animal e ao atendimento veterinário, reduzindo o tempo necessário para encontrar dados importantes durante uma situação de emergência.

O sistema busca:

* Cadastrar e organizar informações dos pets;
* Armazenar alergias, medicamentos e condições de saúde;
* Disponibilizar um Cartão de Emergência;
* Facilitar a busca por clínicas e veterinários;
* Permitir o compartilhamento das informações do pet;
* Centralizar informações importantes em um único sistema.

⸻

## 👥 Público-Alvo

* Tutores de cães e gatos;
* Clínicas veterinárias;
* Médicos veterinários;
* Pessoas responsáveis por animais que precisam de atendimento rápido.

⸻

## ⚙️ Funcionalidades Principais

1. Cadastro de Pets

Permite cadastrar informações como:

* Nome;
* Espécie;
* Sexo;
* Idade;
* Peso;
* Alergias;
* Medicamentos;
* Condições de saúde;
* Observações.

2. Cartão de Emergência

Apresenta rapidamente as principais informações de saúde do animal para facilitar um possível atendimento veterinário.

3. Busca de Veterinários

Permite pesquisar clínicas e visualizar:

* Localização;
* Horário de atendimento;
* Telefone;
* Especialidades.

4. Chat Veterinário

Permite simular uma conversa entre tutor e veterinário, incluindo o envio da ficha de emergência.

5. Histórico

Centraliza registros de consultas e procedimentos realizados pelo pet.

6. Perfil do Tutor

Permite armazenar os dados básicos do responsável pelo animal.

⸻

## 🗺️ Diagramas de Caso de Uso e Sequência

## Diagrama de Caso de Uso

```mermaid
flowchart LR
    Tutor([Tutor])
    Vet([Veterinário / Clínica])
    Admin([Administrador])

    subgraph PetSOS
        A[Cadastrar pet]
        B[Editar dados do pet]
        C[Consultar cartão de emergência]
        D[Buscar veterinário]
        E[Visualizar clínica]
        F[Conversar com veterinário]
        G[Enviar ficha de emergência]
        H[Consultar histórico]
        I[Gerenciar dados pessoais]
        J[Receber ficha do pet]
        K[Responder ao tutor]
        L[Gerenciar informações]
    end

    Tutor --> A
    Tutor --> B
    Tutor --> C
    Tutor --> D
    Tutor --> E
    Tutor --> F
    Tutor --> G
    Tutor --> H
    Tutor --> I
    Vet --> J
    Vet --> K
    Admin --> L
```

### Diagrama de Sequência — Cartão de Emergência

```mermaid
sequenceDiagram
    actor Tutor
    participant PetSOS
    participant Dados as Dados do Pet
    actor Vet as Veterinário

    Tutor->>PetSOS: Acessa cartão de emergência
    PetSOS->>Dados: Solicita dados do pet
    Dados-->>PetSOS: Retorna informações
    PetSOS-->>Tutor: Exibe cartão de emergência
    Tutor->>PetSOS: Envia ficha de emergência
    PetSOS->>Vet: Envia ficha do pet
    Vet-->>Tutor: Responde pelo chat

## Demonstração do Aplicativo

<table>
  <tr>
    <td align="center">
      <strong>Página Inicial</strong><br>
      <img src="img/pagina.inicial.png" width="200">
    </td>
    <td align="center">
      <strong>Meus Pets</strong><br>
      <img src="img/meus.pets.png" width="200">
    </td>
    <td align="center">
      <strong>Cartão Pet</strong><br>
      <img src="img/cartao.pet.png" width="200">
    </td>
  </tr>

  <tr>
    <td align="center">
      <strong>Procurar Veterinário</strong><br>
      <img src="img/procurar.vet.png" width="200">
    </td>
    <td align="center">
      <strong>Chat Veterinário</strong><br>
      <img src="img/chat.vet.png" width="200">
    </td>
    <td align="center">
      <strong>Ficha Pet</strong><br>
      <img src="img/ficha.pet.png" width="200">
    </td>
  </tr>

  <tr>
    <td align="center">
      <strong>Informações Veterinárias</strong><br>
      <img src="img/informaçoes.vet.png" width="200">
    </td>
    <td align="center">
      <strong>Perfil do Tutor</strong><br>
      <img src="img/perfil.tutor.png" width="200">
    </td>
    <td align="center">
      <strong>Configurações</strong><br>
      <img src="img/configuraçoes.png" width="200">
    </td>
  </tr>
</table>


## 🛠️ Tecnologias Utilizadas

### 💻 Front-end

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

### 🔧 Versionamento

[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

### 💾 Armazenamento

[![LocalStorage](https://img.shields.io/badge/LocalStorage-000000?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)


## 📁 Estrutura do Projeto

```text
PetSOS/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── animais.petSOS.png
│   ├── logo.petSOS.png
│   └── imagens das telas
├── index.html
└── README.md

## 📌 Roadmap do MVP

### ✅ Já desenvolvido

- [x] Cadastro de tutor
- [x] Cadastro de pets
- [x] Cartão de Emergência
- [x] Consulta de informações do pet
- [x] Busca de veterinários
- [x] Informações sobre clínicas
- [x] Histórico do pet
- [x] Chat veterinário simulado
- [x] Interface responsiva
- [x] Armazenamento local com LocalStorage

### 🔜 Próximas melhorias

- [ ] Integração com localização e mapas
- [ ] Cadastro real de clínicas e veterinários
- [ ] Chat veterinário em tempo real
- [ ] Sistema de login e autenticação
- [ ] Banco de dados
- [ ] Notificações de emergência



## 🔒 Requisitos Não Funcionais

Os requisitos não funcionais definem características de qualidade que o sistema deverá apresentar.

* RNF05 — Disponibilidade: o sistema deverá estar disponível para acesso sempre que o usuário precisar utilizar suas funcionalidades.
* RNF06 — Acessibilidade: a interface deverá utilizar elementos visuais e textos que facilitem a utilização por diferentes usuários.
* RNF07 — Manutenibilidade: o código deverá ser organizado de forma que futuras alterações e melhorias possam ser realizadas com facilidade.

## ▶️ Como Executar

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em um navegador.
4. O PetSOS será executado localmente.
