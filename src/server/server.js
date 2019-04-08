const Koa = require("koa");

const {config} = require("./config");
const {routes} = require("./router");

const app = new Koa();

app.use(routes);
app.listen(config.port);
// eslint
console.log(`Server running on port ${config.port}`);
