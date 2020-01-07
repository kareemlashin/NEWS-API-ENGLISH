$(document).ready(function () {

    $("#loading").fadeOut(1000,
        function () {
            $("body").css("overflow", "auto")
        }
    )
    AOS.init();
    let marginMain = $(".navbar").height();
    $("header").css({ marginTop: marginMain + 25 + "px" })



    let category = "general";
    getCatgry(category);

    var typed = new Typed('#typing', {
        strings: ["in the world"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    function getCatgry(category) {
        document.getElementById("catgry").innerHTML = category;

        let myRquest = new XMLHttpRequest();
        myRquest.open("GET", "https://newsapi.org/v2/top-headlines?country=gb&category=" + category + "&apiKey=b458aaad337a4891aeb97812366378e1", true);
        myRquest.send();
        let myData = [];
        myRquest.onreadystatechange = function () {
            if (myRquest.readyState == 4 && myRquest.status == 200) {
                myData = JSON.parse(myRquest.response).articles;
                showData();
            }
        }
        function showData() {
            let temp = "";
            for (let i = 0; i < myData.length; i++) {
                temp += "<div class='col-md-4 my-2'data-aos='fade-up' data-aos-anchor-placement='center-center'><div class='item'><img class='img-fluid' src="
                    + myData[i].urlToImage +
                    "><div class='desc p-3'>" + myData[i].title + "</div></div></div>"
            }
            document.getElementById("showData").innerHTML = temp;
        }
    }
    $(".navbar .nav-item .nav-link").click(function () {
        newcategory = $(this).text();
        getCatgry(newcategory);
    })

})
