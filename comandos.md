# inicio

- npx create-next-app@latest .

# habilitar turbo pack

- subustitui o webpack e corrige o erro

"scripts": {
"dev": "next dev --turbo",
"build": "next build",
"start": "next start",
"lint": "next lint"
},

## snipet

- mr -> cria metadata
- lrc -> cria layout
- rafc -> cria um component

## instalar icons

- https://www.npmjs.com/package/@primer/octicons-react
- npm i @primer/octicons-react
- Para usar basta pegar o nome do componente ex: <HomeIcon />
- ctrl + . importa campos de uma função

## Gerar build de produção

- "build": "next build", -> constroi a aplicação
- npm run build
- "start": "next start", -> executa a aplicação em modo produção
- npm start -> executa o build

## subindo para o git

- git init
- git add .
- git commit -m "first commit"
- git remote add origin https://github.com/paviotti/next-first-steps.git
- git branch -M main
- git push -u origin main
