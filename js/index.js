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
  
  // Social icons
  document.getElementById("linkedin").setAttribute("href", profile.social.linkedin);
  document.getElementById("github").setAttribute("href", profile.social.github);
  document.getElementById("medium").setAttribute("href", profile.social.medium);
  document.getElementById("bio-text").innerHTML = profile.bio;


  // about

  let aboutTemplate = $("#aboutTemplate")
  aboutTemplate.find("#about-text").text(profile.about.main)

  const likes = profile.about.i_like.forEach(each=>{
    aboutTemplate.find("#likes").append(`<li>${each}</li>`)
  })
  aboutTemplate.append(likes)
  
  const worked = profile.about.worked_at.forEach(each=>{
    aboutTemplate.find("#worked").append(`<li>${each}</li>`)
  })
  aboutTemplate.append(worked)
  
  const lived = profile.about.lived_in.forEach(each=>{
    aboutTemplate.find("#lived").append(`<li>${each}</li>`)
  })
  aboutTemplate.append(lived)
  

  $("#aboutContainer").append(aboutTemplate.html());

    }

