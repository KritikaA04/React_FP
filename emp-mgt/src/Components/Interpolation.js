export default function InterpolationComponent(props) {
    return (
        <div>
            <h1>Hello {props.userName} designated as {props.userDesignation}.</h1>
            <h2>Random Number is: { Math.floor(Math.random() * 100) }</h2>
        </div>
    )
}