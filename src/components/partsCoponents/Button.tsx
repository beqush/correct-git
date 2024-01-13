
type ButtonProps = {
    name: string ;
    onclicke : React.MouseEventHandler<HTMLButtonElement> | undefined;
    className : string | undefined
    

}


const Button = (props : ButtonProps) => {

    return(
        <div className="w-[80px] h-[35px]  m-auto mt-[10px]">

            <button 
                className={props.className}
                onClick={props.onclicke}
                name={props.name}
            >
                {props.name}
            </button>

           
        </div>
    )
}

export default Button


