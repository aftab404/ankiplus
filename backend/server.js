const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/translate", async (req, res) => {
    try {
        const text = req.body.data;
        console.log(text)
        const response = await fetch("https://api-free.deepl.com/v2/translate", {
        method: "POST",
        headers: {
            "Authorization": "DeepL-Auth-Key 5526158a-3b09-4d05-a7ba-1b94e9afd7fb:fx",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: [text],
            target_lang: "en"
        })})
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.post("/try", async (req, res) => {
    const text = req.body.data
    console.log(text)
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

