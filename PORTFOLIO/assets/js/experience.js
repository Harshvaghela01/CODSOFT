AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Developer Intern",
    cardImage: "assets/images/experience-page/codsoooof.jpg",
    place: "CODSOFT",
    time: "(November, 2023 - present)",
    desp: "<li>I successfully navigated the intricacies of web app hosting, mastering the deployment process to ensure seamless and efficient access to web applications. Understanding the nuances of hosting platforms and optimizing for performance became second nature, enabling me to deliver robust and accessible web solutions.</li> <li>My internship at CODSOFT has not only equipped me with the technical skills essential for web development but has also instilled in me a deep appreciation for collaboration, problem-solving, and continuous learning. I am excited to leverage my newfound skills and experiences in future projects, contributing to the ever-evolving landscape of web development.</li>",
  },
 
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards


// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "WEATHER APP DJANGO Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/images.jpg",
    desp: "The Weather Website project developed using Django is a web application that provides users with up-to-date weather information for specific locations. This project leverages Django's capabilities to create a user-friendly and feature-rich platform for accessing weather forecasts and related data.",
    href: "https://github.com/Harshvaghela01/Weather-App-Django",
  },
  {
    title: "E-commerce Django",
    subtitle: "Mentor",
    image: "assets/images/experience-page/download (1).jpg",
    desp: "The E-commerce website project developed using Django is a comprehensive online platform designed to facilitate the buying and selling of products or services over the internet. This project leverages the power of Django, a high-level Python web framework, to create a feature-rich and scalable online shopping experience.",
    href: "https://github.com/Harshvaghela01/E-commerce-Django",
  },
  {
    title: "FOOD Recipie website",
    subtitle: "Mentor",
    image: "assets/images/experience-page/images (1).jpg",
    desp: "Food-Recipe is a React-based food recipe project that simplifies culinary exploration. Users can browse a diverse collection of recipes, each with step-by-step instructions and ingredient lists. The intuitive interface makes it easy to find, save, and share delicious recipes, enhancing the culinary journey for food enthusiasts.",
    href: "https://github.com/Harshvaghela01/FOOD-RECIPE-WEBSITE",
  },
  {
    title: "Advertisement Website React",
    subtitle: "Mentor",
    image: "assets/images/experience-page/download (2).jpg",
    desp: "About The Advertise Me project combines React for the frontend, Express.js for the server, and Node.js for backend development. It provides a dynamic platform for creating, managing, and displaying advertisements. Users can create ad campaigns, target specific demographics, and monitor ad performance..",
    href: "https://github.com/Harshvaghela01/Advertisement-website-React",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
