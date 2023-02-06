import React from 'react'
import "./note_style/Note.css"
import AddContentButton from './AddNoteContent'

function NoteContents() {
  return (
    <div className='noteContents'>
        <div className='contents_body'>
            <div className='contents_date'>2023/01/30</div>
            <div className='contents_headerText'>
                    <h1>ここに記入します</h1>
                        <div className='content'>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias, porro ipsum impedit illum sunt. Eaque suscipit cumque perspiciatis, possimus dignissimos nam nihil, placeat quis repudiandae cupiditate quos accusamus alias.</h2>
                        </div>
                 
            </div>
         </div>
         <AddContentButton />
    </div>
  )
}

export default NoteContents