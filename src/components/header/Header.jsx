import './Header.css'

export function Header(props){
    return(
        <header className="Header-wrapper">
            Todo <span>({props.state.length} / {props.state.filter((item)=>item.checked).length})</span> 
        </header>
    )
}
