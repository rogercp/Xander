let profile = {

name: "Xander Bennett",
resume:"Resume",
description: "Data Scientist / Machine Learning Engineer",
bio:"I’m Xander. I’m a data scientist and machine learning engineer with a finance background, and I think that data science is the key to obtaining a winning formula. My interests are all over the place, and data science can be used to make tidy conclusions about all of them and more.",
email: "zanderwhiteleybennett@gmail.com",
location: "San Diego, California",

social: {
resume:"./data/Resume.pdf",
linkedin: "https://www.linkedin.com/in/xander-bennett/",
github: "https://github.com/xander-bennett",
medium: "https://medium.com/@zanderwhiteleybennett"
},

about:{
main:"Hello! My name is Xander Bennett. I live in San Diego, CA with my wife and our dynamic cat-dog duo. I am a Data Engineer with a focus on machine learning. I love programming and am usually busy with side projects. My favorite language is Python, and I use SQL a ton. Much of my programming interest is geared toward the full data science tech stack; from ETL pipelines to visualizing predictive outputs.",
i_like:["programming","lacrosse", "gaming" ,"hip hop",  "speaking spanish", "burgers" ,"reading"],
worked_at:["Lambda School", "Addepar", "Deseret Mutual Benefit Advisors" ],
lived_in:[ "California", "Utah","Mexico" ]
},

projects:[

{
    title:"Sound Drip",
    description:"An app that integrates your Spotify premium account and uses machine learning to curate a list of songs that match your musical tastes.",
    additional_points:["Built a production-level KNN machine learning model on a manually aggregated dataset of more than 700,000 individual songs","Iterated on machine-learning models to filter based off of genre, and match on acoustical qualities.","Tested other supervised and unsupervised learning methods to improve performance, including XGBoost","Deployed our machine learning back-end flask instance to AWS Elastic Beanstalk","Launched back-end DB to track and store user data and song recommendations"],
    project_image:"./images/sound_drip.png",
    website_link:"https://www.sound-drip.com/",
    github_link:"https://github.com/Lambda-School-Labs/Music-Meteorologist-ds",
    medium_article:"",
    date_completed:"March 2020"
},
{

    title:"Airbnb Optimal Pricing",
    description:" An app for Airbnb hosts in Germany that uses your machine learning to predict what you should charge for your listing in Berlin!",
    additional_points:["Built a random forest machine learning model to make supervised predictions on AirBnB data","Deployed our production model to flask","Integrated our flask app with back-end developers to feed recommendations to the DB"],
    project_image:"./images/airbnb.png",
    website_link:"https://airbnb-optimizedpricing.now.sh/login",
    github_link:"https://github.com/AirBnB-Optimal-Price-1-LS/Data-Engineering-Machine-Learning ",
    medium_article:"",
    date_completed:"November 2019"
},
{

    title:"CopStop Predictions",
    description:"Having recently moved to San Diego, I accessed their data portal and looked at every recorded instance of an officer pulling someone over from July 2018 - July 2019 and used machine learning to predict whether someone would get a ticket or not",
    additional_points:["Explored / visualized data while feature engineering to optimize performance","Built supervised machine learning model, specifically random forest"],
    project_image:"./images/copstop.png",
    website_link:"",
    github_link:"https://github.com/xander-bennett/San-Diego-Police-Data/blob/master/San%20Diego%20Police%20Data/San%20Diego%20Data%20Notebook.ipynb",
    medium_article:"https://medium.com/@zanderwhiteleybennett/do-you-know-why-i-pulled-you-over-a1b937b11665?source=friends_link&sk=fe2396e5657826d404a7740b3614a644",
    date_completed:"September 2019"

}


]





}