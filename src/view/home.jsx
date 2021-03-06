import React from 'react';
import '../assets/css/home.scss';
import Header from '../components/header.jsx';
import MenuTab from '../components/menutab.jsx';
import Footer from '../components/footer.jsx';

import { connect } from 'react-redux';

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menutabs: [
                { path: '/home/homemusic', text: '歌曲推荐'},
                { path: '/home/homevideo', text: '个性电台'}
            ],
            index:0,
            sign:{
                title:'个人音乐测试',
                name:'home',
                path:'/search'
            }
        }
    }
    componentWillMount(){
        let menuhistory = this.props.history.location.pathname;
        let menutabs = this.state.menutabs;
        for (let i in menutabs) {
            if(menutabs[i].path === menuhistory){
                this.setState({
                    index:i
                })
            }
        }
    }
    onMenuTab(index){
        let path = this.state.menutabs[index].path;
        this.props.history.push(path);
        this.setState({
            index:index
        })
    }
    render() {
        return (
            <div>
                <div className="home-header">
                  <Header sign={this.state.sign}></Header>
                  <MenuTab menutabs={this.state.menutabs}  {...this.props} index={this.state.index} onMenuTab={(index) => {this.onMenuTab(index)}}></MenuTab>
                </div>
                <div className="home-body">
                  {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        )
    }
}


export default connect()(Home);