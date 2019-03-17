import React from 'react';
import '../assets/css/menu.scss';


class MenuTab extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            animation:0,
            start:''
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
        let className=['menu-animation-last','menu-animation-first']
        this.setState({
            start:className[e._targetInst.index]
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
              <div className={['menu-slider',this.state.animation === 0 && !this.state.start ? 'menu-slider-first' : this.state.animation === 1 ? 'menu-slider-last' : '',this.state.start].join(' ')}></div>
              
            </header>
        )
    }
}

export default MenuTab;