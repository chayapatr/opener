import FastAverageColor from 'fast-average-color/dist/index.es6';

document.getElementById('input').onchange = evt => {
    var tgt = evt.target || window.event.srcElement, files = tgt.files;
    if (FileReader && files && files.length) {
        let fr = new FileReader();
        fr.onload = () => {
            document.getElementById('img').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    } else {
        console.error(`error`);
    }
    const fac = new FastAverageColor();
    setTimeout(_ => {
        let color = fac.getColor(document.querySelector('img'));
        console.log(color)
        window.location.href = `https://nhentai.net/g/${color.hex.substr(1)}`
    },1000)
}