import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import { makeStyles, Button } from "@material-ui/core";

import { SidebarData } from './SidebarData';
import { logout, isLogin } from '../utils/oauth';

const useStyles = makeStyles(() => ({
  navbar: {
    backgroundColor: '#060b26',
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between;',
    alignItems: 'center',
  },
  menuBars: {
    marginLeft: '2rem',
    fontSize: '2rem',
    background: 'none',    
  },
  navMenu: {
    backgroundColor: '#060b26',
    width: '250px',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    left: '-100%',
    transition: '850ms',
  },
  navMenuActive: {
    backgroundColor: '#060b26',
    width: '250px',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    transition: '350ms',
    zIndex: '10',
  },
  navText: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '8px 0px 8px 16px',
    listStyle: 'none',
    height: '60px',

    '&:hover': {
      backgroundColor: '#f50057',
    }
  },
  navTextA: {
    textDecoration: 'none',
    color: '#f5f5f5',
    fontSize: '18px',
    width: '95%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    borderRadius: '4px',

    '& a:hover': {
      backgroundColor: '#000',
    }
  },
  navMenuItems: {
    width: '100%',
    padding: '0',
  },
  navbarToggle: {
    backgroundColor: '#060b26',
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'start',
    alignitems: 'center',
  },
  span: {
    marginLeft: '16px',
  },
  logoutButton: {
    marginRight: '5%',
    fontFamily: 'Indie Flower',
    fontWeight: '900',
  }
}));


function Header() {
  const [sidebar, setSidebar] = useState(false);
  let history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);
  const classes = useStyles();

  const handleLogout = () => {
    logout();
    history.push({
      pathname: "/login"
    });
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={classes.navbar}>
          <Link to='#' className={classes.menuBars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <Button className={classes.logoutButton}
            variant="contained"
            color="secondary"
            onClick={handleLogout}>
            LOGOUT
          </Button>

        </div>
        <nav className={sidebar ? classes.navMenuActive : classes.navMenu}>
          <ul className={classes.navMenuItems} onClick={showSidebar}>
            <li className={classes.navbarToggle}>
              <Link to='#' className={classes.menuBars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li className={classes.navText} key={index}>
                  <Link to={item.path} className={classes.navTextA}>
                    {item.icon}
                    <span className={classes.span}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;