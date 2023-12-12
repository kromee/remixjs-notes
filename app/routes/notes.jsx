import { json, redirect } from '@remix-run/node';
import NewNote, { links as newNoteLinks } from '../components/NewNote';
import { getStoredNotes, storeNotes } from '../data/node.js';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import {Link, useCatch, useLoaderData } from '@remix-run/react';



//https://www.youtube.com/watch?v=RBYJTop1e-g&t=5286s
//1:07
//2:06
//https://github.com/academind/remix-practical-guide-course-resources/blob/main/Code/02%20Essentials/10%20Validating%20Input/notes.json
export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <main>
      <NewNote />
      <NoteList notes={notes}/>
    </main>
  );
}

export async function loader(){
  const notes = await  getStoredNotes();
  if (!notes || notes.length === 0) {
    throw json(
      { message: 'Could not find any notes.' },
      {
        status: 404,
        statusText: 'Not Found',
      }
    );
  }
  return notes;
}

export async function action ({request}){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    //add validation

    if (noteData.title.trim().length < 5){
      return {
        message:'El título deber contener más de 5 carácteres.'
      }
    }

    const existingNotes = await getStoredNotes();

    noteData.id= new Date().toISOString();
    const updatenNotes = existingNotes.concat(noteData);

    await storeNotes(updatenNotes);

    return redirect ('/notes');
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}


export function meta  () {
  return [
    { title: "Alls notes",
    description:'todas las notas eduardo' },
  ];
};

export function CatchBoundary() {
  const caughtResponse = useCatch();
  const message = caughtResponse.data?.message || 'Data not found.';
  return (
    <main>
      <NewNote />
      <p className='info-message'>{message}</p>
    </main>
  );
}


export function ErrorBoundary({ error }) {
  return (
    <main className="error">
      <h1>An error related to your notes occurred!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  );
}
