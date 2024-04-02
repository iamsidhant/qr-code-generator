const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Button summit
const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    // Validate url
    if (url === "") {
        alert("Please enter a url");
    }
}

// Generate QR code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
    });
};

form.addEventListener("submit", onGenerateSubmit);