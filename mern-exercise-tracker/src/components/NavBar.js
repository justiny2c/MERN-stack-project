import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link to='/' className='navbar-brand'>
            Exercise Tracker
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>
                  Exercises
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/create' className='nav-link'>
                  Create an Exercise Log
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/user' className='nav-link'>
                  Create New User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
