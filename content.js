const translate = setTimeout(async () => {
    const inputs = document.querySelectorAll(".form-control.field")
    const front = inputs[0]
    const back = inputs[1]
    let debounceTimer;
    front.addEventListener("input", async (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {

        const response = await fetch("http://localhost:3000/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: front.innerText }) 
        })

        const data = await response.json()
        console.log(data)
        back.innerText = data["translations"][0]["text"]

        const event = new Event("input", { bubbles: true })
        back.dispatchEvent(event)
        }, 1000)
    })
}, 500)
