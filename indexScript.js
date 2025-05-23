
import { urlImg, linkUrl, cardTitle  } from "../localStorage.js";
document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    let pageNumber = 1;

    btn1.addEventListener("click", function () {
        if (pageNumber > 1) {
            pageNumber--;
        }
    });

    btn2.addEventListener("click", function () {
        if (pageNumber >= 1 && pageNumber < 4) {
            pageNumber++;
        }
    });

    //Alterar conteudo do card
    let cardImg1;
    let titleCard1;
    let linkCard1;
    let cardImg2;
    let titleCard2;
    let linkCard2;
    let cardImg3;
    let titleCard3;
    let linkCard3;
    let card1 = [
     cardImg1 = document.getElementById("cardImg1"),
     titleCard1 = document.getElementById("cardTitle1"),
     linkCard1 = document.getElementById("cardLink1")
    ];

    let card2 = [
     cardImg2 = document.getElementById("cardImg2"),
     titleCard2 = document.getElementById("cardTitle2"),
     linkCard2 = document.getElementById("cardLink2")
    ]

    let card3 = [
     cardImg3 = document.getElementById("cardImg3"),
     titleCard3 = document.getElementById("cardTitle3"),
     linkCard3 = document.getElementById("cardLink3")
    ]
    if (urlImg, cardTitle, linkUrl) {
        setInterval(() => {
        if (pageNumber == 1) {
            card1[0].src = urlImg[0];
            card1[1].innerText = cardTitle[0];
            card1[2].href = linkUrl[0];

            card2[0].src = urlImg[1];
            card2[1].innerText = cardTitle[1];
            card2[2].href = linkUrl[1];
            
            card3[0].src = urlImg[2];
            card3[1].innerText = cardTitle[2];
            card3[2].href = linkUrl[2];
        } else if (pageNumber == 2) {
            card1[0].src = urlImg[3];
            card1[1].innerText = cardTitle[3];
            card1[2].href = linkUrl[3];

            card2[0].src = urlImg[4];
            card2[1].innerText = cardTitle[4];
            card2[2].href = linkUrl[4];
            
            card3[0].src = urlImg[5];
            card3[1].innerText = cardTitle[5];
            card3[2].href = linkUrl[5];
        } else if (pageNumber == 3) {
            card1[0].src = urlImg[6];
            card1[1].innerText = cardTitle[6];
            card1[2].href = linkUrl[6];

            card2[0].src = urlImg[7];
            card2[1].innerText = cardTitle[7];
            card2[2].href = linkUrl[7];
            
            card3[0].src = urlImg[8];
            card3[1].innerText = cardTitle[8];
            card3[2].href = linkUrl[8];
        } else {
            card1[0].src = urlImg[9];
            card1[1].innerText = cardTitle[9];
            card1[2].href = linkUrl[9];

            card2[0].src = urlImg[10];
            card2[1].innerText = cardTitle[10];
            card2[2].href = linkUrl[10];
            
            card3[0].src = urlImg[11];
            card3[1].innerText = cardTitle[11];
            card3[2].href = linkUrl[11];
        }
    }, 200);
    } else {
        console.log("Erro na importação dos cards!!")
    }
})