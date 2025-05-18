const { getPhone, postPhone, putPhone, deletePhone } = require("../controller/phoneController")

const route = require("express").Router()

route.get("/",getPhone)

route.post("/",postPhone)

route.put("/:id",putPhone)

route.delete("/:id",deletePhone)

module.exports = route