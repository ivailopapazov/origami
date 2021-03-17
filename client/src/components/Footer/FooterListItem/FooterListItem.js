import style from './FooterListItem.module.css';

function FooterListItem({
    children,
    href
}) {
    return(
        <li className={style.footerListItem}>
            <a href={href}>
                {children}
            </a>
        </li>
    );
}

export default FooterListItem;