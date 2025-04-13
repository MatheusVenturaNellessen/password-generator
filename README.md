<h1>Gerador de Senhas</h1>
<p>Este projeto foi desenvolvido em HTML, CSS e JavaScript, utilizando Webpack e Babel para garantir compatibilidade entre diferentes navegadores. Ele gera senhas personalizadas de acordo com as configurações selecionadas pelo usuário.</p>

<hr>

<h2>Tecnologias utilizadas</h2>
<ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript (ES6+)</li>
    <li>Node.js v20.17.0</li>
    <li>Node Package Manager (npm) ^10.8.2</li>
    <li>Webpack ^5.98.0</li>
    <li>Babel ^7.26.9</li>
    <li>core-js ^3.40.0</li>
    <li>regenerator-runtime ^0.14.1</li>
    <li>css-loader ^7.1.2</li>
    <li>style-loader ^4.0.0</li>
    <li>Visual Studio Code v1.98.2</li>
</ul>

<hr>

<h2>Estrutura das pastas</h2>
<pre>
PASSWORD-GENERATOR/
├── docs/                                        # Contém os arquivos finais do projeto
│   ├── assets/
│   │   └── js/
│   │       ├── bundle.js                        # Script final do site (gerado via Webpack + Babel)
│   │       └── bundle.js.map                    # Mapa de bundle.js
│   └── index.html                               # Página principal do site
│
├── src/                                         # Códigos-fontes do projeto
│   └── assets/
│       ├── css/
│       │   └── style.css                        # Arquivo de estilo
│       └── js/
│           ├── modules/                         # Scripts do projeto modularizados
│           │   ├── generateChar.js
│           │   └── GeneratePassword.js
│           └── main.js                          # Script principal do projeto
│
├── package-lock.json                            # Versiona as dependências exatas do projeto
├── package.json                                 # Informações do projeto, dependências e scripts npm
└── webpack.config.js                            # Configurações do Webpack
</pre>
<p>Outros arquivos e pastas foram omitidos por não serem essenciais para o entendimento da estrutura do projeto.</p>
<p><strong>Nota:</strong> A pasta <code>docs/</code> também é usada para o deploy via GitHub Pages. No entanto, seu conteúdo é fundamental para o funcionamento do projeto, pois contém os arquivos transpilados e empacotados pelo Webpack.</p>

<hr>

<h2>Funcionalidades</h2>
<ul>
    <li><strong>Compatibilidade com navegadores:</strong> o gerador de senhas funciona corretamente em diferentes navegadores.</li>
    <br>
    <li><strong>Validações:</strong>
        <ul>
            <li>Exibe mensagem de erro se o usuário não digitar um número ou se ele estiver fora do intervalo de 8 a 12.</li>
            <li>Exibe mensagem de erro se nenhuma opção de configuração for selecionada.</li>
        </ul>
    </li>
    <br>
    <li><strong>Criação de senhas personalizáveis:</strong> o usuário pode configurar a senha com os seguintes caracteres:
        <ul>
            <li>Números.</li>
            <li>Letras maiúsculas.</li>
            <li>Letras minúsculas.</li>
            <li>Caracteres especiais.</li>
        </ul>
    </li>
</ul>

<hr>

<h2>Demonstração das funcionalidades</h2>
<div align="center">
    <img src="./src/assets/img/demonstration.gif" alt="Demonstração do gerador de senhas em funcionamento" width="600px">
</div>

<hr>

<h2>Como rodar o projeto em seu ambiente</h2>
<p>Para executar este projeto, é necessário ter os seguintes pré-requisitos:</p>
<ul>
    <li>Node.js - versão mínima recomendada: 20.x ou superior.</li>
    <li>Node Package Manager (npm) - versão mínima recomendada: 10.x ou superior.</li>
</ul>

<p>Passo a passo:</p>
<ol>
    <li>Instale o Node.js clicando <a href="https://nodejs.org/pt" target="_blank">aqui</a>.</li>
    <li>Após a instalação, navegue até um diretório pretendido:</li>
    <pre><code>cd caminho/do/diretorio</code></pre>
    <li>No diretório escolhido, clone o repositório:</li>
    <pre><code>git clone https://github.com/MatheusVenturaNellessen/password-generator.git</code></pre>
    <li>Instale as dependências executando o seguinte comando:</li>
    <pre><code>npm install</code></pre>
    <p>Após executar este comando, a pasta <code>node_modules/</code> será criada em seu ambiente com as dependências necessárias do projeto.</p>
    <li>Abra o arquivo <code>index.html</code> localizado na pasta <strong>docs/</strong> em um navegador.</li>
</ol>
<h4>Observação:</h4>
<p>Para gerar os arquivos finais novamente após alterações, execute o comando:</p>
<pre><code>npm run build</code></pre>

<hr>

<h2>Contribuições</h2>
<p>Este projeto está aberto para contribuições via issues. Se você encontrou um bug, deseja sugerir uma melhoria ou tem dúvidas sobre o funcionamento, siga as instruções abaixo:</p>
<ol>
    <li>Verifique se já existe uma issue sobre o assunto. Caso sim, adicione um comentário nela.</li>
    <li>Se não houver, abra uma nova issue com uma descrição clara e objetiva.</li>
</ol>

<hr>

<h2>Licença e Autor</h2>
<p>Este projeto foi desenvolvido por <a href="https://www.linkedin.com/in/matheus-ventura-nellessen/">Matheus Ventura Nellessen</a> e está licenciado sob a licença MIT. Veja o <a href="./LICENSE">documento</a> para mais detalhes.</p>
