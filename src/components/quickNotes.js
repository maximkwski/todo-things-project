import '../styles/notes.css';
import { notes, addNote, removeNote, saveNotes } from "./todos";

export default function quickNotes() {
    const contentDiv = document.querySelector('#content');

    const notesElement = document.createElement('section');
    notesElement.id = 'notes';

    notes.forEach(note => {
        const noteItem = document.createElement('div'); //note item
        noteItem.classList.add('note-item');

        const date_h3 = document.createElement('h3');
        date_h3.innerHTML = note.date;

        const note_input = document.createElement('textarea');
        note_input.name = 'textarea';
        note_input.value = `${note.content}`;
        note_input.placeholder = 'type your note here..';

        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-note');
        const span = document.createElement('span');
        span.classList.add('cross');
        deleteBtn.appendChild(span);


        noteItem.appendChild(date_h3);
        noteItem.appendChild(note_input);
        noteItem.appendChild(deleteBtn);
        notesElement.appendChild(noteItem);


        note_input.addEventListener('blur', e => {
            note.content = e.target.value;
            saveNotes();
            quickNotes();

        })
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