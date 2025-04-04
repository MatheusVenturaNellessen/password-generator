<h1>Gerador de Senhas</h1>
<p>Esse projeto foi desenvolvido em HTML, CSS e JavaScript utilizando Webpack e Babel para garantir compatibilidade entre diferentes navegadores. Ele gera senhas personalizávies de acordo com opção(ões) selecionada(s).</p>

<h2>Tecnologias utilizadas</h2>
<ul>
    <li>HTML5.
    <li>CSS3.
    <li>JavaScript.
    <li>Node.js - Versão: 20.17.0.
    <li>Node Package Manager (npm) - Versão: 10.8.2.
    <li>Webpack - Versão: 5.98.0.
    <li>Babel - Versão: 7.26.9. 
    <li>Visual Studio Code - Versão: 1.98.2.
</ul>

<h2>Estrutura das pastas</h2>
<pre>
password-generator/
│── docs/                           # Contém os arquivos finais do site
│   ├── assets/
│   │   ├── js/
│   │   │   ├── bundle.js           # Script final do site
│   │   │   ├── bundle.js.map       # Mapa de bundle.js (script final)
│   ├── index.html                  # Página principal do site
│
│── node_modules/                   # Contém todas as depedências do projeto                  
│
│── src/                            # Contém o código-fonte do projeto
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css           # Arquivo de estilo do site
│   │   ├── js/                     # Contém os scripts do site
│   │   │   ├── modules/
│   │   │   │   ├── generateChar.js 
│   │   │   │   ├── GeneratePassword.js
│   │   │   ├── main.js             # Script principal do site que integra todos os módulos
│
│── .gitignore
│── package-lock.json
│── package.json                    # Contém as informações do projeto e scripts npm
│── README.md
│── webpack.config.js               # Configuração do Webpack
</pre>

<h2>Demonstração das funcionalidades</h2>
<div align="center">
    <img src="./demonstration.gif" alt="Imagem animada de demonstração das funcionalidades" width="800px">
</div>
