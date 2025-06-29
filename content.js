const translate = setTimeout(async () => {
    const inputs = document.querySelectorAll(".form-control.field")
    const front = inputs[0]
    const back = inputs[1]

    let debounceTimer;
    front.addEventListener("input", async (e) => {
        const frontText = front.innerText.trim()
        if(frontText === "") {
            back.innerText = ""
            clearInterval(debounceTimer)
            return
        }
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {

            const response = await fetch("https://ankiplus-384964856710.europe-west1.run.app/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: front.innerText})
            })

            const data = await response.json()
            console.log(data)
            back.innerText = data["translations"][0]["text"]

            const event = new Event("input", { bubbles: true })
            back.dispatchEvent(event)
        }, 1000)
    }
    )
}, 500)
