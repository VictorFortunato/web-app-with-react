import { ThemeContext } from "../contexts/ThemeContext";
import {useContext} from 'react';

function Header() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
          </div>
          <div className="light">
            <h4 className="header-title">Caretag Promotes: International Conference</h4>
          </div>
          <div className={theme === "Custom" ? "" : "text-info"}>
            Hello Mr. Fortunato &nbsp;&nbsp;
            <span>
              <button >sign out</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
