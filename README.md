<h1>Gerador de Senhas</h1>
<p>Esse projeto foi desenvolvido em HTML, CSS e JavaScript utilizando Webpack e Babel para garantir compatibilidade entre diferentes navegadores. Ele gera senhas personalizáveis de acordo com opções selecionadas.</p>

<h2>Tecnologias utilizadas</h2>
<ul>
    <li>HTML5
    <li>CSS3
    <li>JavaScript
    <li>Node.js v20.17.0
    <li>Node Package Manager (NPM) v10.8.2
    <li>Webpack v5.98.0
    <li>Babel v7.26.9
    <li>Visual Studio Code v1.98.2
</ul>

<h2>Estrutura das pastas</h2>
<pre>
password-generator/
│── docs/                                   # Contém os arquivos finais do site
│   ├── assets/
│   │   ├── js/
│   │   │   ├── bundle.js                   # Script final do site
│   │   │   ├── bundle.js.map               # Mapa de bundle.js
│   ├── index.html                          # Página principal do site
│
│── node_modules/                           # Contém todas as depedências do projeto                  
│
│── src/                                    # Contém o código-fonte do projeto
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css                   # Arquivo de estilo do site
│   │   ├── js/                             # Contém os scripts do site
│   │   │   ├── modules/
│   │   │   │   ├── generateChar.js 
│   │   │   │   ├── GeneratePassword.js
│   │   │   ├── main.js                     # Script principal do site que integra todos os módulos
│
│── .gitignore
│── package-lock.json
│── package.json                            # Contém as informações do projeto
│── webpack.config.js                       # Configuração do Webpack
</pre>

<h2>Funcionalidades</h2>
<ul>
    <li><strong>Compatibilidade navegadores</strong>: O gerador de senhas funcionará corretamente em diferentes navegadores.
    <li><strong>Validações</strong>:
    <ul>
        <li>Caso o usuário não digite um número ou o número não esteja entre 8 e 12, uma mensagem de erro será exibida.
        <li>Caso o usuário não selecione uma ou mais opções de configurações, uma mensagem de erro informará o usuário.
    </ul>
    <li><strong>Criação de senhas personalizáveis</strong>: O usuário pode configurar a senha gerada com os seguintes caracteres: 
    <ul>
        <li><strong>Números</strong>.
        <li><strong>Letras Maiúsculas</strong>.
        <li><strong>Letras Minúsculas</strong>.
        <li><strong>Caracteres Especiais</strong>.
    </ul>
</ul>

<h2>Demonstração das funcionalidades</h2>
<div align="center">
    <img src="./demonstration.gif" alt="Imagem animada de demonstração das funcionalidades" width="800px">
</div>

<h2>Como rodar o projeto</h2>
<p>Para rodar este projeto, há alguns pré-requisitos:</p>~
<ul>
    <li><a href="https://nodejs.org/pt" target="_blank">Node.js</a> v20.17.0 ou superior.
    <li>NPM.
</ul>
<p>Passo-a-passo:</p>
<ol>
    <li>Instale Node.js: Caso não o tenha instalado, baixe-o clicando <a href="https://nodejs.org/pt" target="_blank">aqui</a>.
    <li>Navegue até o repositório pretendido:
    <pre>cd caminho/do/repositorio</pre>
    <li>Clone o repositório:
    <pre>git clone https://github.com/MatheusVenturaNellessen/password-generator.git</pre>
    <li>Instale as depedências:
    <pre>npm install</pre>
    <p>Uma pasta <strong>node_modules</strong> será criada em seu ambiente com as depedências necessárias do projeto.</p>
    <li>Abra a página principal no navegador:
    <ol>
        <li>Navegue até a pasta <strong>docs</strong> em seu ambiente.
        <li>Abra o arquivo <strong>index.html</strong> num navegador.
    </ol>
</ol>
<p>Como gerar os arquivos finais: Os arquivos finais estarão na pasta <strong>docs</strong>.</p>
<pre>npm run build</pre>

<h2>Contribuições</h2>
<p>Este projeto está aberto para contribuições através de issues. Caso você tenha encontrado um bug, queira sugerir uma melhoria ou tenha dúvidas sobre o funcionamento do projeto, por favor, siga as instruções abaixo:</p>
<ol>
    <li>Verifique se já existe uma issue da situação aberta. Se já existir, adicione seu comentário na issue existente.
    <li>Caso não tenha sido aberta, crie uma issue nova.
</ol>

<h2>Autoria</h2>
<p>Desenvolvido por <a href="http://www.linkedin/in/matheus-ventura-nellessen/">Matheus Ventura Nellessen</a>.</p>
<p>Sinta-se a vontade para entrar em contato!</p>
