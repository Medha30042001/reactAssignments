import { NavLink, useNavigate } from "react-router-dom"

const NavBar = () => {
    const isLoggedIn = (localStorage.getItem("isLoggedIn") || "") === "true";
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login')
    }

    return (
    <>
    <div className="navBar">
        <NavLink to='/'>Home</NavLink>
        {isLoggedIn ? (
            <button className="linkBtn" onClick={handleLogout}>Logout</button>
        ) : (
            <NavLink to='/login'>Login</NavLink>
        )}
    </div>            
    </>
  )
}

export default NavBar