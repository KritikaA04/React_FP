export default function DisplayTimeComponent()
{
   

    function rcurrent()
    {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    var currenttime= rcurrent()

    setInterval(function getFreshData()
    {
        currenttime= rcurrent();
        console.log(currenttime);
    },1000)
    return <h2>current time: {currenttime}</h2>
}