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
 
  document.getElementById("profileImg").setAttribute("src", profile.image)

  if(profile.bio.length>1){
    $("#description").find(".description").text(profile.description);
  }else{
    $("#bio_2").text(profile.bio_2);
    $("#want_to_know_more").text(profile.want_to_know_more);
    profile.quotes.forEach(each=>{
      console.log(each,"each")
      $("#quotes").append(`<li>${each}</li>`)
    })
  }
  

 

  // Social icons
  document.getElementById("linkedin").setAttribute("href", profile.social.linkedin);
  document.getElementById("github").setAttribute("href", profile.social.github);
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


  let projects = $("#projectTemplate");

  projects.find("img").attr("src", each.project_image);

// badges

projects.find("#badge-box").empty()
  each.badges.forEach(each_badge=>{

    projects.find("#badge-box").append(`<span class="badge badge-info m-1 " id="badge">${each_badge}</span>`).css("font-size","12px",)

  })


  // buttons
  projects.find("#gitButton").removeAttr("href").css("display","")
  projects.find("#siteButton").removeAttr("href").css("display","")
  projects.find("#mediumButton").removeAttr("href").css("display","")

 if(each.github_link.length > 1){
    const git = projects.find("#gitButton").attr("href", each.github_link)
  }else{
    projects.find("#gitButton").css("display","none")
  }

  if(each.website_link.length > 1){
    const site = projects.find("#siteButton").attr("href", each.website_link)
  }else{
    projects.find("#siteButton").css("display","none")
  }
  if(each.medium_article.length > 1){
    const medium = projects.find("#mediumButton").attr("href", each.medium_article)
  }else{
    projects.find("#mediumButton").css("display","none")
  }


  projects.find(".project_title").text(each.title);
  projects.find("#date").text(each.date_completed).css("font-size", "13px");
  projects.find("p").text(each.description);
  projects.find("#more_details").empty();
  each.additional_points.forEach(each_item=>{
    projects.find("#more_details").append(`<li>${each_item}</li>`).css("font-size", "11px")

  })

$("#experienceContainer").append(projects.html());

}
)




    }

