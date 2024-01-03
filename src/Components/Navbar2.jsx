import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar2.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar2">
      <div className="nav2-item" onClick={handleToggleDropdown}>
        <FontAwesomeIcon icon={faBars} className='bar-icon'/>
        Shop by category
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <Link to={`/Kitchenware`} className='a'>Kitchenware</Link>
          <Link to={`/Groceries`} className='a'>Fruits & Veggies</Link>
          <Link to={`/Cleaning`} className='a'>Cleaning & Household</Link>
          <Link to={`/Personalcare`} className='a'>Personal Care</Link>
          <Link to={`/Electronics`} className='a'>Electronics</Link>
          <Link to={`/Gardening`} className='a'>Gardening</Link>
          <Link to={`/Toys`} className='a'>Toys</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
