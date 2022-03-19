import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Search.scss';
import userIcon from '../assets/img/people.png';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  return (
    <>
      <div className="search" id="search">
        <form className="search__form" >
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#94979A" />
            </svg>
            <input className={inputStyle} type="text" placeholder="Search" ></input>
          </>

          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" fill="white" className="bi bi-bell" viewBox="0 0 16 16" position="fixed" right="50px">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" fill="#94979A"/>
            </svg>
          </>
          <>
            <Link to='/'>
              <img
                className='search__form--profile'
                src={userIcon}
                alt="Usuario"
              />
            </Link>
          </>

        </form>
      </div>
    </>
  );
}


Search.propTypes = {
  isHome: PropTypes.bool,
};

export default Search;