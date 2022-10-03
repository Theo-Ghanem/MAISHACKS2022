Welcome to our **MAIS HACKS 2022** wiki!

The team: **Sabrina Mansour, Sehr Moosabhoy, Ryan Reszetnik, Theo Ghanem**

## Inspiration
We were looking for a project that we would find useful and so would other students, so we thought what do we all have to do at some point? Apply for jobs! So what if we can make that easier and maximize our chances or getting our dream job!

## What it does
Our website allows the user to input the job description for a desired job, followed by their current CV. We will then analyse the job description using to extract the key words using Natural Language Processing (with Cohere). Next step is to analyse the user's resume, and to separate the different sections. Once this is done the user will have the option to select the key words they would like to add to their resume. We then use openAI's Davinci GPT-3 to integrate those words into the user's CV. The user then has the option to download their newly tailored resume!

## How we built it
We wrote the front end in react and css and the backend started with django and huroku and then moved over to flask as the night went on. We also used co:here for natural language processing in order to parse the inputted job descriptions, openAI to rephrase sentences with keywords, Netlify to host our frontend, docker to deploy(?), domain.com for our amazing domain (seasonmycv.tech), and coil for monetization!

## Challenges we ran into
Throughout the project we faced many issues with the backend. Initially we had attempted to do our backend using Django but found uploading resumes to be extremely difficult. Eventually we decided to swap over to flask which had similar issues but was more manageable. With all of the requirements needed for our project, we soon realized that we would have to dockerize our website in order to make it run on huroku. Dockerizing was a bit challenging. We successfully created a container that we were able to use to run our website locally. However, upon trying to push and deploy this container on Huroku we faced errors that we ultimately couldn't resolve in time.
As for the frontend, we struggled with personalizing the MUI buttons. 
Also no sleep <3 


## Accomplishments that we're proud of
This project was very overwheleming at times and we did not think we would be able to finish it in under 24 hours, but we pushed through and worked non-stop, and we are very proud of the end result.

## What we learned
We learned how to implement AI in our projects and how to create a project with many moving parts  (this was very painful). 

## What's next for Season my CV
We would like to have a downloading features for the outputted CVs!

***

## Screenshots:

![1](https://user-images.githubusercontent.com/90062145/193464063-ff14c43a-4468-49aa-a680-cad7c2dc4de0.jpg)

![2](https://user-images.githubusercontent.com/90062145/193464070-b73a5633-98bf-45a3-b98c-2947c121d624.jpg)

![3](https://user-images.githubusercontent.com/90062145/193464071-794d9b3e-bad5-4e46-9963-32b4f916c803.jpg)

![4](https://user-images.githubusercontent.com/90062145/193464076-65712c72-4e84-495d-94e1-9e7b611287e0.jpg)

![5](https://user-images.githubusercontent.com/90062145/193464079-ae57bf94-733e-42eb-a0e0-0ecc073aed66.jpg)
