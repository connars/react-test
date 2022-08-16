import React from 'react';
import '../header/header.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header_contant">
                    {/* <Link to="/">Logo</Link> */}
                    
                    <Router>
                        <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="#test">Главная</Link>
                                </li>
                                <li>
                                    <Link to="#test1">Контакты</Link>
                                </li>
                                <li>
                                    <Link to="#test2">Пользователи</Link>
                                </li>
                                <li>
                                    <Link to="#test3">Пользователи</Link>
                                </li>
                                <li>
                                    <Link to="#test4">Пользователи</Link>
                                </li>
                                <li>
                                    <Link to="#test5">Пользователи</Link>
                                </li>
                            </ul>
                        </nav>
                        </header>
                    </Router>
                 </div>
            </div>
        </div>
    );
  }
  

export default Header;