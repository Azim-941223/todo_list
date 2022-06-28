import './Create.css'

export function Create(){
    return(
        <form className="input">
            <input type="text" className="form-control" placeholder="Enter todo here"/>
            <button type="button" className="btn btn-primary">Submit</button>
        </form>
)
}