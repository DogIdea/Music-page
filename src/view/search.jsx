import React from 'react';
import '../assets/css/search.scss';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { IsSearch,LoadSession } from '../actions/searchdata-action.jsx';
import { connect } from 'react-redux';
class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sign:{
                name:'search',
                path:'/home'
            },
            IsSearch:true
        }
        this.headerSearch = React.createRef();
    }
    onSearch(path){
        this.props.history.push(path);
    }

    onSearchClick(e){
        switch(e.target.className){
            case 'search-keyword':
                this.props.dispatch(IsSearch(true,e.target.innerHTML));
                console.log(this.headerSearch)
                return;
            case 'label-word':
                this.props.dispatch(IsSearch(true,e.target.innerHTML));
                return;
            case 'iconfont icon-qingkongshanchu':
                localStorage.removeItem('SearchMusicHistory');
                this.props.dispatch(LoadSession());
                return;
            default:
                return;
        }
    }

    render() {
        return (
        <div>
            <div className="search-header">
              <Header sign={this.state.sign} onSearch={(path) => {this.onSearch(path)}} ref={this.headerSearch}></Header>
            </div>
            <div className="search-body" onClick={(e) => {this.onSearchClick(e)}}>
                {this.props.children}
            </div>
            <Footer></Footer>
        </div>
        )
    }
}

export default connect()(Search);