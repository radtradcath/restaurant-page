export {renderLandingPage};
import Logo from './img/header-logo.svg'

function renderLandingPage() {
const body = document.querySelector('body');
const pageContainer = document.createElement('div');
const header = document.createElement('header');
const logo = document.createElement('div');
const nav = document.createElement('ul');
const navlink1 = document.createElement('li');
const navlink2 = document.createElement('li');
const navlink3 = document.createElement('li');
const mainContent = document.createElement('div');
const welcomeContainer = document.createElement('div');
const welcomeHeader = document.createElement('h1');
const welcomeMessage = document.createElement('h2');
const infoContainer = document.createElement('div');
const infoPara1 = document.createElement('p');
const infoPara2 = document.createElement('p');
const footer = document.createElement('footer');
const footerTM = document.createElement('div');
const credit1 = document.createElement('div');
const credit2 = document.createElement('div');
const creditLink1 = document.createElement('a');
const creditLink2 = document.createElement('a');


body.appendChild(pageContainer);
pageContainer.setAttribute('id', 'pageContainer');
pageContainer.appendChild(header);
pageContainer.appendChild(mainContent);
mainContent.setAttribute('id', 'mainContent');
mainContent.appendChild(welcomeContainer);
mainContent.appendChild(infoContainer);
pageContainer.appendChild(footer);


header.appendChild(logo);
header.appendChild(nav);
const myLogo = new Image();
const footerLogo = new Image();
footerLogo.src = Logo;
myLogo.src = Logo;
logo.appendChild(myLogo);


nav.appendChild(navlink1);
nav.appendChild(navlink2);
nav.appendChild(navlink3);
navlink1.textContent = "Home";
navlink2.textContent = "Menu";
navlink3.textContent = "Contact";


welcomeContainer.classList.add('welcome');
welcomeContainer.appendChild(welcomeHeader);
welcomeHeader.textContent = "Welcome to BBQ Bro!";
welcomeContainer.appendChild(welcomeMessage);
welcomeMessage.textContent = "What could be better than a suculent burger with crunchy fries? Oh, I see: THAT alongside a milk-shake!"


infoContainer.classList.add('info')
infoContainer.appendChild(infoPara1);
infoPara1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. "
infoContainer.appendChild(infoPara2);
infoPara2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum."

creditLink1.setAttribute('href', "https://www.freepik.com/free-vector/gradient-barbecue-logo-template_15291802.htm#query=hamburger%20logo&position=0&from_view=search&track=ais");
creditLink1.textContent = 'Image by Freepik';
creditLink2.setAttribute('href', "https://www.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_40222111.htm#query=burger%20background&position=27&from_view=keyword&track=ais#position=27&query=burger%20background");
creditLink2.textContent = 'Image by rorozoa, on Freepik';
credit1.appendChild(creditLink1);
credit2.appendChild(creditLink2);
footerTM.appendChild(footerLogo);
footer.appendChild(credit1);
footer.appendChild(footerTM);
footer.appendChild(credit2);

};