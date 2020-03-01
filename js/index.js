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




  // projects 

 profile.projects.forEach(each=>{

  
console.log(each.github_link,each.medium_article,each.website_link,"links")

  let projects = $("#projectTemplate");
  projects.find("img").attr("src", each.project_image);

  if(each.github_link.length>1){
    projects.find("#gitButton").attr("href", each.github)
  }else{
    projects.find("#gitButton").remove()
  }
  if(each.website_link.length >1){
    projects.find("#siteButton").attr("href", each.site)
  }else{
    projects.find("#siteButton").remove
  }
  if(each.medium_article.length>1){
    projects.find("#mediumButton").attr("href", each.medium_article)
  }else{
    projects.find("#mediumButton")
  }



  projects.find(".project_title").text(each.title);
  projects.find("p").text(each.description);
  projects.find("#more_details").empty();
  each.additional_points.forEach(each_item=>{
    projects.find("#more_details").append(`<li>${each_item}</li>`).css("font-size", "11px")

  })

$("#experienceContainer").append(projects.html());

}
)



  // for (let i = 0; i < profile.projects.length; i++) {
  //   let projects = $("#projectTemplate");
  //   projects.find("img").attr("src", profile.projects[i].project_image);
  //   projects.find("#gitButton").attr("href", profile.projects[i].github);
  //   projects.find("#siteButton").attr("href", profile.projects[i].site);
  //   projects.find(".project_title").text(profile.projects[i].title);
  //   projects.find("p").text(profile.projects[i].description);

  //   let more_details = profile.projects[i].additional_points.map(each=>{
  //     projects.find("#more_details").append(`<li>${each}</li>`).css("font-size", "10px")
  //   })
  //   projects.append(more_details)

  //   $("#experienceContainer").append(projects.html());
   
  // }


    }

