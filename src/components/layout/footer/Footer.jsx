import {styles} from './styles';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <styles.Footer>
        <styles.FooterContent>
          2024 &copy; <Link to="/" style={{color: 'black', textDecoration: 'none'}}>Mo-Greene</Link>
          <br/>
          <a href="mailto:13blueboy13@naver.com"
             style={{color: 'black', textDecoration: 'none'}}>13blueboy13@naver.com</a>
        </styles.FooterContent>
      </styles.Footer>
    </>
  );
}

export default Footer;