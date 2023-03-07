import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({isActive}) => ({
              color: isActive ? 'blue' : 'black'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/checkout'
            style={({isActive}) => ({
              color: isActive ? 'blue': 'black'
            })}
          >
            Checkout
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;