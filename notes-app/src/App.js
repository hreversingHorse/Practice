import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './servises/notes'

const App = () => {
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteService
      .getAll()
      .then(initNotes => {
        setNotes(initNotes)
      })
  }

  useEffect(hook,[])

  const notesToShow = showAll 
  ? notes 
  : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
        content: newNote, 
        date: new Date().toISOString(),
        important: Math.random() > 0.5
    }

    noteService.create(newNote).then(createdNote => {
      setNotes(notes.concat(createdNote))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(note => {
      if (note.id === id){
        return (note)
      }
    })

    const changedNote = {...note, important: !note.important}
    
    noteService.update(id,changedNote)
      .then(updatedNote => {
        setNotes(notes.map(note => {
          if (note.id !== id){
            return note
          } else {
            return updatedNote
          }
        }))
      })
      .catch(error => {
        alert(
          'note of intrest doesnt exist'
        )
        setNotes()
      })

  }

  const rows = () => notesToShow.map(note => 
    <Note
        key={note.id}
        note={note}
        toggleImportance={() => toggleImportanceOf(note.id)}
        />
    )

  return (
    <div>
        <h1>Notes</h1>
        <div>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
        </div>
        <ul>
            {rows()}
        </ul>
        <form onSubmit={addNote}>
            <input 
            value={newNote}
            onChange={handleNoteChange}/>
            <button type='submit'>save</button>
        </form>
    </div>
  )


};

export default App;
