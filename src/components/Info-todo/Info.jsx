import './Info.css'

// props it's object

export const Info = (props) => {
    const onDelete = () => {alert(props.text)}
    return (
        <div className="info">
            <div className='info_label'>
                <input type="checkbox" checked={props.checked} className="info_input"/>
                <span className={props.checked ? "checked" : ''}>{props.text} {props.number} {props.month}</span>
                
            </div>
            <div className='btns'>
                <button className="btn btn-success">Edit</button>
                <button onClick={onDelete} className="btn btn-danger">Del</button>
            </div>
        </div>
    )
}