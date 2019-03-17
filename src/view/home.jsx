import React from 'react';
import '../assets/css/home.scss';
import Header from '../components/header.jsx';
import MenuTab from '../components/menutab.jsx';
import Footer from '../components/footer.jsx';
import {LoadPersonalizedSongs,LoadTopPlayList} from '../actions/homedata-action.jsx';
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
                name:'home',
                path:'/search'
            }
        }
    }
    componentWillMount(){
        this.props.dispatch(LoadPersonalizedSongs)
        this.props.dispatch(LoadTopPlayList)
        console.log(this.props)
        console.log("父元素的componentWillMount")
     }
    onMenuTab(index){
        console.log(this.props.location.pathname)
        let path = this.state.menutabs[index].path;
        this.props.history.push(path);
    }
    render() {
        console.log("父元素的render")
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

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        homedata: state
    }
}
export default connect(mapStateToProps)(Home);