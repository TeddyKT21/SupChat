export const Icon = ({icon, onClick }) => {
    return (
        <div className="Icon" onClick={onClick}>
            <img src={icon}/>
        </div>
    )
}