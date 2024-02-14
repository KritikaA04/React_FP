export default function FilterEmpList(props) {
    return (
        <>
            Filter Employee List <input type="text" onChange={(event) => { props.filterEmployee(event.target.value)}} /><br/><br/>
        </>
    )
}