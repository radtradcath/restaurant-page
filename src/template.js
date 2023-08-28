export { renderTemplate };
import { renderContact } from './contact';
import Logo from './img/header-logo.svg'
import { renderLanding } from './landing-page';

function renderTemplate() {
    const body = document.querySelector('body');
    const pageContainer = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const nav = document.createElement('div');
    const navlink1 = document.createElement('button');
    const navlink2 = document.createElement('button');
    const navlink3 = document.createElement('button');
    const footer = document.createElement('footer');
    const footerTM = document.createElement('div');
    const credit1 = document.createElement('div');
    const credit2 = document.createElement('div');
    const creditLink1 = document.createElement('a');
    const creditLink2 = document.createElement('a');
    const myLogo = new Image();
    const footerLogo = new Image();
    

    footerLogo.src = Logo;
    myLogo.src = Logo;
    logo.appendChild(myLogo);

    body.appendChild(pageContainer);
    header.appendChild(logo);
    header.appendChild(nav);
    pageContainer.setAttribute('id', 'pageContainer');
    pageContainer.appendChild(header);
    pageContainer.appendChild(footer);

    nav.appendChild(navlink1);
    nav.appendChild(navlink2);
    nav.appendChild(navlink3);
    navlink1.textContent = "Home";
    navlink2.textContent = "Menu";
    navlink3.textContent = "Contact";
    const tabs = nav.querySelectorAll('button');
    

    function callback(e) {
        console.log('hahaa');
        switch (e.target.textContent) {
            case 'Home':
                body.removeChild(pageContainer); 
                renderLanding();
                break;
            case 'Contact':
                body.removeChild(pageContainer);            
                renderContact();
                break;
            case 'Menu':
                break;
            default:                
        }
    }

    tabs.forEach((tab) => {
        console.log('aqui');
        tab.addEventListener('click', callback);
    })

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

    return {
        body,
        pageContainer,
        header,
        logo,
        nav,
        navlink1,
        navlink2,
        navlink3,
        tabs,
        footer,
        footerTM,
        credit1,
        credit2,
        creditLink1,
        creditLink2,
        myLogo,
        footerLogo,
    }
};