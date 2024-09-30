Aqui está o README modificado para o nome **VaultGame**:

# VaultGame - Website de Vendas Simuladas de Jogos

## Visão Geral

O **VaultGame** é um **Website de Vendas Simuladas de Jogos**, projetado para simular o ambiente de uma loja virtual de jogos, sem a realização de transações financeiras reais. Este projeto oferece aos usuários a oportunidade de explorar um catálogo de jogos, realizar buscas personalizadas e simular compras de maneira prática e interativa. Ideal para fins acadêmicos e de treinamento, o **VaultGame** utiliza tecnologias de ponta para o desenvolvimento web, tanto no frontend quanto no backend.

---

## Funcionalidades do Projeto

- **Catálogo de Jogos**: Exibe uma seleção diversificada de jogos para plataformas como PC, Xbox, PlayStation e Nintendo.
- **Sistema de Autenticação**: Registro e login de usuários, com opção de exibição de senha para melhorar a experiência do usuário.
- **Busca de Jogos**: Filtragem de jogos por título, plataforma ou gênero.
- **Simulação de Compras**: Adicione jogos ao carrinho e simule o processo de finalização de compra.
- **Integração com API Backend**: O backend, desenvolvido em **Django**, gerencia a lógica de negócios, autenticação e inventário de jogos.

---

## Tecnologias Utilizadas

### Frontend:
- **React**: Framework utilizado para criar uma interface de usuário dinâmica e responsiva.
- **JavaScript**: Para a implementação da interatividade no site.
- **HTML/CSS**: Estrutura e design da interface.
- **Axios**: Responsável por realizar as requisições HTTP à API.

### Backend:
- **Python com Django**: Framework utilizado para desenvolver a API RESTful e gerenciar a lógica de backend.
- **Django Rest Framework**: Facilita o desenvolvimento da API.
- **MySQL**: Banco de dados relacional utilizado para armazenar as informações de usuários, jogos e transações simuladas.
- **Django MySQL Connector**: Utilizado para conectar o Django ao MySQL.
- **Postman**: Para teste e depuração das rotas da API.
- **Visual Studio Code (VS Code)**: Ambiente de desenvolvimento integrado (IDE) utilizado para codificar o backend em Python.

---

## Configuração do Projeto

### Pré-requisitos

- **Node.js**: Necessário para rodar o frontend com React.
- **Python**: Para rodar o backend utilizando Django.
- **MySQL**: Gerenciador de banco de dados utilizado no projeto.
- **Pipenv** ou **virtualenv**: Para a criação de ambientes virtuais Python.
- **Postman**: Opcional, mas útil para testar as requisições da API.

### Clonar o Repositório

```bash
git clone https://github.com/eduardotajra/vaultgame.git
cd vaultgame
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
           'NAME': 'vaultgame_db',
           'USER': 'vaultgame_user',
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