/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Looking forward to it !!!",
    authors:
      "While my primary focus has been on practical applications and hands-on projects, I have not been involved in formal research projects. My journey in the field of [your field] has been centered around gaining practical experience, developing technical skills, and delivering real-world solutions. Although I haven't conducted formal research, my commitment to learning and innovation is reflected in the projects I've undertaken.",
    conferences:
      "Looking forward to it !!!",
    researchYr: 2025,
    citebox: "popup1",
    image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzZWFyY2h8ZW58MHx8MHx8fDA%3D",
    citation: {
      vancouver:
        "Looking forward to it !!!",
    },
    abstract:
      "While my portfolio might not showcase formal research endeavors, it is a testament to my practical skills, creativity, and eagerness to tackle challenges head-on. I am excited about the prospect of incorporating research elements into my future endeavors and contributing to the continuous advancement for engineering!",
    absbox: "absPopup1",
  },

  {
    title: "Looking forward to it !!!",
    authors:
      "I firmly believe that every project, regardless of its scale, involves a degree of exploration and problem-solving. My dedication to staying informed about the latest developments in [your field] allows me to bring a forward-thinking and adaptive mindset to my work. As I continue to grow in my professional journey, I am open to opportunities that may involve research initiatives to further broaden my understanding and contribute meaningfully to the field.",
    conferences:
      "Looking forward to it !!!",
    researchYr: 2025,
    citebox: "popup2",
    image: "https://media.istockphoto.com/id/1094783520/photo/putting-data-in-computer.webp?b=1&s=170667a&w=0&k=20&c=gsyVV8qCX40EQnQTO6itNydmwDLGgWhBwQM6edKabDs=",
    citation: {
      vancouver:
        "While my portfolio might not showcase formal research endeavors, it is a testament to my practical skills, creativity, and eagerness to tackle challenges head-on. I am excited about the prospect of incorporating research elements into my future endeavors and contributing to the continuous advancement for engineering",
    },
    abstract:
      "Looking forward to it !!!",
    absbox: "absPopup2",
  },

  
 
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
