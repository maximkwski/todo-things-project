import '../styles/notes.css';
import { notes, addNote, removeNote } from "./todos";

export default function quickNotes() {
    const contentDiv = document.querySelector('#content');

    const notesElement = document.createElement('section');
    notesElement.id = 'notes';
    notesElement.innerHTML = 'Quick notes';

    notes.forEach(note => {
        const noteItem = document.createElement('div'); //note item
        noteItem.classList.add('note-item');

        const date_h3 = document.createElement('h3');
        date_h3.innerHTML = note.date;

        const note_input = document.createElement('input');
        note_input.type = 'text';
        note_input.placeholder = 'type your note here..';


        noteItem.appendChild(date_h3);
        notesElement.appendChild(noteItem);
    });

    const addNoteBtn = document.createElement('input');
    addNoteBtn.type = 'button';
    addNoteBtn.value = 'Create Note';
    notesElement.appendChild(addNoteBtn);

    addNoteBtn.addEventListener('click', e => {
        const note = {
            content: '',
            createdAt: new Date().getTime(),
            date: new Date().toLocaleDateString()
        }
        addNote(note);
        console.log(notes);
    })

    contentDiv.appendChild(notesElement);
    
    return contentDiv;
}