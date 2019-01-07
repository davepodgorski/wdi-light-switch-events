document.addEventListener('DOMContentLoaded', function() {

  var h1 = document.getElementsByTagName('h1')[0];
  var button = document.getElementsByClassName("switch")[0];
  var body = document.getElementsByTagName('body')[0];
  var on = document.getElementsByClassName("on")[0];
  var off = document.getElementsByClassName("off")[0];

      button.addEventListener('click', function() {
        if(body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        button.classList.remove("on");
        button.classList.add("off");
        h1.innerText = "Hey, who turned off the lights?";

      } else {
        body.classList.remove("dark");
        body.classList.add("light");
        button.classList.remove("off");
        button.classList.add("on");
        h1.innerText = "It's so bright in here!";
      }
    });
});
