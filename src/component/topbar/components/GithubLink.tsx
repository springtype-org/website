import logoGithub from "../../../assets/img/github_logo.svg";
import {Link} from "./Link";
import {tsx} from "springtype";

export interface GithubLinProps {
  
}

export const GithubLink = (props: GithubLinProps) => <Link onClick={() => {
      window.open('https://github.com/springtype-org')
  }} startIcon={<img width={30} height={60} src={logoGithub} alt={'logo github'}
                     style={{marginRight: 5}}/>}>
      Follow us on GitHub
  </Link>
