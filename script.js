window.addEventListener("DOMContentLoaded", init);

const produktlisteURL = "https://kea-alt-del.dk/t7/api/products";

let produktlisteTemplate;
let produktlisteContainer;

function init() {
  console.log("init");

  produktlisteTemplate = document.querySelector(".produktliste_template");
  console.log(".produktliste_template", produktlisteTemplate);

  produktlisteContainer = document.querySelector(".produktliste_container");
  console.log(".produktliste_container", produktlisteContainer);

  fetch(produktlisteURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      visProduktliste(json);
    });
}

function visProduktliste(produktlisteJSON) {
  let produktlisteClone;

  produktlisteJSON.forEach((produktliste) => {
    console.log(produktlisteClone);
    produktlisteClone = produktlisteClone.cloneNode(true).content;
    produktlisteClone.querySelector(".produktliste_image img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produktliste.id}.webp`;
    produktlisteClone.querySelector(".produktliste_image").alt = `Billede af ${produktliste.name} tøj`;
    produktlisteClone.querySelector(".produktliste_navn").textContent = produktliste.productdisplayname;
    produktlisteClone.querySelector(".produktliste_pris span").textContent = produktliste.price;
    produktlisteClone.querySelector(".produktliste_brand").textContent = produktliste.brandname;
    produktlisteClone.querySelector("a").href = `produkt.html?id${produktliste.id}`;
    produktlisteContainer.appendChild(produktlisteClone);
  });
}
