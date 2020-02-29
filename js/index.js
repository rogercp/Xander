document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

function onload() {
    populateHTML();
  
  }
  
const populateHTML = () =>{
// Profile image
if (profile.picture != "") {
    $("#profileImg").attr("src", profile.picture);
  }
  $("#profileImg").attr("alt", profile.name);
  // About
  $("#smallName").text(profile.name);
  $("#name")
    .find(".first")
    .text(profile.name.split(" ")[0]);
  $("#name").find(".second").text(
        profile.name
        .split(" ")
        .slice(1)
        .join(" ")
    );
  document.getElementById("location").innerHTML = profile.location;
 
  $("#email").find(".email").text(profile.email);
  document.getElementById("email").setAttribute("href", "mailto:" + profile.email);
  document.getElementById("resume").setAttribute("href", profile.social.resume)
  $(".resume").text(profile.resume);
  $("#description").find(".quote")
    // .text(`"${profile.quote}"`);
  $("#description").find(".description").text(profile.description);
  
  // Social
  document.getElementById("linkedin").setAttribute("href", profile.social.linkedin);
  document.getElementById("github").setAttribute("href", profile.social.github);
  document.getElementById("twitter").setAttribute("href", profile.social.twitter);
  document.getElementById("medium").setAttribute("href", profile.social.medium);
  document.getElementById("bio-text").innerHTML = profile.bio;


  // education
  for (var i = 0; i < profile.education.length; i++) {
    var educationTemplate = $("#credsTemplate");
    educationTemplate.find(".mb-0").text(profile.education[i].school);
    educationTemplate.find(".mb-3").text(profile.education[i].degree);
    educationTemplate.find("p").text(profile.education[i].fieldOfStudy);
    educationTemplate.find(".location").text(profile.education[i].location);
    educationTemplate
      .find(".date-from")
      .text(profile.education[i].from );
    educationTemplate
      .find(".date-to")
      .text(profile.education[i].to );

    $("#educationContainer").append(educationTemplate.html());
    if (i < profile.education.length - 1)
      $("#educationContainer").append(document.createElement("hr"));
  }



    }

