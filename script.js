function enterSite() {
    document.getElementById("ageGate").style.display = "none";
}

function verifyCode() {
    let input = document.getElementById("codeInput").value.trim();
    let result = document.getElementById("result");

    if (input.length < 3) {
        result.style.color = "orange";
        result.textContent = "Invalid code. Please check again.";
        return;
    }

    // Placeholder: ALL codes starting with "FW" = authentic
    if (input.startsWith("FW")) {
        result.style.color = "#00e673";
        result.textContent = "✔ Authentic Fayawood Wrap";
    } else {
        result.style.color = "#ff4747";
        result.textContent = "✖ Counterfeit Alert! This is NOT an authentic Fayawood wrap.";
    }
}
