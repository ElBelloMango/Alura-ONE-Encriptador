// Botones
const btnencriptar = document.querySelector("#btnencrypt");
const btndesencriptar = document.querySelector("#btndecrypt");
const btncopiar = document.querySelector("#btncopy");
// Textareas
const input = document.querySelector("#user-input");
const output = document.querySelector("#user-output");
// results
const empty = document.querySelector(".empty");

function encrypt(text) {
    let resultado = "";
    for (let c = 0; c < text.length; c++) {
        resultado = resultado + (text[c] == "a" ? text[c].replace("a", "ai")
            : text[c] == "e" ? text[c].replace("e", "enter")
                : text[c] == "i" ? text[c].replace("i", "imes")
                    : text[c] == "o" ? text[c].replace("o", "ober")
                        : text[c] == "u" ? text[c].replace("u", "ufat") :
                            text[c]);
    }
    return resultado;
}

function decrypt(text) {
    return text.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
}

function inputValido() {
    if (input.value == "") {
        empty.children[0].innerHTML = "Por favor ingresa texto";
        empty.children[0].style.color = "red"
        return false;
    }
    else return true;
}

btnencriptar.addEventListener("click", (e) => {
    if (inputValido()) {
        output.value = encrypt(input.value);
        empty.classList.add("invisible")
    }
})

btndesencriptar.addEventListener("click", (e) => {
    if (inputValido()) {
        output.value = decrypt(input.value);
        empty.classList.add("invisible")
    }
})

btncopiar.addEventListener("click", (e) => {
    navigator.clipboard.writeText(output.value);
    alert("Copiaste el texto: "+output.value)
})

