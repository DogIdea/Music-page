import React from 'react';
import '../assets/css/menu.scss';


class MenuTab extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            // animation:0,
            // start:''
        }
    }
    onMenuTab(e){
        e.persist();//以异步方式访问属性，因为this.state为异步
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
              <div className="menu-slider" style={{ width: `${100 / this.props.menutabs.length}%`, transform: `translateX(${this.props.index * 100}%)` }}></div>
            </header>
        )
    }
}

export default MenuTab;