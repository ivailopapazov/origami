import './MenuItem.css';

const MenuItem = ({
    children
}) => {
  return (
    <li className="menu-item">
        <a href="#">
            {children}
        </a>
    </li>
  );
}

export default MenuItem;
