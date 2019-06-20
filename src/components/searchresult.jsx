import React from 'react';
import { LoadData } from '../actions/searchdata-action.jsx';
import { GetSearchList } from '../service/search-service';
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
    }

    onMenuTab(index){
        let path = this.state.menutabs[index].path;
        let searchkeyword = this.props.searchdefaultdata.IsSearch.Value;
        this.props.history.push(path);
        this.setState({
            index:index
        })
        if(searchkeyword === ''){
            return;
        }
        switch(index){
            case 0:
                this.props.dispatch(LoadData(GetSearchList,searchkeyword,1,30,0));
                return;
            case 1:
                this.props.dispatch(LoadData(GetSearchList,searchkeyword,100,30,0));
                return;
            case 2:
                this.props.dispatch(LoadData(GetSearchList,searchkeyword,10,30,0));
                return;
            case 3:
                this.props.dispatch(LoadData(GetSearchList,searchkeyword,1000,30,0));
                return;
            default:
                return;
        }
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
        let SearchContent = (
            <div>
                <MenuTab menutabs={this.state.menutabs}  {...this.props} index={this.state.index} onMenuTab={(index) => {this.onMenuTab(index)}}></MenuTab>
                <div>
                    {this.props.children} 
                </div>
            </div>
        )
        return (
           <div>
                <div>
                    {this.props.searchdefaultdata.IsSearch.IsSign ? SearchContent : SearchIng}
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