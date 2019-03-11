$( "#img1" ).on("mouseenter", function() {
  $( "#img1" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
  $( "#img3" ).animate({

    right: "+=390",
    bottom: "+=390"

  }, 2000, function() {
  });
  $( "#img4" ).animate({

    right: "+=590",
    bottom: "+=590"

  }, 2000, function() {
  });
  $( "#img2" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
});

$( "#img2" ).on("mouseenter", function() {
  $( "#img1" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
  $( "#img3" ).animate({

    right: "+=390",
    bottom: "+=390"

  }, 2000, function() {
  });
  $( "#img4" ).animate({

    right: "+=590",
    bottom: "+=590"

  }, 2000, function() {
  });
  $( "#img2" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
});

$( "#img3" ).on("mouseenter", function() {
  $( "#img1" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
  $( "#img3" ).animate({

    right: "+=390",
    bottom: "+=390"

  }, 2000, function() {
  });
  $( "#img4" ).animate({

    right: "+=590",
    bottom: "+=590"

  }, 2000, function() {
  });
  $( "#img2" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
});

$( "#img4" ).on("mouseenter", function() {
  $( "#img1" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
  $( "#img3" ).animate({

    right: "+=390",
    bottom: "+=390"

  }, 2000, function() {
  });
  $( "#img4" ).animate({

    right: "+=590",
    bottom: "+=590"

  }, 2000, function() {
  });
  $( "#img2" ).animate({

    left: "+=590",
    top: "+=590"

  }, 2000, function() {
  });
});


var s = 18473902;
window.onload=function(){
setInterval(function(){
  s+=27838;
  document.getElementById("sum").children[0].innerHTML=s;
},1000)
}
