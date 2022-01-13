console.log("Welcome to my website!");

const addClasses = () => {
    // social icons
    let social = document.querySelectorAll(".row .wrapper .col");
    social.forEach((el) => {
        el.classList.add("grow"); // create animation for hover-grow
    });

    // portrait
    let portrait = document.querySelector("#portrait");
    portrait.setAttribute("style", "animation: slideInRight 1 1s");

    // "Jacob McMichael" text
    let nameSpans = document.querySelectorAll("#overlap > p:nth-child(2) > span");

    nameSpans.forEach((el) => {
        el.classList.add("hanging-animation");
    });
}

const typewriterAnimation = (el) => {
    var messageArray = ["Software Engineer & Developer"]; // could make these random or sequential statements in the future
    var textPosition = 0; 
    var speed = 100;

    typewriter = () => {
        document.querySelector(".typewriter").innerHTML = messageArray[0].substring(0, textPosition) + '<span class="blinker-span">\u007C</span>';
      
        if(textPosition++ != messageArray[0].length)
          setTimeout(typewriter, speed);
      }
      
      window.addEventListener("load", typewriter)
}

const spanWrapper = (el) => {
    var s = el.innerHTML;
    console.log(s);
    var out = '';
    for (var i = 0; i < s.length; ++i) {
        var ch = s.charAt(i);
        if (ch == '<') {
            while (ch != '>') {
                out += ch;
                ch = s.charAt(++i);
            }
            out += ch;
            continue;
        }
        if (ch == ' ') {
            out += `<br>`;
        } else {
            out += `<span>${ch}</span>`;
        }
    }
    // document.querySelector("#overlap").innerHTML = out;
    $(el).html(out);
}

let spanMe = document.querySelectorAll("#overlap > p");
spanMe.forEach((el) => {
    spanWrapper(el);
});

let message = document.querySelector(".typewriter");
typewriterAnimation(message);
addClasses();