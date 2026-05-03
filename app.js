document.getElementById("submit").addEventListener("click", function () {
    var input = document.getElementById("input").value;
    var response = generateResponse(input);

    document.getElementById("response").innerText = response;
});

function generateResponse(input) {

    input = input.toLowerCase();

    if (input.includes("hello")) {
        return "hello! what u need?";
    }

    if (input.includes("how are you")) {
        return "i'm fine i guess, just a basic bot";
    }

    if (input.includes("help")) {
        return "ok what do you need help with?";
    }

    return "cookie stop pestering me";
}
