import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper indigo darken-1 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li>
        	<NavLink to="/">Todo List</NavLink>
        </li>
        <li>
        	<NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
 