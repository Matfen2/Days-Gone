const show = document.getElementById('btnShowGame');

show.addEventListener('click', function () {
    async function fetchData() {
    const response = await fetch('info.json');
    const data = await response.json();

    const present = data[0];

        const body = document.body;
        body.style.backgroundImage = `url('${present.wallaper}')`

        // CONTAIN PICT
        const containPict = document.querySelector('.picture');
        
        const pictGame = document.createElement('img');
        pictGame.src = present.pict;
        pictGame.style.width = "100%";
        pictGame.style.height = "350px";
        pictGame.style.maxWidth = "650px";

        containPict.appendChild(pictGame);

        // CONTAIN INFO
        const containInfo = document.querySelector('.info');

        const presentGame = document.createElement('p');
        presentGame.textContent = present.title + " est un jeu développé par " + present.studio;

        const describeGame = document.createElement('p');
        describeGame.innerText = present.description;

        const priceGame = document.createElement('p');
        priceGame.innerText = present.price;

        containInfo.appendChild(presentGame);
        containInfo.appendChild(describeGame);
        containInfo.appendChild(priceGame);
        
        show.style.display = "none";
    }
    fetchData();
})
