# Projeto DemoQa

Este projeto foi desenvolvido para testar os diversos elementos e funcionalidades oferecidas pelo site [DemoQa](https://demoqa.com/). Ele abrange testes automatizados utilizando a ferramenta Cypress para verificar o comportamento de elementos como forms, alerts, frames, widgets, interações com a interface e testes de API.

![DemoQa](cypress\assets\demoqa.png)

## Objetivo do Projeto

O objetivo principal deste projeto é fornecer uma estrutura de testes automatizados abrangente para validar o comportamento e a funcionalidade do site DemoQa em diferentes cenários. Os testes são projetados para garantir que todas as funcionalidades do site estejam funcionando corretamente e para detectar quaisquer problemas ou bugs potenciais.

## Durante o desenvolvimento deste projeto, foi utilizado as seguintes tecnologias:

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Cypress-app**: Plugin Cypress para facilitar a interação com aplicações web. Ele fornece recursos adicionais para manipular elementos da interface do usuário e simplificar a escrita de testes.
- **Git**: Sistema de controle de versão para gerenciar o código-fonte..
- **Faker**: Biblioteca para geração de dados aleatórios.
- **Visual Studio Code (VS Code)**: Editor de código utilizado para desenvolvimento.


## Estrutura do Projeto

O projeto está estruturado em diferentes diretórios, cada um representando uma área específica dos testes:

- **e2e**: Contém os testes end-to-end que cobrem diferentes funcionalidades e elementos do site.
- **fixtures**: Armazena os dados fictícios gerados pelo Faker para serem usados nos testes.
- **support**: Contém arquivos de suporte, como comandos personalizados do Cypress e utilitários de configuração.


## Funcionalidades Testadas

------
| Module | Description |
| ------ | ----------- |
| `Seção de Element` |
| Text Box | Teste para verificar o funcionamento adequado de campos de texto. |
| Check Box | Verificação se as caixas de seleção funcionam conforme o esperado. |
| Radio Button | Teste para garantir o comportamento correto dos botões de rádio. |
| Web Tables | Verificação se as tabelas da web são renderizadas corretamente. |
| Buttons | Teste para garantir que os botões respondam adequadamente aos cliques. |
| Links | Verificação se os links direcionam para as páginas corretas. |
| Broken Links | Teste para identificar links quebrados. |
| Upload and Downloads | Verificação se é possível fazer upload e download de arquivos. |
| Dynamic Properties | Teste para garantir que as propriedades dinâmicas dos elementos funcionem corretamente. |

![DemoQa](cypress\assets\secao-elements.png)

| Module | Description |
| ------ | ----------- |
| `Seção Forms` |
| Practice Forms | Verificação do funcionamento adequado dos formulários de prática.                           |

![DemoQa](cypress\assets\secao-forms.png)

| Module | Description |
| ------ | ----------- |
| `Seção Alerts, Frames & Windows` |
| Alerts | Verificação se os alertas são exibidos corretamente. |
| Browser Windows | Teste para verificar o comportamento das janelas do navegador. |
| Frames | Teste para garantir que os frames sejam carregados corretamente. |
| Modal Dialogs | Teste para garantir o correto funcionamento das caixas de diálogo modais.                    |
| Nested Frames | Verificação do comportamento dos frames aninhados. |

![DemoQa](cypress\assets\secao-alert.png)

| Module | Description |
| ------ | ----------- |
| `Seção Widgets` |
| Accordion | Teste para verificar o funcionamento do accordion. |
| Auto Complete | Verificação se o recurso de auto completar funciona corretamente. |
| Date Picker | Teste para garantir que o seletor de datas funcione adequadamente. |
| Slider | Verificação do comportamento do controle deslizante. |
| Progress Bar | Teste para garantir que a barra de progresso seja exibida corretamente.                       |
| Tabs | Verificação se as abas funcionam conforme o esperado. |
| Tool Tips | Teste para garantir que os tooltips sejam exibidos corretamente. |
| Menu | Verificação do comportamento do menu. |
| Select Menu | Teste para garantir o correto funcionamento do menu de seleção. |

![DemoQa](cypress\assets\secao-widgets.png)

| Module | Description |
| ------ | ----------- |
| `Seção Interactions` |
| Sortable | Verificação se é possível reordenar elementos. |
| Selectable | Teste para verificar se os elementos podem ser selecionados.                                    |
| Resizable | Verificação se os elementos podem ser redimensionados. |
| Draggable | Teste para garantir que os elementos possam ser arrastados. |

![DemoQa](cypress\assets\secao-interaction.png)

| Module | Description |
| ------ | ----------- |
| `Seção Book Store API` |
| Register | Verificação do processo de registro de usuário. |
| Login | Teste para garantir o correto funcionamento do login. |
| Add Book | Verificação se é possível adicionar um livro à coleção do usuário. |
| Delete Book | Teste para garantir que os livros possam ser excluídos da coleção do usuário. |
| Authorization | Verificação se o usuário está autorizado a acessar determinadas funcionalidades.              |
| Get Token | Teste para garantir que o token de acesso seja gerado corretamente. |
![DemoQa](cypress\assets\secao-api.png)

## DemoQa Swagger - Book Store
- [Swagger](https://demoqa.com/swagger/#)


## Como Executar o Projeto

1. **Pré-requisitos:**
   - Node.js instalado na sua máquina.
   - Git instalado na sua máquina.

2. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

3. **Instale as dependências:**
    ```bash
    cd nome-do-repositorio
    npm install
----
### Conclusão

O projeto DemoQa foi desenvolvido com o propósito de oferecer uma estrutura abrangente de testes automatizados para avaliar os diversos elementos e funcionalidades disponíveis no site DemoQa. Voltado especificamente para profissionais de controle de qualidade (QA), o projeto abrange testes que vão desde a verificação do comportamento básico dos elementos da interface até a interação avançada com widgets, interações complexas e integração de API.
Este projeto não apenas permitiu aprofundar as habilidades em testes automatizados, mas também nos desafiou a explorar novos horizontes e aprimorar nossas técnicas de teste, servindo como uma valiosa oportunidade de aprendizado e crescimento profissional, capacitando a enfrentar desafios mais complexos e a desenvolver soluções mais eficazes no campo dos testes automatizados.