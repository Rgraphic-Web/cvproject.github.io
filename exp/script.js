function toggleDiv() {
  var myDiv = document.getElementById("myDiv");
  var container1 = document.getElementById("container1");
  if (myDiv.style.display === "none") {
    myDiv.style.display = "table";
    myDiv.style.animation = "G1A 0.3s linear";
    container1.style.animation = "G1A 0.3s linear";
  } else {
    myDiv.style.display = "none";
  }
}

function toggleDiv2() {
  var myDiv2 = document.getElementById("myDiv2");
  var myDivsub2 = document.getElementById("myDivsub2");
  var myDivsub3= document.getElementById("myDivsub3");
  var container2= document.getElementById("container2")
  if (myDiv2.style.display === "none") {
    myDiv2.style.display = "table";
    myDivsub2.style.display = "table";
    myDivsub3.style.display = "table";
    myDiv2.style.animation = "G1A 0.3s linear";
    myDivsub2.style.animation = "G1A 0.3s linear";
    myDivsub3.style.animation = "G1A 0.3s linear";
    container2.style.animation = "G1A 0.3s linear";
  } else {
    myDiv2.style.display = "none";
    myDivsub2.style.display = "none";
    myDivsub3.style.display = "none";
  }
}

function toggleReadMore() {
    var longText = document.getElementById('longText');
    longText.classList.toggle('expanded');
    var buttonText = document.querySelector('button');
  
    if (longText.classList.contains('expanded')) {
      buttonText.textContent = 'Read Less';
    } else {
      buttonText.textContent = 'Read More';
    }
  }
  function toggleCards() {
    var cv3 = document.querySelector('.cv3');
    cv3.classList.toggle('show');
}

document.getElementById('squar1').addEventListener('mouseover', function() {
  document.body.style.backgroundImage = "url('Bimage3r.jpg')";
});

document.getElementById('squar1').addEventListener('mouseout', function() {
  document.body.style.backgroundImage = "url('Bimage3.jpg')";
});
document.getElementById('container2').addEventListener('mouseover', function() {
  document.body.style.backgroundImage = "url('Bimage3r.jpg')";
});

document.getElementById('container2').addEventListener('mouseout', function() {
  document.body.style.backgroundImage = "url('Bimage3.jpg')";
});
document.getElementById('container1').addEventListener('mouseover', function() {
  document.body.style.backgroundImage = "url('Bimage3r.jpg')";
});

document.getElementById('container1').addEventListener('mouseout', function() {
  document.body.style.backgroundImage = "url('Bimage3.jpg')";
});



var container4 = document.getElementById('container4');
var image = document.getElementById('image');

container4.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var imageX = (mouseX / window.innerWidth) * 20;
  var imageY = (mouseY / window.innerHeight) * 20;

  image.style.transform = 'translate(-' + imageX + '%, -' + imageY + '%)';
});

container4.addEventListener('mouseleave', function() {
  image.style.transform = 'translate(0, 0)'; // Reset to the initial position
});

var container4 = document.getElementById('container4');
var image2 = document.getElementById('image2'); // Updated variable name

container4.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var imageX = (mouseX / window.innerWidth) * 5;
  var imageY = (mouseY / window.innerHeight) * 5;

  image2.style.transform = 'translate(' + imageX + '%)';
});

container4.addEventListener('mouseleave', function() {
  image2.style.transform = 'translate(0, 0)'; // Reset to the initial position
})
function toggleDiv3() {
  if (container4.style.display === "none") {
    container4.style.display = "flex";
  } else {
    container4.style.display = "none";
  }
}
function toggleDiv4() {
  if (container5.style.display === "none") {
    container5.style.display = "flex";
  } else {
    container5.style.display = "none";
  }
}
function toggleDiv5() {
  if (container6.style.display === "none") {
    container6.style.display = "flex";
  } else {
    container6.style.display = "none";
  }
}
function toggleDiv6() {
  if (container7.style.display === "none") {
    container7.style.display = "flex";
  } else {
    container7.style.display = "none";
  }
}