import './Info.css'
import { useState } from 'react'
// props it's object

export const Info = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const [editValue, setEditValue] = useState(props.text)

    const onDelete = () => {
        props.onDelete(props.id)
    }
    const handleCheck = () => {
        props.onCheck(props.id)
    }
    const editInp = () => {
        setIsEdit(!isEdit)
    }
    const editSubmit = (event) => {
        event.preventDefault();
        props.isEdit(editValue, props.id);
        setIsEdit(false)
    }
    return (
        <div className="info">
            <div>
                {
                    isEdit
                        ? <form className='hidden' onSubmit={editSubmit}>
                            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} className='edit_int' required />
                            <button className='btn btn-primary edit'>Submit</button>
                        </form>
                        : <div className='info_label'>
                            <input type="checkbox" checked={props.checked} className="info_input" onChange={handleCheck} />
                            <span className={props.checked ? "checked" : ''}>{props.text}</span>
                        </div>
                }
            </div>
            <div className='btns'>
                <button onClick={editInp} className="btn btn-success" >Edit</button>
                <button onClick={onDelete} className="btn btn-danger">Del</button>
            </div>
        </div>
    )
}