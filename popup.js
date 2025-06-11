const lang = document.getElementById("language")
lang.addEventListener("change", (e) => {
    chrome.storage.local.set({ lang: e.target.value })
})
