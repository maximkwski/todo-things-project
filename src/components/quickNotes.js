export default function quickNotes() {
    const contentDiv = document.querySelector('#content');

    const notes = document.createElement('section');
    notes.id = 'notes';
    notes.innerHTML = 'Quick notes';
    contentDiv.appendChild(notes);
    
    return contentDiv;
}