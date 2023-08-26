export { renderContactPage };
import Logo from './img/header-logo.svg'

let renderContactPage = function () {
    const body = document.querySelector('body');
    const pageContainer = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const nav = document.createElement('ul');
    const navlink1 = document.createElement('li');
    const navlink2 = document.createElement('li');
    const navlink3 = document.createElement('li');
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const formTitle = document.createElement('div');
    const nameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const commLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const commInput = document.createElement('textarea');
    const submitBtn = document.createElement('button');
    const footer = document.createElement('footer');
    const footerTM = document.createElement('div');
    const credit1 = document.createElement('div');
    const credit2 = document.createElement('div');
    const creditLink1 = document.createElement('a');
    const creditLink2 = document.createElement('a');
    

    body.appendChild(pageContainer);
    pageContainer.setAttribute('id', 'pageContainer');
    pageContainer.appendChild(header);
    pageContainer.appendChild(formContainer);
    formContainer.appendChild(form);
    pageContainer.appendChild(footer);
    formContainer.setAttribute('id', 'formContainer');
    

    header.appendChild(logo);
    header.appendChild(nav);
    const myLogo = new Image();
    const footerLogo = new Image();
    footerLogo.src = Logo;
    myLogo.src = Logo;
    logo.appendChild(myLogo);

    formTitle.textContent = "Submit your message!"    

    nameLabel.setAttribute('for', 'username');
    nameLabel.textContent = "Name";
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'username');
    nameInput.setAttribute('name', 'name');

    emailLabel.setAttribute('for', 'usermail');
    emailLabel.textContent = 'E-mail';
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'usermail');
    emailInput.setAttribute('name', 'usermail');

    commLabel.setAttribute('for', 'comment');
    commLabel.textContent = 'Description'
    commInput.setAttribute('type', 'textarea');
    commInput.setAttribute('id', 'comment');
    commInput.setAttribute('name', 'comment');
    commInput.setAttribute('rows', '15');
    commInput.setAttribute('cols', '50');

    submitBtn.textContent = 'Send!'

    form.appendChild(formTitle);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(commLabel);
    form.appendChild(commInput);
    form.appendChild(submitBtn);

    nav.appendChild(navlink1);
    nav.appendChild(navlink2);
    nav.appendChild(navlink3);
    navlink1.textContent = "Home";
    navlink2.textContent = "Menu";
    navlink3.textContent = "Contact";

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
}