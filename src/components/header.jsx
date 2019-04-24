import React from 'react';
import { NavLink } from 'react-router-dom';
import { IsSearch,LoadData } from '../actions/searchdata-action.jsx';
import { connect } from 'react-redux';
import {GetSearchSuggest} from '../service/search-service';
import {Throttle} from "../utils/utils.jsx";
import '../assets/css/header.scss';

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title:'个人音乐测试'
        }
    }
    onIsSearch(e){
        if(e.target.value){
            this.props.dispatch(IsSearch(false,e.target.value));
            Throttle(this.props.dispatch(LoadData(GetSearchSuggest,e.target.value)))
        }else{
            this.props.dispatch(IsSearch(true)) 
        }   
    }
    onKeydown(e){
        if(e.keyCode===13){
            // let submitsearch = e.target.value
            // this.props.dispatch(SubmitSearch(submitsearch))
        }
    }
    render() {
        let HeaderMessage,HeaderIcon;
        if (this.props.sign.name === 'home') {
            HeaderMessage = (
            <div className="header-message">
              <div className="icon">
                <i className="iconfont icon-M"></i>
              </div>
              <div className="title">{this.props.sign.title}</div>
            </div>
            )
            HeaderIcon =(
                <div className="icon">
                    <i className="iconfont icon-sousuo"></i>
                </div>
            )
        }else if(this.props.sign.name === 'search') {
            let inputvalue = this.props.searchdefaultdata.IsSearch.Value
            HeaderMessage = (
                <div className="header-message">
                    <input type="text" placeholder="请输入关键词..." onChange={(e) => {this.onIsSearch(e)}} onKeyDown={(e)=> this.onKeydown(e)} value={inputvalue ? inputvalue : ""}/>
                </div>
            )
            HeaderIcon = (
                <div className="icon">
                  <span className="iconfont cancel">取消</span>
                </div>
            )
        }
        return (
            <header  className="music-header">
               {HeaderMessage}
               <NavLink to={this.props.sign.path}>
                  {HeaderIcon}
               </NavLink>
            </header>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        searchdefaultdata: state.searchData
    }
}
export default connect(mapStateToProps)(Header);