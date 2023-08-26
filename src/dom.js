export {renderLandingPage};

function renderLandingPage() {
const body = document.querySelector('body');
const pageContainer = document.createElement('div');
const header = document.createElement('header');
const logo = document.createElement('div');
const nav = document.createElement('ul');
const navlink1 = document.createElement('li');
const navlink2 = document.createElement('li');
const navlink3 = document.createElement('li');
const welcomeContainer = document.createElement('div');
const welcomeHeader = document.createElement('h1');
const welcomeMessage = document.createElement('h2');
const infoContainer = document.createElement('div');
const infoPara1 = document.createElement('p');
const infoPara2 = document.createElement('p');
const footer = document.createElement('footer');
const footerTM = document.createElement('div');

body.appendChild(pageContainer);
pageContainer.setAttribute('id', 'pageContainer');
pageContainer.appendChild(header);
pageContainer.appendChild(welcomeContainer);
pageContainer.appendChild(infoContainer);
pageContainer.appendChild(footer);


header.appendChild(logo);
header.appendChild(nav);


nav.appendChild(navlink1);
nav.appendChild(navlink2);
nav.appendChild(navlink3);


welcomeContainer.classList.add('welcome');
welcomeContainer.appendChild(welcomeHeader);
welcomeHeader.textContent = "Hi, this is my new website";
welcomeContainer.appendChild(welcomeMessage);


infoContainer.classList.add('info')
infoContainer.appendChild(infoPara1);
infoPara1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt sint vero labore eaque qui."
infoContainer.appendChild(infoPara2);
infoPara2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat reprehenderit eius. Debitis sit laborum, praesentium perferendis maiores ex doloribus molestiae! Maiores minus repellat tenetur voluptas molestias quibusdam optio dolorum."


footer.appendChild(footerTM);
};