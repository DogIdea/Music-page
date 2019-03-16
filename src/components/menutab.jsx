import React from 'react';
import '../assets/css/menu.scss';


class MenuTab extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            animation:0
        }
    }
    componentWillMount(){
        let historypath = this.props.history.location.pathname
        let path = this.props.menutabs[1].path
        
        if(historypath === path){
            this.setState({
                animation:1
            })
        }else{
            this.setState({
                animation:0
            })
        }
    }
    onMenuTab(e){
        e.persist();//以异步方式访问属性，因为this.state为异步
        this.setState({
            animation:e._targetInst.index
        })
        this.props.onMenuTab(e._targetInst.index)
    }
    render() {
        return (
            <header  className="menu-top">
              <ul className="menu-title" onClick={(e) => {this.onMenuTab(e)}}>
                {
                    this.props.menutabs.map(function({text}){
                        return (<li key={text}>{text}</li>)
                    })
                }
              </ul>
              <div className={['menu-slider',this.state.animation === 0 ? 'menu-animation-last' : 'menu-animation-first'].join(' ')}></div>
              
            </header>
        )
    }
}

export default MenuTab;