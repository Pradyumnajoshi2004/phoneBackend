const { getPhone, postPhone, putPhone, deletePhone, getPhoneById } = require("../controller/phoneController")

const route = require("express").Router()

route.get("/",getPhone)

route.post("/",postPhone)

route.put("/:id",putPhone)

route.delete("/:id",deletePhone)

route.get("/phone/:id",getPhoneById)

module.exports = route