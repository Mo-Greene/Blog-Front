import {NavLink} from "react-router-dom"
import {styles} from './styles.js'
import {ReactComponent as GithubIcon} from '../../../assets/github-mark.svg';

const Header = () => {

  return (
    <>
      <header>
        <div style={{borderBottom: "1px solid lightgray"}}>
          <styles.Nav>
            <styles.Title><NavLink to="/">Mo-Greene</NavLink></styles.Title>
            <styles.Ul>
              <styles.Li><NavLink to="/posts">Post</NavLink></styles.Li>
            </styles.Ul>
            <styles.GithubLink
              href="https://github.com/Mo-Greene"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon/>
            </styles.GithubLink>
          </styles.Nav>
        </div>
      </header>
    </>
  )
}

export default Header;