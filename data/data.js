let profile = {

name: "Xander Bennett",
description: "Machine Learning Engineer / Data Engineer",
bio:"",
bio_2:"I'm a huge data geek with a finance background. I also love quotes, so here are some about data:",
quotes:["“Without big data, you are blind and deaf and in the middle of a freeway.” – Geoffrey Moore","“In God we trust, all others bring data.” — W Edwards Deming","“Data is the new oil.” — Clive Humby","“No great marketing decisions have ever been made on qualitative data.” – John Sculley","“Torture the data, and it will confess to anything.” – Ronald Coase","“It is a capital mistake to theorize before one has data.” — Sherlock Holmes","“Without a systematic way to start and keep data clean, bad data will happen.” — Donato Diorio"],
want_to_know_more:"If you'd like to talk more about data with me (and get the rest of the list of quotes) my contact info is here:",
email: "zanderwhiteleybennett@gmail.com",
location: "San Diego, California",
image:"./images/Xander.JPG",
social: {
resume:"./images/Alexander_Bennett_Resume.pdf",
linkedin: "https://www.linkedin.com/in/xander-bennett/",
github: "https://github.com/xander-bennett",
medium: "https://medium.com/@zanderwhiteleybennett"
},

about:{
main:"Hello! My name is Xander Bennett. I live in San Diego, CA with my wife and our dynamic cat-dog duo. I'm a data scientist with a focus on machine learning. I love programming and am usually busy with side projects. My favorite language is Python, and I use SQL a ton. Much of my programming interest is geared toward the full data science tech stack; from ETL pipelines to machine learning algorithms.",
i_like:["programming","lacrosse", "gaming" ,"hip hop",  "speaking spanish", "burgers" ,"reading"],
worked_at:["Lambda School", "Addepar", "Deseret Mutual Benefit Advisors" ],
lived_in:[ "California", "Utah","Mexico" ]
},

projects:[
{
    title:"Sick Leave Certainty",
    description:"Using Python, SQL, and Tableau to predict whether an employee will be absent for an extended period of time.",
    additional_points:["Engineered new features for machine learning optimization",,"Built a logistic regression machine learning algorithm"," Integrated machine learning predictions with a MYSQL database","Contructed user-friendly visualizations in tableau for further anlaysis"],
    project_image:"./images/sick_employee.png",
    website_link:"",
    github_link:"https://github.com/xander-bennett/human-resources-analytics",
    medium_article:"",
    date_completed:"August 2020",
    badges:["Python",
       "Machine Learning",
        "Exploratory Data Analysis",
        "Logistic Regression",
        "SQL",
        "Data Visualization",
        "Tableau"]
},
{
    title:"Who Will Click the Ad?",
    description:"Using data science and machine learning on advertising data to predict which target customers are more likely to click on a marketing ad.",
    additional_points:["Cleaned raw advertising data and performed feature engineering","Uncovered bimodal distributions using data visualizations","Built a logistic regression machine learning pipeline, achieving overall accuracy of 96% and an F1 score of 98%"],
    project_image:"./images/Digital-marketing.png",
    website_link:"",
    github_link:"https://github.com/xander-bennett/marketing-muse",
    medium_article:"",
    date_completed:"May 2020",
    badges:["Python",
       "Machine Learning",
        "Exploratory Data Analysis",
        "Logistic Regression",
        "Grid Search",
        "Data Visualization"]
},

{
    title:"Sound Drip",
    description:"An app that integrates your Spotify premium account and uses machine learning to curate a list of songs that match your musical tastes.",
    additional_points:["Built a production-level KNN machine learning model on a manually aggregated dataset of more than 700,000 individual songs","Iterated on machine-learning models to filter based off of genre, and match on acoustical qualities","Migrated existing web app functions from Heroku to AWS, leveraging Elastic Beanstalk, RDS, EC2, and S3","Launched docker image on AWS ECS, improving performance by 33%"],
    project_image:"./images/sound_drip.png",
    website_link:"",
    github_link:"https://github.com/Lambda-School-Labs/Music-Meteorologist-ds",
    medium_article:"",
    date_completed:"March 2020",
    badges:["Python",
        "PostgreSQL",
       "Machine Learning",
        "APIs",
        "K-Nearest Neighbors",
        "Data Engineering",
        "AWS", "Docker"]
},
{

    title:"Airbnb Optimal Pricing",
    description:" An app for Airbnb hosts in Germany that uses machine learning to predict what you should charge for your listing in Berlin!",
    additional_points:["Performed exploratory data analysis to refine feature variable selection for machine learning","Built machine learning pipeline with Python classification algorithms, achieving highest accuracy score of 90%","Deployed production model to Flask API to serve predictions to front-end engineers"],
    project_image:"./images/airbnb.png",
    website_link:"https://airbnb-optimizedpricing.now.sh/login",
    github_link:"https://github.com/AirBnB-Optimal-Price-1-LS/Data-Engineering-Machine-Learning ",
    medium_article:"",
    date_completed:"November 2019",
    badges:["Machine Learning",
        "Random Forest",
        "Flask",
        "Python",
        "Data Engineering"]
},
{

    title:"CopStop Predictions",
    description:"Having recently moved to San Diego, I accessed their data portal and looked at every recorded instance of an officer pulling someone over from July 2018 - July 2019 and used machine learning to predict whether someone would get a ticket or not",
    additional_points:["Explored / visualized data while feature engineering to optimize performance","Built supervised machine learning model, specifically random forest", "Achieved overall F1 score of 89%"],
    project_image:"./images/copstop.png",
    website_link:"",
    github_link:"https://github.com/xander-bennett/San-Diego-Police-Data",
    medium_article:"",
    date_completed:"September 2019",
    badges:["Python",
        "Machine Learning",
        "Data Visualization",
        "Exploratory Data Analysis",
        "Random Forest"]

}


]





}
