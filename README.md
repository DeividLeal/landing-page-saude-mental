# Mente Sã: Landing Page de Apoio à Saúde Mental

![Capa do Projeto](https://via.placeholder.com/1200x600.png?text=Capa+do+Projeto+Mente+Sã)

## 📖 Sobre o Projeto

O **Mente Sã** é uma landing page moderna e interativa, desenvolvida como parte do Mini Projeto do Módulo 5. O objetivo é criar uma interface web que consome a API de Apoio à Saúde Mental Comunitária (desenvolvida no Módulo 4), apresentando dados de forma agradável, organizada e com foco na experiência do usuário.

A página serve como um portal de bem-estar, oferecendo acesso rápido a dicas de autocuidado, frases motivacionais, contatos para apoio psicológico e exercícios de respiração guiada, tudo proveniente de uma API robusta e apresentado em uma interface leve e responsiva.

### O Problema

Atualmente, o acesso a recursos confiáveis e de fácil compreensão sobre saúde mental ainda é um desafio. Muitas vezes, as informações estão dispersas e apresentadas de forma clínica, o que pode afastar pessoas que buscam um primeiro contato ou apoio rápido para o dia a dia.

### A Solução

Esta landing page centraliza diferentes tipos de conteúdo de apoio em um só lugar. Utilizando uma interface visualmente atraente, com animações suaves e navegação intuitiva, o projeto busca desmistificar o cuidado com a saúde mental e oferecer ferramentas práticas acessíveis a qualquer momento.

---

## ✨ Tecnologias Utilizadas

O projeto utiliza tecnologias modernas do ecossistema JavaScript para garantir alta performance e excelente manutenibilidade.

| Ferramenta      | Versão | Descrição                                                         |
| :-------------- | :----: | :---------------------------------------------------------------- |
| **Next.js**     |  13+   | Framework React para produção, com SSR e SSG.                     |
| **React**       |  18+   | Biblioteca para construção de interfaces de usuário interativas.  |
| **TypeScript**  |   5+   | Superset do JavaScript que adiciona tipagem estática ao código.   |
| **TailwindCSS** |   3+   | Framework CSS utility-first para estilização rápida e responsiva. |
| **Node.js**     |  18+   | Ambiente de execução para a API.                                  |
| **Express.js**  |   4+   | Framework para construção da API em Node.js.                      |
| **Render**      |  N/A   | Plataforma de nuvem utilizada para hospedar a API.                |
| **GitHub**      |  N/A   | Plataforma utilizada para hospedar o front-end.                   |

---

## 🚀 Executando o Projeto

Para executar este projeto localmente, é necessário ter o **Node.js** e um gerenciador de pacotes (**NPM** ou **Yarn**) instalados.

O projeto é dividido em duas partes: **API (Back-end)** e **Landing Page (Front-end)**.

### 1. API (Back-end)

A API já está em produção e pode ser acessada em:  
🔗 **https://api-saude-mental.onrender.com**

Se desejar rodar localmente:

```bash
# 1. Clone o repositório da API
git clone https://github.com/DeividLeal/api-saude-mental.git

# 2. Acesse o diretório da API
cd api-saude-mental

# 3. Instale as dependências
npm install

# 4. Inicie o servidor da API
npm start
```

> O servidor da API estará rodando em `http://localhost:3000`.

🔗 **Repositório da API:** [https://github.com/DeividLeal/api-saude-mental](https://github.com/DeividLeal/api-saude-mental)

### 2. Landing Page (Front-end)

Esta é a aplicação Next.js visualizada pelo usuário.

```bash
# 1. Clone o repositório do front-end
git clone https://github.com/DeividLeal/landing-page-saude-mental.git

# 2. Acesse o diretório do projeto
cd landing-page-saude-mental

# 3. Instale as dependências
npm install

# 4. Crie o arquivo de variáveis de ambiente
# Crie um arquivo chamado .env.local na raiz do projeto e adicione a linha abaixo:
NEXT_PUBLIC_API_URL=https://api-saude-mental.onrender.com

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

> A aplicação estará disponível em `http://localhost:3001` (ou outra porta, verifique o console).

---

## 📸 Screenshots do Projeto

|                                         Seção de Autocuidado                                          |                                       Seção de Frases                                       |
| :---------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| ![Screenshot da seção de autocuidado](https://via.placeholder.com/400x300.png?text=Seção+Autocuidado) | ![Screenshot da seção de frases](https://via.placeholder.com/400x300.png?text=Seção+Frases) |

|                                      Seção de Apoio                                       |                                         Layout Responsivo                                          |
| :---------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| ![Screenshot da seção de apoio](https://via.placeholder.com/400x300.png?text=Seção+Apoio) | ![Screenshot do layout responsivo](https://via.placeholder.com/400x300.png?text=Layout+Responsivo) |

---

## 🎯 Próximos Passos

- [ ] Implementar tema escuro (Dark Mode)
- [ ] Adicionar mais animações com Framer Motion
- [ ] Criar testes unitários para os componentes

---

Desenvolvido com 💙 por **Deivid Caldas**.
