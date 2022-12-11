// Get the modal
var log = document.getElementById("log");
var sign = document.getElementById("sign");
var logclose = document.getElementById("log-close");
var signclose = document.getElementById("sign-close");

// Get the button that opens the modal
var signbtn = document.getElementById("signBtn");
var logbtn = document.getElementById("logBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.addEventListener("popstate", detectHistory);

function orlog() {
  sign.style.display = "none";
  log.style.display = "block";
}
function orsign() {
  sign.style.display = "block";
  log.style.display = "none";
}
// When the user clicks the button, open the modal
logbtn.onclick = function () {
  log.style.display = "block";
  // window.history.pushState({ id: 1 }, null, "q=1234&u=beware");
};
signbtn.onclick = function () {
  sign.style.display = "block";
  // window.history.pushState({ id: 1 }, null, "q=1234&u=beware");
};

// When the user clicks on <span> (x), close the modal
logclose.onclick = function () {
  log.style.display = "none";
  // history.back();
};
signclose.onclick = function () {
  sign.style.display = "none";
  // history.back();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sign) {
    sign.style.display = "none";
    history.back();
  }
  if (event.target == log) {
    log.style.display = "none";
    history.back();
  }
};

function detectHistory() {
  sign.style.display = "none";
  log.style.display = "none";
}

function startTimer() {
  document.getElementById("see-all").click();
}

var courseBtn = document.getElementsByClassName("courseBtn");

var allcourse = document.getElementsByClassName("courses");
var allMviewcourse = document.getElementsByClassName("mview-course");

var all = allcourse.length;
var technicalBtn = document.getElementById("technical-btn");
var creativesBtn = document.getElementById("creatives-btn");
var businessBtn = document.getElementById("business-btn");
var artsBtn = document.getElementById("arts-btn");
var technical = document.getElementsByClassName("technical");
var creatives = document.getElementsByClassName("creatives");
var business = document.getElementsByClassName("business");
var arts = document.getElementsByClassName("arts");
var seeAll = document.getElementById("see-all");

technicalBtn.onclick = function () {
  for (i = 0; i < all; i++) {
    allcourse[i].style.display = "none";
  }

  for (k = 0; k < allMviewcourse.length; k++) {
    allMviewcourse[k].style.setProperty("display", "none", "important");
  }

  for (j = 0; j < technical.length; j++) {
    technical[j].style.display = "block";
  }

  seeAll.classList.remove("active-btn");
  technicalBtn.classList.add("active-btn");
  businessBtn.classList.remove("active-btn");
  creativesBtn.classList.remove("active-btn");
  artsBtn.classList.remove("active-btn");
};
creativesBtn.onclick = function () {
  for (i = 0; i < all; i++) {
    allcourse[i].style.display = "none";
  }

  for (k = 0; k < allMviewcourse.length; k++) {
    allMviewcourse[k].style.setProperty("display", "none", "important");
  }
  for (j = 0; j < creatives.length; j++) {
    creatives[j].style.display = "block";
  }
  seeAll.classList.remove("active-btn");
  technicalBtn.classList.remove("active-btn");
  businessBtn.classList.remove("active-btn");
  creativesBtn.classList.add("active-btn");
  artsBtn.classList.remove("active-btn");
};

artsBtn.onclick = function () {
  for (i = 0; i < all; i++) {
    allcourse[i].style.display = "none";
  }

  for (k = 0; k < allMviewcourse.length; k++) {
    allMviewcourse[k].style.setProperty("display", "none", "important");
  }
  for (j = 0; j < arts.length; j++) {
    arts[j].style.display = "block";
  }
  seeAll.classList.remove("active-btn");
  technicalBtn.classList.remove("active-btn");
  businessBtn.classList.remove("active-btn");
  creativesBtn.classList.remove("active-btn");
  artsBtn.classList.add("active-btn");
};

businessBtn.onclick = function () {
  for (i = 0; i < all; i++) {
    allcourse[i].style.display = "none";
  }

  for (k = 0; k < allMviewcourse.length; k++) {
    allMviewcourse[k].style.setProperty("display", "none", "important");
  }
  for (j = 0; j < business.length; j++) {
    business[j].style.display = "block";
  }
  seeAll.classList.remove("active-btn");
  technicalBtn.classList.remove("active-btn");
  businessBtn.classList.add("active-btn");
  creativesBtn.classList.remove("active-btn");
  artsBtn.classList.remove("active-btn");
};
seeAll.onclick = function () {
  for (i = 0; i < all; i++) {
    allcourse[i].style.display = "block";
  }

  for (k = 0; k < allMviewcourse.length; k++) {
    allMviewcourse[k].style.setProperty("display", "inline");
  }
  seeAll.classList.add("active-btn");
  technicalBtn.classList.remove("active-btn");
  businessBtn.classList.remove("active-btn");
  creativesBtn.classList.remove("active-btn");
  artsBtn.classList.remove("active-btn");
};

var query = document.getElementsByClassName("query-asked");

for (var i = 0; i < 4; i++) {
  query[i].addEventListener("click", function () {
    $(".query-asked > .query-ans")
      .not($(this).children(".query-ans"))
      .fadeOut();

    $(".query-asked >.query-ques> button>.minus")
      .not(
        $(this).children(".query-ques").children("button").children(".minus")
      )
      .hide();
    $(".query-asked >.query-ques> button> .plus")
      .not($(this).children(".query-ques").children("button").children(".plus"))
      .show();
    $(".query-asked").not(this).removeClass("active-query", 500);
    var min = $(this)
      .children(".query-ques")
      .children("button")
      .children(".minus");
    var plu = $(this)
      .children(".query-ques")
      .children("button")
      .children(".plus");
    min.toggle();
    plu.toggle();
    var divToSlide = jQuery(this).children(".query-ans");
    divToSlide.fadeToggle();
    $(this).toggleClass("active-query", 500);
  });
}
/****************************change************************/

function video_open() {
  var lightBoxVideo = document.getElementById("TutedudeVideo");
  document.getElementById("thumbnail").style.display = "none";
  lightBoxVideo.play();
}

// function send(name,email){
//     $.ajax({
//         url: "googlesign.php",
//         type: 'post',
//         data:{
//             name:name,
//             email:email
//         },
//         success: function(){
// //				alert("hello");
// //				window.location.href = "http://tutedude.com";
// //			document.getElementById('LForm').style.display="none";
// //			document.getElementById('RForm').style.display="none";
// //			document.getElementById('disable-div').style.display="none";
// //			document.getElementById('hide-it').style.display="block";
// //			document.getElementById('hide-login').style.display="none";
// //			document.getElementById('hide-signup').style.display="none";
// //			document.getElementById('navbarDropdownMenuLink').innerHTML=name;
//         if(!sessionStorage.getItem('reloaded'))
//             {
//                 sessionStorage.setItem("reloaded","yes");
//                 location.reload(true);
//             }
//         }
//     });

// }

// function onSignIn(googleUser) {

// var profile = googleUser.getBasicProfile();
// var getname = profile.getName();
// var getemail = profile.getEmail();

// send(getname,getemail);
// }

// function signOut() {
// var auth2 = gapi.auth2.getAuthInstance();
// auth2.signOut().then(function () {
//   console.log('User signed out.');
//   sessionStorage.clear();
//   $.ajax({
//         url: "logout.php",
//         type: 'post',
//         data:{

//         },
//         success: function(response){
//         window.location.reload();
//         }
//     });
// });
// $.ajax({
//         url: "logout.php",
//         type: 'post',
//         data:{

//         },
//         success: function(response){
//         window.location.reload();
//         }
//     });
// }

/**
 * skills slider
 */
new Swiper(".skills-slider", {
  speed: 1000,

  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  // },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    120: {
      spaceBetween: 20,
    },
  },
  loop: true,
});

var sleft = document.querySelector(".swiper-button-next");
var leftbtn = document.querySelector(".left-btn");
leftbtn.addEventListener("click", () => {
  sright.click();
});
var sright = document.querySelector(".swiper-button-prev");
var rightbtn = document.querySelector(".right-btn");
rightbtn.addEventListener("click", () => {
  sleft.click();
});

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".scroll").hide();
  } else {
    $("#myDivId").show();
  }

  if ($(window).scrollTop() > 200) {
    $("#line").animate({ width: "100%" }, "slow", "linear");
  }
});

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
});

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    // document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";

    var load = 10;
    var id = setInterval(() => {
      if (load >= 90) {
        clearInterval(id);
        $("#loader .counter").text("...");
      } else {
        load += 10;
        $("#loader .counter").text(load);
      }
    }, 200);
  } else {
    $("#loader").animate({ borderWidth: "0" }, "slow");
    document.querySelector(".counter").style.display = "none";
    $("#after-load").css("visibility", "visible");
    setTimeout(function () {
      $("#loader").fadeOut("slow");
      // document.querySelector("#loader").style.display = "none";
    }, 2000);
  }
};
