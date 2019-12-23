console.log("%c SimpleNetworks 🤘🏼🤘🏼", "color: #2c327d; font-size: 30px; font-weight: bold");

window.addEventListener("load", () => {


    const photos = document.querySelector('.photos');
    const buttons = document.querySelectorAll('.filter-button');
    const frame = document.getElementById('frame');
    buttons.forEach((button) => button.addEventListener('click', () => {
        frame.setAttribute('src', button.getAttribute('data-href'));
    }));

    document.addEventListener("keyup", e => {
        if (e.keyCode == 13) {
            let doc = document.querySelector("#frame").contentWindow.document;
            let imgURL = doc.querySelector('canvas').toDataURL('image/jpeg', 1.0);
            let image = document.createElement('img');
            image.setAttribute('src', imgURL);
            image.classList.add('photo');
            photos.appendChild(image);
        } 
    })
});