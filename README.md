# React Native Push Notification Local 

Exemplos de uso do push notification pra quem NÂO quer usar a função com Firebase.
O app foi configurado apenas para android (por emquanto).

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

Para o exemplo, foram utilizadas as versões abaixo:

nodejs-lts: v16.x
yarn: v1.22 (recomendado, mas não obrigatório)
Emulador android

### 🔧 Instalação

Após a clonagem do repositório, basta ir na pasta e rodar os seguintes comandos:

**OBS**: Para utiizar com npm, basta substituir yarn por npm nas instruções.

Para instalar as dependências:
```
yarn
```

Para iniciar o app na porta 3000:
```
yarn start
```

Para iniciar o emulador e instalar o app:
```
yarn android
```

## ⚙️ Executando 

O app tem apenas uma tela com dois botões, o primeiro abrirá a notificação na hora e o outro uma notificação em 5s, que podem ser alterados no código. 

![push notification](https://user-images.githubusercontent.com/59974293/166599114-331811c9-ea35-4cc7-bf5d-78df8665d98b.gif)

### Algumas informações

As configurações do push notification pestão localizadas no arquivo:
```
src/config/pushNotification.ts
```

No arquivo principal (App.ts) estão localizadas as funções 'localNotification' e 'localNotificationSchedule', apenas com o necessário, que serão chamadas ao tocar nos botões presente na tela.
Para mais informações sobre esta lib, pode acessar o link oficial dela abaixo:
* [react-native-push-notification](https://www.npmjs.com/package/react-native-push-notification) - A biblioteca utilizada

## ✒️ Autor

* **Pedro Mesmer** - *Desenvolvimento* - [pedromesmer](https://github.com/pedromesmer)

## 📄 Licença

Este projeto está sob a licença MIT
