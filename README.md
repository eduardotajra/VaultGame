# ProGames - Website de Vendas Simuladas de Jogos

## Visão Geral

O **ProGames** é um **Website de Vendas Simuladas de Jogos**, desenvolvido para simular o funcionamento de uma loja online de jogos, sem realizar transações financeiras reais. O projeto permite aos usuários navegar por uma lista de jogos, pesquisar por títulos e simular a compra de produtos. Este ambiente é ideal para treinamento acadêmico ou prático em desenvolvimento web utilizando tecnologias de frontend e backend modernas.

---

## Funcionalidades do Projeto

- **Catálogo de Jogos**: Apresenta uma lista de jogos para diversas plataformas como PC, Xbox, PlayStation e Nintendo.
- **Sistema de Autenticação**: Registros e logins de usuários com alternância de visibilidade da senha para uma experiência mais amigável.
- **Busca de Jogos**: Possibilita a busca de jogos por nome, plataforma ou gênero.
- **Simulação de Compras**: Adição de jogos ao carrinho e simulação de um processo de checkout.
- **Integração com API Backend**: A API, desenvolvida com **Django**, lida com a lógica de negócio, autenticação e inventário.

---

## Tecnologias Utilizadas

### Frontend:
- **React**: Para criar uma interface de usuário interativa e responsiva.
- **JavaScript**: Proporciona interatividade no site.
- **HTML/CSS**: Estrutura e estilização do frontend.
- **Axios**: Utilizado para realizar requisições HTTP para a API.

### Backend:
- **Python com Django**: Utilizado para desenvolver a API RESTful e gerenciar a lógica de backend.
- **Django Rest Framework**: Facilita a criação da API.
- **MySQL**: Banco de dados relacional para armazenar informações sobre os usuários, jogos e transações simuladas.
- **Django MySQL Connector**: Utilizado para conectar o Django ao MySQL.
- **Postman**: Para testar e depurar as requisições da API.
- **Visual Studio Code (VS Code)**: IDE utilizada para desenvolver o backend em Python.

---

## Configuração do Projeto

### Pré-requisitos

- **Node.js**: Necessário para rodar o frontend com React.
- **Python**: Para rodar o backend utilizando Django.
- **MySQL**: Para o gerenciamento do banco de dados.
- **Pipenv** ou **virtualenv**: Para criação de ambientes virtuais Python.
- **Postman**: Opcional, para testar as rotas da API.

### Clonar o Repositório

```bash
git clone https://github.com/eduardotajra/progames
cd progames
```

### Configuração do Backend

1. Navegue até a pasta `backend`:
   ```bash
   cd backend
   ```

2. Crie um ambiente virtual e ative-o:
   ```bash
   python -m venv env
   source env/bin/activate  # No Windows: env\Scripts\activate
   ```

3. Instale as dependências do backend:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure o banco de dados MySQL no arquivo `settings.py` do Django:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'progames_db',
           'USER': 'progames_user',
           'PASSWORD': 'senha_secreta',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

5. Realize as migrações do banco de dados:
   ```bash
   python manage.py migrate
   ```

6. Inicie o servidor do backend:
   ```bash
   python manage.py runserver
   ```

O servidor backend estará rodando em `http://localhost:8000`.

### Configuração do Frontend

1. Navegue até a pasta `frontend`:
   ```bash
   cd ../frontend
   ```

2. Instale as dependências do frontend:
   ```bash
   npm install
   ```

3. Inicie o servidor do frontend:
   ```bash
   npm start
   ```

O frontend estará disponível em `http://localhost:3000`, comunicando-se com o backend Django em `http://localhost:8000`.