import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Sidebar.scss';
import ravnIcon from '../assets/img/ravn-logo.png';
import menuIcon from '../assets/img/menu.svg';
import menugridIcon from '../assets/img/menu-grid.svg';

const Sidebar = () => (
    <div className="sidebar" id="sidebar">
        <div className="sidebar__img">
            <img
                src={ravnIcon}
                alt="ravnIcon"
            />

        </div>


        <div className="sidebar__info">
            <Link to='/dashboard'>
                <img
                    className="sidebar__info--img"
                    src={menuIcon}
                    alt="menuIcon"
                />
                DASHBOARD


            </Link>
        </div>
        <div className="sidebar__info">
            <Link to='/task'>
                <img
                    className="sidebar__info--img"
                    src={menugridIcon}
                    alt="menugridIcon"
                />
                MY TASKS
            </Link>
        </div>



    </div>
);


export default (Sidebar);