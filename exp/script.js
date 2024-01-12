function toggleDiv() {
    var myDiv = document.getElementById("myDiv");
    myDiv.style.display = (myDiv.style.display === "none") ? "table" : "none";
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
