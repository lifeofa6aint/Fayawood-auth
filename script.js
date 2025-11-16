document.addEventListener("DOMContentLoaded", function () {
    const qrText = document.getElementById("qr-text");
    const qrDisplay = document.getElementById("qr-display");
    const encodedData = btoa("FAYAWOOD-UNIQUE-PACK-" + Date.now());

    qrText.textContent = encodedData;

    new QRCode(qrDisplay, {
        text: encodedData,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
});
