import React from 'react';
import '../assets/css/home.scss';
import Header from '../components/header.jsx';
import MenuTop from '../components/menutop.jsx';
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test:'这是个测试'
        }
    }
    componentDidMount(){
        console.log(this.props.children)
    }
    render() {
        return (
            <div>
                <div className="home-header">
                  <Header></Header>
                  <MenuTop></MenuTop>
                </div>
                <div className="home-body">
                  {this.props.children}
                </div>
            </div>
        )
    }
}

export default Home;