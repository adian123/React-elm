import React from "react";
import {NavLink} from "react-router-dom"
class Footer extends React.Component {
    render() {
        return <div className="footer">
        <ul> 
          <NavLink to="/index" activeClassName='active'>
              首页
          </NavLink>
          <NavLink to="/found" activeClassName='active'>
              发现
          </NavLink>
          <NavLink to="/order" activeClassName='active'>
              订单
          </NavLink>
          <NavLink to="/mine" activeClassName='active'>
              我的
          </NavLink>
        </ul>
    	</div>
    }
}

export default Footer;
