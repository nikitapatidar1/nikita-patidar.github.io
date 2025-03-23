// Skills Section Code
const skills = [
    { name: "HTML", icon: "icons/html.png" },
    { name: "CSS", icon: "icons/css.png" },
    { name: "JavaScript", icon: "icons/javascript.png" },
    { name: "React.js", icon: "icons/react.png" },
    { name: "Redux", icon: "icons/redux.png" },
    { name: "Node.js", icon: "icons/node.png" },
    { name: "Express.js", icon: "icons/express.png" },
    { name: "MongoDB", icon: "icons/mongodb.png" },
    { name: "TypeScript", icon: "icons/typescript.png" },
    
    { name: "Tailwind CSS", icon: "icons/talwind.png" },
    
    
    { name: "JSON Server", icon: "icons/json.png" },
    { name: "REST API", icon: "icons/rest.png" },
   
    { name: "Postman", icon: "icons/postman.png" }
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    const img = document.createElement("img");
    img.src = skill.icon;
    img.alt = skill.name;

    const name = document.createElement("p");
    name.textContent = skill.name;

    skillCard.appendChild(img);
    skillCard.appendChild(name);
    skillsContainer.appendChild(skillCard);
});

// Typing Effect Code
const text = "Full Stack Developer | Backend Developer | Freelancer";
let index = 0;
const typingText = document.querySelector(".typing-text");

function typeEffect() {
    if (typingText) {  // Check if element exists
        typingText.textContent = text.substring(0, index);
        index++;

        if (index > text.length) {
            index = 0;
        }

        setTimeout(typeEffect, 150);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);