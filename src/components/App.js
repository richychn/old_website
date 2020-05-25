import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MobileSidebar from './MobileSidebar';
import Sidebar from './Sidebar';
import Bio from './Bio';
import Projects from './Projects';
import Books from './Books';
import Blogs from './Blogs';
import Blog from './Blog';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false,
            lastYpos: null,
            header: true,
        }
    }

    componentDidMount() {
        this.windowWidth()
        window.addEventListener('resize', this.windowWidth);
        window.addEventListener('scroll', this.handleScroll , true);
        this.setState({lastYpos: window.pageYOffset});
    }

    handleScroll = _ => {
        var oldYpos = this.state.lastYpos
        this.setState({lastYpos: window.pageYOffset})
        if (window.pageYOffset === 0) {
            this.setState({header: true})
        } else if (window.pageYOffset > oldYpos) {
            this.setState({header: false})
        } else if (window.pageYOffset < oldYpos) {
            this.setState({header: true})
        }
    }

    windowWidth = () => {
        if (window.innerWidth < 800) {
            this.setState({
                mobile: true
            })
        } else {
            this.setState({
                mobile: false
            })
        }
    }

    sidebar = () => {
        if (this.state.mobile) {
            if (this.state.header) {
                return <MobileSidebar />
            } else {
                return <MobileSidebar hidden="hidden" />
            }
        } else {
            return <Sidebar />
        }
    }

    render() {
        return (
            <Router>
                <div className={`page ${this.state.mobile ? "mobile" : ""}`}>
                    {this.sidebar()}
                    <Switch>
                        <Route path="/" exact component={Bio} />
                        <Route path="/hello" exact component={Bio} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/books" exact component={Books} />
                        <Route path="/blogs" exact component={Blogs} />
                        <Route path="/blogs/:id" exact component={Blog} />
                        <Route path='/launch-workstation' component={() => { 
                            window.location.href = 'https://chrome.google.com/webstore/detail/launch-workstation/bonigddakfdagmgiodddmconddoebaoa'; 
                            return null;
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;