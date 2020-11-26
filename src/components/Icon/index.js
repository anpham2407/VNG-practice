const Icon = (props) => {
    return (
        <span className={`material-icons ${!!props.className ? props.className : ''}`}>{props.name}</span>
    )
}
export default Icon