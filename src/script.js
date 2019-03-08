import FastAverageColor from 'fast-average-color/dist/index.es6';

document.getElementById('input').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement, files = tgt.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('img').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    } else {
        console.log(`error`);
    }
    const fac = new FastAverageColor();
    setTimeout(()=> {
        let color = fac.getColor(document.querySelector('img'));
        console.log(color)
        window.location.replace(`https://nhentai.net/g/${color.hex.substr(1)}`)
    },1000)
}