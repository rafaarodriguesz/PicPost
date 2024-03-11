import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"

const Navbar = () => {
  return (
    <div className={styles.NavContainer}>
        <NavLink to={"/"} className={styles.Links}>Home</NavLink>
        <NavLink to={"/register"} className={styles.Links}>Registrar</NavLink>
        <NavLink to={"/criar"} className={styles.Links}>Criar Post!</NavLink>
    </div>
  )
}

export default Navbar