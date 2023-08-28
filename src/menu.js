import { renderTemplate } from './template.js';
export { renderMenu };
import Burger1 from './img/burger1.jpg';
import Burger2 from './img/burger2.jpg';
import Burger3 from './img/burger3.jpg';
import Burger4 from './img/burger4.jpg';
import Burger5 from './img/burger5.jpg';
import Burger6 from './img/burger6.jpg';

function renderMenu() {
    let template = renderTemplate();

    const burger1 = new Image();
    burger1.src = Burger1;
    const burger2 = new Image();
    burger2.src = Burger2;
    const burger3 = new Image();
    burger3.src = Burger5;
    const burger4 = new Image();
    burger4.src = Burger6;
    burger4.setAttribute('id', 'smallimg');
    const burger5 = new Image();
    burger5.src = Burger3;
    const burger6 = new Image();
    burger6.src = Burger4;  

    const mainContent = document.createElement('div');
    template.pageContainer.appendChild(mainContent);
    mainContent.setAttribute('id', 'menuContainer');

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "What will you order today?";
    mainContent.appendChild(menuHeader);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    mainContent.appendChild(menuContainer);

    const burger1container = document.createElement('div');
    const burger1label = document.createElement('div');
    burger1container.appendChild(burger1);
    burger1container.appendChild(burger1label);
    burger1label.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia gravida lectus non egestas. Nunc aliquam lorem vitae suscipit ornare. Nullam suscipit dignissim mi et ultricies.";
    menuContainer.appendChild(burger1container);

    const burger2container = document.createElement('div');
    const burger2label = document.createElement('div');
    burger2container.appendChild(burger2);
    burger2container.appendChild(burger2label);
    burger2label.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia gravida lectus non egestas. Nunc aliquam lorem vitae suscipit ornare. Nullam suscipit dignissim mi et ultricies.";
    menuContainer.appendChild(burger2container);

    const burger3container = document.createElement('div');
    const burger3label = document.createElement('div');
    burger3container.appendChild(burger3);
    burger3container.appendChild(burger3label);
    burger3label.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia gravida lectus non egestas. Nunc aliquam lorem vitae suscipit ornare. Nullam suscipit dignissim mi et ultricies.";
    menuContainer.appendChild(burger3container);

    const burger4container = document.createElement('div');
    const burger4label = document.createElement('div');
    burger4container.appendChild(burger4);
    burger4container.appendChild(burger4label);
    burger4label.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia gravida lectus non egestas. Nunc aliquam lorem vitae suscipit ornare. Nullam suscipit dignissim mi et ultricies.";
    menuContainer.appendChild(burger4container);

    const burger5container = document.createElement('div');
    const burger5label = document.createElement('div');
    burger5container.appendChild(burger5);
    burger5container.appendChild(burger5label);
    burger5label.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia gravida lectus non egestas. Nunc aliquam lorem vitae suscipit ornare. Nullam suscipit dignissim mi et ultricies.";
    menuContainer.appendChild(burger5container);

    const burger6container = document.createElement('div');
    const burger6label = document.createElement('div');
    burger6container.appendChild(burger6);
    burger6container.appendChild(burger6label);
    burger6label.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia gravida lectus non egestas. Nunc aliquam lorem vitae suscipit ornare. Nullam suscipit dignissim mi et ultricies.";
    menuContainer.appendChild(burger6container);
}