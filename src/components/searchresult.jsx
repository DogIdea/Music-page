import React from 'react';
import { IsSearch } from '../actions/searchdata-action.jsx';
import { connect } from 'react-redux';
import MenuTab from '../components/menutab.jsx';

class SearchResult extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menutabs: [
                { path: '/search/searchresult/songs',text: '单曲'},
                { path: '/search/searchresult/artist',text: '歌手'},
                { path: '/search/searchresult/albums',text: '专辑'},
                { path: '/search/searchresult/playlists',text: '歌单'}
            ]
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
        this.props.dispatch(IsSearch(true));
    }
    onSearchClick(e){
        switch(e.target.className){
            case 'search-keyword':
                this.props.dispatch(IsSearch(true,e.target.innerHTML));
                return;
            default:
                return;
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
        let getsearchsuggest = this.props.searchdefaultdata.GetSearchSuggest.hasOwnProperty('result') ? this.props.searchdefaultdata.GetSearchSuggest.result : {};
        let SearchIng = (
            <div className="search-ing">
                <ul className="search-list">
                    <li className="search-keyword first-keyword">
                        搜索 “{this.props.searchdefaultdata.IsSearch.Value}”
                    </li>
                    {
                        getsearchsuggest.hasOwnProperty("order") ? getsearchsuggest.order.map(function(order){
                            return (
                                getsearchsuggest.hasOwnProperty(order) ? getsearchsuggest[order].map(function({name,id}){
                                    return (
                                        <li className="search-keyword" key={id} >{name}</li>
                                    )
                                }):[]
                            )
                        }) :[]
                    }
                </ul>
           </div>
        )
        return (
           <div>
               <MenuTab menutabs={this.state.menutabs}  {...this.props} index={this.state.index} onMenuTab={(index) => {this.onMenuTab(index)}}></MenuTab>
               <div onClick={(e) => {this.onSearchClick(e)}}>
                    {this.props.searchdefaultdata.IsSearch.IsSign ? this.props.children : SearchIng}
                </div>
           </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        searchdefaultdata: state.searchData
    }
}

export default connect(mapStateToProps)(SearchResult);