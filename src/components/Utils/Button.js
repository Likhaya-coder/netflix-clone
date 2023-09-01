const Button = props => {
    return ( 
        <button type={`button || ${props.type}`} className={props.ClassName} onClick={props.onClick}>{props.children}</button>
     );
}
 
export default Button;