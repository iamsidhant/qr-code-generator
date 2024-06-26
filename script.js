const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

// Button summit
const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    // Validate url
    if (url === "") {
        alert("Please enter a URL");
    }
    else {
        showSpinner();
        // Show spinner for 1 sec
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);
            // Generate the save button after the qr code image src is ready
            setTimeout(() => {
                const saveUrl = qr.querySelector("img").src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000);
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

// Clear QR Code and Save button
const clearUI = () => {
    qr.innerHTML = "";
    const saveBtn = document.getElementById("save-link");
    if (saveBtn) {
        saveBtn.remove();
    } 
} ;

// Show spinner
const showSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";
}

// Hide spinner
const hideSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";
}

// Create Save button to download QR code as image
const createSaveBtn = (saveUrl) => {
    const link = document.createElement("a");
    link.id = "save-link",
    link.classList = 
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
    link.innerHTML = "Save Image";

    link.href = saveUrl;
    link.download = "qrcode";

    document.getElementById("generated").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);