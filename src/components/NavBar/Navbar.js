import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"

const Navbar = () => {
  return (
    <div className={styles.NavContainer}>
        <NavLink to={"/"} ><button>Home</button></NavLink>
        <NavLink to={"/register"} ><button >Registrar</button></NavLink>
    </div>
  )
}

export default Navbar