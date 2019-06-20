import React from 'react';
import { LoadData,IsSearch,LoadSession} from '../actions/searchdata-action.jsx';
import { GetSearchHot } from '../service/search-service.jsx';
import { connect } from 'react-redux';

class SearchDefault extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        this.props.dispatch(IsSearch(true));
        this.props.dispatch(LoadData(GetSearchHot));
        this.props.dispatch(LoadSession());
    }
    
    render() {
        let getsearchhot = this.props.searchdefaultdata.GetSearchHot.hasOwnProperty('result') ? this.props.searchdefaultdata.GetSearchHot.result : {};
        let getsearchsuggest = this.props.searchdefaultdata.GetSearchSuggest.hasOwnProperty('result') ? this.props.searchdefaultdata.GetSearchSuggest.result : {};
        let SearchDefault = (
                <div className="search-default">
                    <div className="search-hot">
                        <div className="label-title">
                            <h1>热门搜索</h1>
                        </div>
                        <ul className="label-list">
                            {
                                getsearchhot.hasOwnProperty("hots") ? getsearchhot.hots.map(function({first}){
                                    return (
                                        <li className="label-word" key={first}>{first}</li>
                                    )
                                }) : []
                            }
                        </ul>
                    </div>
                    <div className="search-history">
                        <div className="label-title">
                            <h1>搜索历史</h1>
                            <i className="iconfont icon-qingkongshanchu"></i>
                        </div>
                        <ul className="label-list">
                            {
                               this.props.searchdefaultdata.SessionData.length > 0 ?  this.props.searchdefaultdata.SessionData.map(function(value){
                                   return (
                                    <li className="label-word" key={value}>{value}</li>
                                   )
                               }) : []
                            }
                        </ul>
                    </div>
                </div>
            )
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
               {
                   this.props.searchdefaultdata.IsSearch.IsSign ? SearchDefault : SearchIng
               }
           </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        searchdefaultdata: state.searchData
    }
}

export default connect(mapStateToProps)(SearchDefault);