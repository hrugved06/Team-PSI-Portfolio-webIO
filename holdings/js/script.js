$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

//=============================================== Forismatic API ===========================================================

function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}
document.getElementById("get-activity").addEventListener("click", function(){
  $(function() {
    randomQuote();
  });
})

$("button").click(function(){
  randomQuote();
});

//============================================================================================================

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Team Ψ-Psi";
        $("#favicon").attr("href","holdings/images/try1.png");
    }
});


// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["Compete", "Learn", "Explore", "Build Projects", "Win"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 20,
      });
// <!-- tilt js effect ends -->


// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,1000);
}
window.onload = fadeOut;
// pre loader end

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 
srtop.reveal('.home .dev',{interval: 600}); 



/* SCROLL ABOUT Flewin */
srtop.reveal('.about1 .content h3',{delay: 300});
srtop.reveal('.about1 .content .tag',{delay: 400}); 
srtop.reveal('.about1 .content p',{delay: 300}); 
srtop.reveal('.about1 .content .box-container',{delay: 300}); 
srtop.reveal('.about1 .content .resumebtn',{delay: 300}); 

/* SCROLL ABOUT Hrugved */
srtop.reveal('.about2 .content h3',{delay: 300});
srtop.reveal('.about2 .content .tag',{delay: 400}); 
srtop.reveal('.about2 .content p',{delay: 300}); 
srtop.reveal('.about2 .content .box-container',{delay: 300}); 
srtop.reveal('.about2 .content .resumebtn',{delay: 300}); 

/* SCROLL ABOUT Ashish */
srtop.reveal('.about3 .content h3',{delay: 300});
srtop.reveal('.about3 .content .tag',{delay: 400}); 
srtop.reveal('.about3 .content p',{delay: 300}); 
srtop.reveal('.about3 .content .box-container',{delay: 300}); 
srtop.reveal('.about3 .content .resumebtn',{delay: 300}); 

/* SCROLL ABOUT Paresh */
srtop.reveal('.about4 .content h3',{delay: 300});
srtop.reveal('.about4 .content .tag',{delay: 400}); 
srtop.reveal('.about4 .content p',{delay: 300}); 
srtop.reveal('.about4 .content .box-container',{delay: 300}); 
srtop.reveal('.about4 .content .resumebtn',{delay: 300}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});