module.exports = {
    HOST: "localhost",
    USER: "user",
    PASSWORD: "p",
    DB:"mydb",
    PORT: 3306,
    dialect: "mysql",
    pool : {
        max:5,
        min:0,
        acruire: 30000,
        idle: 10000
    }
};