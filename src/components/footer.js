import gitIcon from '../assets/github-logo.png';

export default function footer() {
    const footerElement = document.getElementById('footer');

      const footerContainer = document.createElement('div');
      footerContainer.classList.add('footer-container');
  
      const footerIcon = new Image();
      footerIcon.src = gitIcon; 
      footerContainer.innerHTML = "built & designed by";
      footerContainer.appendChild(footerIcon);
      const gitLink = document.createElement('a');
      gitLink.innerHTML = 'maximkwski';
      gitLink.target = "_blank";
      gitLink.rel = "noopener noreferrer";
      gitLink.href = "https://github.com/maximkwski";
      footerContainer.appendChild(gitLink);
      
      footerContainer.innerHTML += " | ";
      const sourceLink = document.createElement('a');
      sourceLink.innerHTML = 'source';
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener noreferrer";
      sourceLink.href = "https://github.com/maximkwski/todo-things-project";

      footerContainer.appendChild(sourceLink);

      const iconsBy = document.createElement('div');
      iconsBy.classList.add('icons-ref');
      iconsBy.textContent = 'Icons by ';
      const iconsAnchor = document.createElement('a');
      iconsAnchor.href = 'https://www.flaticon.com/free-icons/to-do';
      iconsAnchor.title = 'to do icons';
      iconsAnchor.textContent = 'Graphics Plazza - Flaticon';
      iconsBy.appendChild(iconsAnchor);
      
      

      footerElement.appendChild(footerContainer);
      footerElement.appendChild(iconsBy);

    return footerElement;
}