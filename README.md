# Projeto Hábitos do dia a dia

Start Banco > Na pasta server - npx prisma studio

Start Back-end  > na pasta pasta server -  npm run dev

Front-end > na pasta web - npm run dev

Mobile > npx expo start

## FrameWorks utilizados no projeto:

Node
NPMFastfy
Prisma
Node 
Typescript

Prisma

Criando a entidade de relacionamento

https://www.npmjs.com/package/prisma-erd-generator

npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

Gerando a entidade 

npx prisma generate   



Criando SEED para polular o banco no prisma

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  await prisma.habit.create({

​    data:{

​      title: 'Beber 2L de Água',

​      created_at: new Date('2023-01-20T00:00:00.000z')

​    }

  })

}

main()

 .then(async () => {

  await prisma.$disconnect()

 })

 .catch(async (e) => {  console.error(e)

  await prisma.$disconnect()

  process.exit(1)

 })



comando para executar o SEED

 npx prisma db seed



Biblioteca de icones Phosphor

npm i phosphor-react

https://phosphoricons.com/



CSS

Tailwind CSS para Web

NativeWind para Mobile

yarn add nativewind
yarn add --dev tailwindcss

npx tailwindcss init



# SVG Expo

https://docs.expo.dev/versions/latest/sdk/svg/

npx expo install react-native-svg

# react-native-svg-transformer

https://github.com/kristerkari/react-native-svg-transformer

npm i react-native-svg-transformer ---save-dev
