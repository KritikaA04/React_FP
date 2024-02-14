const ConditionIteration = (props) => {
    // scope-1
    var user="Kritika";
    function getDetails() {
        // scope-2 inner scope => closure in JS 
        // the inner function will have access to the variables of outer function

        function three()
        {
            // debugger;
            alert(user)
        }

        three();

        // debugger;
        if (props.city == "delhi" || props.city == "Mumbai") 
        {
            return <h2>Welcome as Senior Developer in Delhi NCR</h2>
        } 
        else if (props.city == "Banglore") 
        {
            return <h2>Welcome as Senior Developer in {props.city}</h2>
        }

        
    }
    
    return(
        <div>
            <h1> UserName: {props.name} </h1>
            {(props.salary >= 20) && (
            <div>
                {getDetails()}
                {/* {props.city == "delhi" && <h2>Senior Dev in Delhi</h2>}
                {props.city == "bangalore" && <h2>Senior Dev in Bangalore</h2>} */}
            </div>
            )}

            {props.salary < 20 && <h2>Junior Dev</h2>}
        </div>
    )
}

export default ConditionIteration;