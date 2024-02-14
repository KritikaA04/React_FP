export default function EmployeeDetails() {
    
    const UserContext = createContext();
    
    const [users, setUsers] = useState([
        {
          id: "1",
          createdAt: "2018-12-03T11:37:42.015Z",
          name: "Ms. Gaylord Streich",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg"
        },
        {
          id: "2",
          createdAt: "2018-12-02T21:06:49.825Z",
          name: "Roxanne Kunde",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg"
        },
        {
          id: "3",
          createdAt: "2018-12-03T03:37:39.995Z",
          name: "Dante Spencer",
          avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg"
        }
      ]);


    return (
        <UserContext.Provider value={{ users }}>
        </UserContext.Provider>
        
    );
}