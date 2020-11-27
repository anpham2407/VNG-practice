const defaultSize = 24;
const defaultColor = "inherit";
const Button = (props) => {
    return (
        <button className={`${!!props.large ? 'large' : ''} ${!!props.gradient ? 'gradient' : ''} ${!!props.fullWidth ? 'full' : ''} ${!!props.className ? props.className : ""}`}>{!!props.label && props.label}</button>
    )
}
export default Button