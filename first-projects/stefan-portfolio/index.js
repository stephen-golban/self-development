$(window).on('load', () => {

    $('.loader-body').fadeOut(2500);
    $('.loader').fadeOut(1000);
    setTimeout(() => {
        $('.loader-body').hide();
    },2000)
  // display the 1st skill
      $('.first-item h2').css("color", '#FE3E57');
      $('.first-item .first-div').css("background-color", '#FE3E57');
      $('.first-item .first-div').css("width", '100%');
      $('.first-item .first-div').css("transition", 'width .3s');
      $('.skill-content1').show();
});

$(document).scroll(changeNav);
function changeNav() {
    let nav = $('.nav-bar');
    let windowPos = window.scrollY > 0;
    if (windowPos) {
      nav.css("height", "60px");
      nav.css("transition", ".4s");
      nav.css("box-shadow", "2px 2px 10px #000")
    }
    else{
      nav.css("height", "100px");
      nav.css("transition", ".4s");
      nav.css("box-shadow", "none")
    }
}

$('.fa-bars').click(() => {
  $('.mobile-nav').css("display","flex");
});
$('.fa-times').click(() => {
  $('.mobile-nav').hide();
});
$('.mobile-nav a').click(() => {
  $('.mobile-nav').hide();
})
  //Changing Title Effect
  const b = baffle(".title");
  b.set({
    characters: '电视电脑我是斯蒂芬你好斯特凡',
    speed: 120
  });

  var i = 1;
  let changeTitle = () => {
    let titles = ["Web Developer", "UI/UX Designer", "Programmer"];
    if (i == titles.length) {
      i = 0;
    }
    b.text(currentText => titles[i]).reveal(1500);
    i++;
  }

  setInterval(changeTitle, 3200);

 $('.first-item').click(() =>{
   $('.first-item h2').css("color", '#FE3E57');
   $('.first-item .first-div').css("background-color", '#FE3E57');
   $('.first-item .first-div').css("width", '100%');
   $('.first-item .first-div').css("transition", 'width .3s');
   $('.skill-content1').show();
   $('.skill-content2').hide();
   $('.skill-content3').hide();

  //  2nd item
  $('.second-item h2').css("color", '#FFFFFE');
  $('.second-item .second-div').css("background-color", '#FFFFFE');
  $('.second-item .second-div').css("width", '50%');
  $('.second-item .second-div').css("transition", 'width .3s');
   //  3nd item
   $('.third-item h2').css("color", '#FFFFFE');
   $('.third-item .third-div').css("background-color", '#FFFFFE');
   $('.third-item .third-div').css("width", '50%');
   $('.third-item .third-div').css("transition", 'width .3s');
 })

 $('.second-item').click(() =>{
  $('.second-item h2').css("color", '#FE3E57');
  $('.second-item .second-div').css("background-color", '#FE3E57');
  $('.second-item .second-div').css("width", '100%');
  $('.second-item .second-div').css("transition", 'width .3s');
  $('.skill-content1').hide();
  $('.skill-content2').show();
  $('.skill-content3').hide();

   //  1st item
   $('.first-item h2').css("color", '#FFFFFE');
   $('.first-item .first-div').css("background-color", '#FFFFFE');
   $('.first-item .first-div').css("width", '50%');
   $('.first-item .first-div').css("transition", 'width .3s');
   //  3nd item
   $('.third-item h2').css("color", '#FFFFFE');
   $('.third-item .third-div').css("background-color", '#FFFFFE');
   $('.third-item .third-div').css("width", '50%');
   $('.third-item .third-div').css("transition", 'width .3s');
})

$('.third-item').click(() =>{
  $('.third-item h2').css("color", '#FE3E57');
  $('.third-item .third-div').css("background-color", '#FE3E57');
  $('.third-item .third-div').css("width", '100%');
  $('.third-item .third-div').css("transition", 'width .3s');
  $('.skill-content1').hide();
  $('.skill-content2').hide();
  $('.skill-content3').show();

   //  1st item
   $('.first-item h2').css("color", '#FFFFFE');
   $('.first-item .first-div').css("background-color", '#FFFFFE');
   $('.first-item .first-div').css("width", '50%');
   $('.first-item .first-div').css("transition", 'width .3s');
    //  2nd item
  $('.second-item h2').css("color", '#FFFFFE');
  $('.second-item .second-div').css("background-color", '#FFFFFE');
  $('.second-item .second-div').css("width", '50%');
  $('.second-item .second-div').css("transition", 'width .3s');
});

$('.view-more').click(() => {
  $('#project4').show();
  $('#project5').show();
  $('#project6').show();
  $('#project7').show();
  $('#project8').show();
  $('.view-less').show();
  $('.view-more').hide();
})
$('.view-less').click(() => {
  $('#project4').hide();
  $('#project5').hide();
  $('#project6').hide();
  $('#project7').hide();
  $('#project8').hide();
  $('.view-less').hide();
  $('.view-more').show();
})
$('.fa-angle-up').click(() => {
  $('html, body').animate({
    scrollTop: 0
},
50);
})
