import React from 'react';
import '../assets/css/home.scss';
import Header from '../components/header.jsx';
import MenuTab from '../components/menutab.jsx';
import Footer from '../components/footer.jsx';
// import { connect } from 'react-redux';
import {PersonalizedSongs} from '../service/home-service.jsx';

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menutabs: [
                { path: '/home/homemusic', text: '歌曲推荐' },
                { path: '/home/homevideo', text: '个性电台' }
            ],
            sign:{
                name:'home',
                path:'/search'
            }
        }
    }
    componentDidMount(){
        PersonalizedSongs().then((res)=>{
            console.log(res.data)
        })
       
    //    console.log(this.props)
    }
    onMenuTab(index){
        let path = this.state.menutabs[index].path;
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <div className="home-header">
                  <Header sign={this.state.sign}></Header>
                  <MenuTab menutabs={this.state.menutabs} onMenuTab={(index) => {this.onMenuTab(index)}}></MenuTab>
                </div>
                <div className="home-body">
                  {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
// export default connect()(Home);
export default Home;