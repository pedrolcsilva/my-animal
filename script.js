function fillHeader(){
    let animal = document.getElementById("title")
    animal.innerHTML = "Golfinho(Delphinus delphis)";
}

function fillMain(){
    let images = document.querySelector(".images")
    let img1 = document.createElement("img");
    img1.src="images/fotop.jpeg";
    img1.height=300;
    images.appendChild(img1);
    let spec = document.getElementById("species");
    spec.innerHTML = "Delphinus delphis"
    let desc = document.getElementById("desc");
    desc.innerHTML = "O Delphinus delphis, tambem conhecido como golfinho-comum, é a espécie mais comum da família Delphinidae. Há mais Delphinus delphis do que qualquer outra espécie de Delphinus nas águas temperadas dos oceanos Atlântico e Pacífico. Também pode ser encontrado nos mares do Caribe e do Mediterrâneo.";
}

function fillSection(){
    document.getElementById("comp").innerHTML = "Comportamento";
    document.getElementById("compdesc").innerHTML = "Golfinhos podem viver em agregações de centenas ou mesmo milhares de indivíduos. Eles às vezes podem ser confundidos com outras espécies de golfinhos, como as baleias-piloto. São nadadores rápidos (até 60 km por hora) e são muito bons em acrobacias, uma coisa bem comum nesta espécie. O máximo de vida é de 35 anos, mas tem sido estimada em 22 anos para a população do Mar Negro.";

}

function fillFooter(){
    document.getElementById("link").innerHTML = "Wiki";
    document.getElementById("link").href="https://www.biodiversity4all.org/taxa/41526-Delphinus-delphis";

}

fillHeader();
fillMain();
fillSection();
fillFooter();


