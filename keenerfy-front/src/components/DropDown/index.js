function DropDown(props) {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.items.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown