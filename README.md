# Sistema de Cadastro e Autenticação — Node.js

Sistema web desenvolvido em Node.js com funcionalidades de cadastro, login, consulta, edição e exclusão de registros.

O projeto foi criado para praticar o desenvolvimento de uma aplicação completa, envolvendo interface web, regras de negócio, organização em camadas e integração com banco de dados.

## Sobre o Projeto

A aplicação permite o gerenciamento de usuários por meio de um fluxo de autenticação e operações de cadastro.

O usuário pode criar uma conta, realizar login no sistema e acessar as funcionalidades disponíveis após a autenticação.

Também é possível consultar, editar e excluir os dados cadastrados, seguindo as regras implementadas na aplicação.

## Funcionalidades

- Cadastro de usuários
- Login no sistema
- Controle de acesso
- Consulta de registros cadastrados
- Edição de informações
- Exclusão de registros
- Validação de dados
- Integração com banco de dados
- Organização do projeto em camadas
- Interface web para interação com o usuário

## Tecnologias Utilizadas

- Node.js
- JavaScript
- HTML5
- CSS3
- SQL
- Git
- GitHub

## Estrutura do Projeto

- `HTML/` — páginas e estrutura da interface
- `CSS/` — arquivos de estilização
- `JS/` — scripts utilizados no frontend
- `Model/` — modelos e estruturas de dados
- `Routes/` — definição das rotas da aplicação
- `Service/` — regras de negócio e serviços
- `Database/` — arquivos relacionados à conexão e configuração do banco de dados
- `index.js` — arquivo principal da aplicação
- `SAEP.sql` — script de criação ou configuração do banco de dados
- `UseCase Diagrama.asta` — diagrama de casos de uso do sistema

## Arquitetura e Organização

O projeto foi organizado com separação de responsabilidades entre rotas, serviços, modelos e banco de dados.

As rotas são responsáveis por receber as requisições da aplicação, enquanto a camada de serviços concentra as principais regras de negócio.

A camada de modelos representa as entidades utilizadas pelo sistema, e a pasta de banco de dados contém as configurações necessárias para persistência das informações.

## Principais Fluxos

### Cadastro

O usuário informa seus dados por meio do formulário de cadastro.

Após a validação, as informações são armazenadas no banco de dados.

### Login

O usuário informa suas credenciais para acessar o sistema.

A aplicação realiza a validação dos dados e libera o acesso às funcionalidades disponíveis.

### Edição

Os registros cadastrados podem ser consultados e atualizados pelo usuário.

### Exclusão

O sistema permite excluir registros cadastrados, conforme as regras implementadas na aplicação.

## Objetivo do Desenvolvimento

O projeto foi desenvolvido para aplicar conhecimentos de desenvolvimento web com Node.js, incluindo:

- Criação de rotas
- Implementação de regras de negócio
- Integração com banco de dados
- Operações de cadastro, consulta, edição e exclusão
- Organização de código em camadas
- Desenvolvimento de interface com HTML e CSS
- Modelagem do sistema
- Versionamento com Git e GitHub

## Como Executar o Projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
