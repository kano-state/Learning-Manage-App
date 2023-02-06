import React from 'react'
import NoteContents from './NoteContents'
import NoteList from './NoteList'
import "./note_style/Note.css"

function Note() {
  return (
    <div className='note'>
      <NoteList />
      <NoteContents />
    </div>
  )
}

export default Note