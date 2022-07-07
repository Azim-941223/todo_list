import './Create.css'
import { useState } from 'react'


export function Create(props){

    const [inputValue, setInputValue] = useState('')

    const submit = (event) =>{
        event.preventDefault();
        props.addNew(inputValue)
        setInputValue('')
    } //preventDefault это проедотвращает перезагрузку сайта(по умолчанию form обнавляется автоматически)

    const handleChange = (event) => {setInputValue(event.target.value)}

    return(
        <form className="input" onSubmit={submit}>
            <input value={inputValue} onChange={handleChange} type="text" 
            className="form-control" placeholder="Enter todo here" required/>
            <button type="submit" value={submit} className="btn btn-primary">Submit</button>
        </form>
)
}