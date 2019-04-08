const Router = require("koa-router");
const request = require("superagent");
const resource = require("../service-router/resource");

const router = new Router({
    prefix : "/api/v1",
});

router.get("/ctx", resource.getContaxtObjectInfo);

router.get("/user/:id", resource.getUserInfoById);

router.get("/static/api", resource.getResponse);

// router.get('/api/v1/user/:name', resource.getUserInfo);



const routes = router.routes();
module.exports = { routes };
