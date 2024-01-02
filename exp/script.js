function toggleDiv() {
    var myDiv = document.getElementById("myDiv");
    myDiv.style.display = (myDiv.style.display === "none") ? "table" : "none";
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
  