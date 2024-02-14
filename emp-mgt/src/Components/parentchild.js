export function ChildComponent(props)
{
    return (
        <div>
            <h1>This is child element {props.designation}</h1>
        </div>
    )
}
export default function ParentComponent(props)
{
    return (
        <div>
            <h1>This is parent element {props.obj.age}</h1>
            <div style={{marginLeft: "20px"}}>
                <ChildComponent {...props}></ChildComponent>
            </div>           
        </div>
    )
}