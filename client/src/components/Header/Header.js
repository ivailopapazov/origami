import style from './Header.module.css';
import NavigationItem from './NavigationItem';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
                <NavigationItem>Going to 1</NavigationItem>
                <NavigationItem>Going to 2</NavigationItem>
                <NavigationItem>Going to 3</NavigationItem>
                <NavigationItem>Going to 4</NavigationItem>
                <NavigationItem>Going to 5</NavigationItem>
                <NavigationItem>Going to 6</NavigationItem>
                <NavigationItem>Going to 7</NavigationItem>
                <NavigationItem>Going to 8</NavigationItem>
                <NavigationItem>Going to 9</NavigationItem>
                <NavigationItem>Going to 10</NavigationItem>
                <NavigationItem>Going to 11</NavigationItem>
            </ul>
        </nav>
    );
};

export default Header;