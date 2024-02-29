const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorBaground = document.querySelector('.hex-color');
const hexColorCopy = document.querySelector('.hex-copy')


const rgbBtn = document.querySelector('.rgb-Btn');
const rgbColorValue = document.querySelector('.rgb-color-value')
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorContainer = document.querySelector('.rgb-color')
const rgbColorCopy = document.querySelector('.rgb-copy')


hexBtn.addEventListener('click', () => {
    let char = "123456789ABCDEF";
    let hexColor = ""
    charlength = char.length;

    for (let i = 0; [i] < 6; ++i) {
        hexColor += char.charAt(Math.floor(Math.random() * charlength))

    }

    hexColorValue.textContent = `#${hexColor}`;
    hexColorBaground.style.backgroundColor = `#${hexColor}`;

})



rgbBtn.addEventListener('click', () => {
    let RedValue = getRedInputRange.value;
    let GreenValue = getGreenInputRange.value;
    let BlueValue = getBlueInputRange.value;

    rgbColorValue.textContent = `rgb(${RedValue},${GreenValue},${BlueValue})`;
    rgbColorContainer.style.backgroundColor = `rgb(${RedValue},${GreenValue},${BlueValue})`



})


function copyHEX_ToClipBoard() {
    navigator.clipboard.writeText(hexColorValue.textContent)
};


hexColorCopy.addEventListener('click', copyHEX_ToClipBoard);


function copyRGB_ToClipBoard() {
    navigator.clipboard.writeText(rgbColorValue.textContent);
};

rgbColorCopy.addEventListener('click', copyRGB_ToClipBoard)
