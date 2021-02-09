import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { SidebarData } from './SidebarData';
import './Header.css';

const useStyles = makeStyles(() => ({
  navbar: {
    backgroundColor: '#060b26',
    height: '80px',
    display: 'flex',
    justifyContent: 'start',
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
      left: '0',
      transition: '350ms',    
  },
  
  navText: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '8px 0px 8px 16px',
    listStyle: 'none',
    height: '60px',
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
        backgroundColor: '#1a83ff',
      }    
  },
  
  navMenuItems: {
    width: '100%',
  },
  
  navbartoggle: {
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

}));


function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const classes = useStyles();
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={classes.navbar}>
          <Link to='#' className={classes.menuBars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className={classes.navMenuItems} onClick={showSidebar}>
            <li className={classes.navbarToggle}>
              <Link to='#' className={classes.menuBars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li className={classes.navText} key={index} className={item.cName}>
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