import style from './NavigationItem.module.css';

const NavigationItem = ({
    children,
    href
}) => {
    return(
        <li className={style.navigationListItem}>
            <a href={href}>
                {children}
            </a>
        </li>
    );
}

export default NavigationItem;
