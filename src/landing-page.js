import { renderTemplate } from './template.js';
export { renderLanding };

function renderLanding() {
    let template = renderTemplate();
    const mainContent = document.createElement('div');
    const welcomeContainer = document.createElement('div');
    const welcomeHeader = document.createElement('h1');
    const welcomeMessage = document.createElement('h2');
    const infoContainer = document.createElement('div');
    const infoPara1 = document.createElement('p');
    const infoPara2 = document.createElement('p');

    template.pageContainer.appendChild(mainContent);
    mainContent.setAttribute('id', 'mainContent');
    mainContent.appendChild(welcomeContainer);
    mainContent.appendChild(infoContainer);

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
};