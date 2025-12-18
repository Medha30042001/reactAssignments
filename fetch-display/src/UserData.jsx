import { useEffect, useState } from "react";

function UserData(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => {
            setTimeout(()=>{
                setUser(data);
                setLoading(false);
            }, 2000);
        });
    }, []);

    if(loading){
        return <h3>Loading...</h3>;
    }
    return(
        <>
            <h2>User Data</h2>
            <p>User Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </>
    );
}

export default UserData;