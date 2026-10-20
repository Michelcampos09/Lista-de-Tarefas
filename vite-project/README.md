# 📋 Lista de Tarefas com Login (React + Vite)

Projeto de um gerenciador de tarefas desenvolvido em **React** com **Vite**. O objetivo deste projeto é demonstrar a divisão de responsabilidades através de componentes, manipulação de estados (`useState`), passagem de propriedades (`props`) e renderização condicional simulando um fluxo completo de autenticação e painel de controle (Dashboard).

🔗 **Acesse o projeto online:** [Clique aqui para testar na Vercel](COLE_SEU_LINK_DA_VERCEL_AQUI)

---

## 💡 Como testar o projeto (Modo Demonstração)

Este é um projeto focado em **Front-end** para exibição de portfólio (não utiliza banco de dados real):

1. Na tela inicial de **Login**, digite **qualquer e-mail e qualquer senha**.
2. Clique em **Entrar**.
3. O sistema irá redirecionar para o **Dashboard**, exibindo uma saudação personalizada no topo com o seu nome de usuário.
4. Adicione novas tarefas digitando no campo de texto e clicando no botão (ou pressionando a tecla `Enter`).
5. Clique em **Sair** no canto superior para encerrar a sessão e voltar à tela de login.

---

## ✨ Funcionalidades

- **Tela de Login Simulada:** Validação de preenchimento de campos e captura dinâmica do nome do usuário.
- **Cabeçalho Dinâmico:** Saudação personalizada (`Bem-vindo, usuário!`) e botão de logout funcional.
- **Adição de Tarefas:** Criação rápida de tarefas pelo botão de envio ou pressionando a tecla `Enter`.
- **Validação de Campo Vazio:** Impede a adição de tarefas em branco (`trim()`).
- **Layout Dividido e Responsivo:** Interface limpa e adaptada para diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** (Componentização, Props e Hook `useState`)
- **[Vite](https://vitejs.dev/)** (Ambiente de desenvolvimento rápido e build)
- **JavaScript (ES6+)**
- **CSS3** (Flexbox e Responsividade)
- **HTML5**

---

## 📁 Estrutura de Componentes

O projeto foi organizado separando as páginas principais dos componentes de interface:

```text
src/
├── components/
│   ├── ListaDeTarefas.jsx   # Gerencia o input e o estado da lista de tarefas
│   └── ItensLista.jsx       # Recebe as tarefas via props e renderiza os itens
├── pages/
│   ├── Login.jsx            # Tela inicial de autenticação
│   └── Dashboard.jsx        # Painel principal com cabeçalho e área de tarefas
├── App.jsx                  # Controla o estado de login e alterna entre as telas
├── App.css                  # Estilização geral do projeto
└── main.jsx                 # Ponto de entrada da aplicação React
```
