
# Delivery register back

back-end server for Web application to register deliveries and have a delivery estimate using google map

# 


## Install the dependencies

- yarn install or npm install

## Run the project

- yarn start ou npm start

## Access in the browser

- Put this url in the browser http://localhost:3333/




## technologies and concepts used in the project

 - [Node.js](https://nodejs.org/api/documentation.html)
 - [Sequelize](https://sequelize.org/)
 - [Joi](https://www.npmjs.com/package/joi)
 - [MVC](https://pt.wikipedia.org/wiki/MVC)
 - [Moment](https://momentjs.com/)

## Api documentation

#### Returns registered deliveries

```http
  GET /delivery
```

#### Register a delivery

```http
  POST /delivery
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. client name |
| `product`      | `string` | **Obrigatório**. product |
| `origin`      | `string` | **Obrigatório**. starting point |
| `destiny`      | `string` | **Obrigatório**. destination point |
| `date`      | `date` | **Obrigatório**. delivery date |


