function welcome() {
    alert('Halo teman !');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}

function counting() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 10) {
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = "EHE"; 
        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage);
    }
    if (document.getElementById('count').innerText == 10) {
        const ngagetin = document.createElement('h4');
        ngagetin.innerText = "Klik 20x == untuk melihat easter egg";
        const image = document.createElement('img');
        image.setAttribute('id', 'ehe');
        image.setAttribute('src', 'R.png' );
        image.setAttribute('width', '100%');
        image.setAttribute('height', '100%');
        image.setAttribute('z-index', '2');
        image.setAttribute('position', 'relative');
        const contents = document.querySelector('.contents');
        contents.appendChild(ngagetin).appendChild(image);
    }
    if (document.getElementById('count').innerText == 12) {
        alert('Reload untuk reset cuy, tapi nomor 20 lebih ngagetin !');
    }
    if (document.getElementById('count').innerText == 20) {
        const removeImage = document.getElementById('ehe');
        removeImage.remove();
        const image2 = document.createElement('img');
        image2.setAttribute('src', 'R.gif' );
        image2.setAttribute('width', '100%');
        image2.setAttribute('height', '100%');
        image2.setAttribute('z-index', '2');
        image2.setAttribute('position', 'relative');
        const contents = document.querySelector('.contents');
        contents.appendChild(image2);
    }
    if (document.getElementById('count').innerText == 25) {
        alert('UDAH ABIS COY GAADA LAGI')
    }
}
document.body.onload = welcome;
document.getElementById('incrementButton').onclick = counting;
