import React, {useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import api from "../helper/api"
import './company.css'
const EditDelete = () => {
    

    return (
        <div>
            <button 
             type='button'
             variant='contained'
             color='secondary'
             id='edit_btn'
    >
             <EditIcon />
             </button>
             <button 
             id='delete_btn'>
             <DeleteIcon/>
            </button>
        </div>
    )
}

export default EditDelete;