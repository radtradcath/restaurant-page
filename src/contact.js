import {renderTemplate} from './template.js';
export {renderContact};

function renderContact() {
    let template = renderTemplate();
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

    
    template.pageContainer.appendChild(formContainer);
    formContainer.appendChild(form);    
    formContainer.setAttribute('id', 'formContainer');
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
};

   
