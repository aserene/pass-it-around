require("dotenv").config()
const express =  require("express")
const app = express()
const PORT = process.env.PORT

app.get("/", (req, res)=> {
    res.render("home.ejs")
})
app.get("/none_left", (req, res) => {
    res.render("none.ejs")
})
app.get("/:number_left", (req, res)=> {
    if(req.params.number_left === "0"){
        res.redirect("/none_left")
    } else {
    res.render("countdown.ejs", {
        number_left: req.params.number_left
    } )}
})
app.listen(PORT, (req, res)=> {
    console.log(`Server is listening on port ${PORT}.`)
})