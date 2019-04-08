const request = require("superagent");
const { config } = require("../server/config");

async function getContaxtObjectInfo(ctx) {
    const resObject = {
        rest_method: `${ctx.method}`,
        URL: `${ctx.url}`,
        user_id: `${ctx.params.id}`,
    };
    ctx.set("Content-Type", "application/json");
    ctx.response.body = JSON.stringify(resObject);
    ctx.body = JSON.stringify(resObject);
}

async function getUserInfoById(ctx) {
    const resObject = {
        id: `${ctx.params.id}`,
    };
    ctx.response.body = JSON.stringify(resObject);
}

async function getResponse(ctx){

    const resObj = request.get(`${config.base}`)
        .set("Content-Type", "application/json")
        .then((res)=>{
            return res.body;
        })
        .catch((err)=>{
            return error.message;
        });
    ctx.response.body = await resObj;
}

/*router.get('/api/v1/user/:id', async (ctx: any) => {
    const resObject = {
        user_id: `${ctx.params.id}`,
        rest_method: `${ctx.method}`,
        URL: `${ctx.url}`
    };
    ctx.set('Content-Type', 'application/json');
    ctx.body = JSON.stringify(resObject);
}); */

module.exports = { getContaxtObjectInfo, getUserInfoById, getResponse };
