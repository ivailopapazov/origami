import style from './Footer.module.css';

import FooterListItem from './FooterListItem'

function Footer() {
    return(
        <footer className={style.footer}>
            <ul>
                <FooterListItem href="#">Going to 1</FooterListItem>
                <FooterListItem href="#">Going to 2</FooterListItem>
                <FooterListItem href="#">Going to 3</FooterListItem>
                <FooterListItem href="#">Going to 4</FooterListItem>
                <FooterListItem href="#">Going to 5</FooterListItem>
                <FooterListItem href="#">Going to 6</FooterListItem>
                <FooterListItem href="#">Going to 7</FooterListItem>
                <FooterListItem href="#">Going to 8</FooterListItem>
                <FooterListItem href="#">Going to 9</FooterListItem>
                <FooterListItem href="#">Going to 10</FooterListItem>
                <FooterListItem href="#">Going to 11</FooterListItem>
                <FooterListItem href="#"><img src="/logo/white-origami-bird.png" alt="origami bird logo"/></FooterListItem>
            </ul>
            <p>Software University &copy; 2021</p>
        </footer>
    );
}

export default Footer;