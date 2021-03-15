import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/contact-us"><NavigationItem>Contact Us</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/pesho"><NavigationItem>Pesho</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/gosho"><NavigationItem>Going to 5</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/stamat"><NavigationItem>Going to 6</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/mariyka"><NavigationItem>Going to 7</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/malinka"><NavigationItem>Going to 8</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/tosho"><NavigationItem>Going to 9</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/plamen"><NavigationItem>Going to 10</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/veselin"><NavigationItem>Going to 11</NavigationItem></NavLink>
            </ul>
        </nav>
    );
};

export default Header;