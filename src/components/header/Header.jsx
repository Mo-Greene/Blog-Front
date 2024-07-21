import {NavLink} from "react-router-dom"
import {styles} from './styles.js'
import { FaGithub } from "react-icons/fa6";

const Header = () => {

  return (
    <>
      <header>
        <div>
          <styles.Nav>
            <styles.Title><NavLink to="/">Mo-Greene's Blog</NavLink></styles.Title>
            <styles.Ul>
              <styles.Li><NavLink to="/posts">Post</NavLink></styles.Li>
              <styles.Li><NavLink to="/about">About</NavLink></styles.Li>
            </styles.Ul>
            <styles.GithubLink
              href="https://github.com/Mo-Greene"
              target="_blank"
              rel="noopener noreferrer"
            ><FaGithub style={{marginRight: "3px"}} />
              GitHub
            </styles.GithubLink>
          </styles.Nav>
        </div>
      </header>
    </>
  )
}

export default Header;