import React from 'react';
import '../assets/css/menu.scss';

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title:['歌曲推荐','个性电台'],
            animation:'歌曲推荐'
        }
    }
    onMenuTab(e){
        e.persist();//以异步方式访问属性，因为this.state为异步
        this.setState({
            animation:e.target.innerHTML
        })
    }
    render() {
        return (
            <header  className="menu-top">
              <ul className="menu-title" onClick={(e) => {this.onMenuTab(e)}}>
                {
                    this.state.title.map(function(name){
                        return (<li key={name}>{name}</li>)
                    })
                }
              </ul>
              <div className={['menu-slider',this.state.animation === '歌曲推荐' ? 'menu-animation-last' : 'menu-animation-first'].join(' ')}></div>
              
            </header>
        )
    }
}

export default Header;