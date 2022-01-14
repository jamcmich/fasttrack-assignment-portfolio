console.log("Welcome to my website!");

const getGitHubUser = async (url) => {
    try {
        // fetch and read JSON
        let response = await fetch("https://api.github.com/users/jamcmich");
        let user = await response.json();

        // get user's avatar
        let avatar = document.getElementById("github-avatar");
        avatar.src = user.avatar_url;
        avatar.classList.remove("hide");

        // get user's bio
        let bio = document.getElementById("github-bio");
        bio.textContent = `${user.bio.substring(21)}\r\n${user.bio.substring(0, 20)}`;
        bio.classList.remove("hide");

        // get user's hireable status
        let hired = document.getElementById("github-hired");
        switch (user.hireable) {
            case true:
                hired.textContent = "Looking for a full-time, entry-level position!";
                break;
            case false:
                hired.textContent = "Not available for work at this time.";
                break;
            case null:
                hired.textContent = "Looking for a full-time, entry-level position!";
                break;
            default:
                console.log(`Hireable property is ${user.hireable}`);
        }
        hired.classList.remove("hide");
    } catch (e) {
        console.log(`Error fetching data: ${e}`);
    }
}

const addClasses = () => {
    // social icons
    let social = document.querySelectorAll(".row .wrapper .col");
    social.forEach((el) => {
        el.classList.add("grow"); // create animation for hover-grow
    });

    // portrait
    let portrait = document.querySelector("#portrait");
    portrait.setAttribute("style", "animation: slideInRight 1 2s");

    // "Jacob McMichael" text
    let nameSpans = document.querySelectorAll("#overlap > p:nth-child(2) > span");

    nameSpans.forEach((el) => {
        el.classList.add("hanging-animation");
    });
}

const addEvents = () => {
    // overlay
    let overlay = document.getElementById("overlay");
    overlay.addEventListener("click", dismiss = () => {
        overlay.style.display = "none";
    });

    let viewResume = document.getElementById("view-resume");
    viewResume.addEventListener("click", show = () => {
        overlay.style.display = "block";
    });
}

const typewriterAnimation = () => {
    var messageArray = ["Software Engineer & Developer"]; // could make these random or sequential statements in the future
    var textPosition = 0;
    var speed = 100; // every (n)ms

    typewriter = () => {
        document.querySelector(".typewriter").innerHTML = messageArray[0].substring(0, textPosition) + '<span class="blinker-span">\u007C</span>';

        if (textPosition++ != messageArray[0].length)
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

/* functions calls */
getGitHubUser();

let spanMe = document.querySelectorAll("#overlap > p");
spanMe.forEach((el) => {
    spanWrapper(el);
});

addClasses();
addEvents();
typewriterAnimation();
