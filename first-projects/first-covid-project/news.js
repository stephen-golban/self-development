$(document).ready(function() {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json", {
        "method": "GET",
    })
    .then(response => response.json())
    .then(data => {
    
            const img1 = data.articles[0].urlToImage;
            const title1 = data.articles[0].title;
            const url1 = data.articles[0].url;

            const img2 = data.articles[1].urlToImage;
            const title2 = data.articles[1].title;
            const url2 = data.articles[1].url;

            const img3 = data.articles[9].urlToImage;
            const title3 = data.articles[9].title;
            const url3 = data.articles[9].url;

            const img4 = data.articles[3].urlToImage;
            const title4 = data.articles[3].title;
            const url4 = data.articles[3].url;

            const img5 = data.articles[4].urlToImage;
            const title5 = data.articles[4].title;
            const url5 = data.articles[4].url;

            const img6 = data.articles[5].urlToImage;
            const title6 = data.articles[5].title;
            const url6 = data.articles[5].url;

            const img7 = data.articles[6].urlToImage;
            const title7 = data.articles[6].title;
            const url7 = data.articles[6].url;

            const img8 = data.articles[7].urlToImage;
            const title8 = data.articles[7].title;
            const url8 = data.articles[7].url;
            //Set DOM Elements from the API
            $('#news-img1').attr("src", img1);
            $('#news-title1').text(title1);
            $('#news-link1').attr("href", url1);
            $('#news-img2').attr("src", img2);
            $('#news-title2').text(title2);
            $('#news-link2').attr("href", url2);
            $('#news-img3').attr("src", img3);
            $('#news-title3').text(title3);
            $('#news-link3').attr("href", url3);
            $('#news-img4').attr("src", img4);
            $('#news-title4').text(title4);
            $('#news-link4').attr("href", url4);
            $('#news-img5').attr("src", img5);
            $('#news-title5').text(title5);
            $('#news-link5').attr("href", url5);
            $('#news-img6').attr("src", img6);
            $('#news-title6').text(title6);
            $('#news-link6').attr("href", url6);
            $('#news-img7').attr("src", img7);
            $('#news-title7').text(title7);
            $('#news-link7').attr("href", url7);
            $('#news-img8').attr("src", img8);
            $('#news-title8').text(title8);
            $('#news-link8').attr("href", url8);
        })
    .catch(err => {
        console.log(err);
    });
})
    