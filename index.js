function generateRandomColor()
{
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
function generate()
{
    document.getElementById("circle1").style.backgroundColor = generateRandomColor() ;
    document.getElementById("circle2").style.backgroundColor = generateRandomColor() ;
    document.getElementById("circle3").style.backgroundColor = generateRandomColor() ;
    document.getElementById("hex1").value = generateRandomColor() ;
    document.getElementById("hex2").value = generateRandomColor();
    document.getElementById("hex3").value = generateRandomColor();
}

function copy(ele) 
{
    var copyText = ele;
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}