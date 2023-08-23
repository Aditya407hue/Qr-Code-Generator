const qrText = document.getElementById('qrTxt');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn')
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    generateQRCode();
    isEmptyInput();
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgAtr = img.getAttribute('src')
        downloadBtn.setAttribute("href", imgAtr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
        qrText.value.length > 0 ? generateQRCode() : qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
}

function generateQRCode(){
    qrContainer.innerHTML ="";

    new QRCode(qrContainer,{
        text:qrText.value,
        height: size,
        width: size,
        colorLight:'#fff',
        colorDark:'#000',
    });
}