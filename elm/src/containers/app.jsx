import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import Header from "comp/header";
import Layout from "comp/layout";
import Footer from "comp/footer"
import RouterView from "router/index"

import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";
import "common/fonts/iconfont.css"
class App extends React.Component {
    render() {
        return <div className="wraper">
            <Header></Header>
            <Router>
                <div>
                    <Layout>
                    <RouterView/>
                    </Layout>
                    <Footer/>
                </div>
            </Router>
           
        </div>
    }
}
export default App;