const defaultSize = 24;
const defaultColor = "inherit";
const Icon = (props) => {
    return (
        <span 
            className={`material-icons ${!!props.className ? props.className : ''}`}
            style={{
                fontSize: !!props.size ? props.size : defaultSize,
                color: !!props.color ? props.color : defaultColor
            }}
        >
            {props.name}
        </span>
    )
}
export default Icon