import React from 'react';
import MenuTab from '../components/menutab.jsx';

class SearchResult extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menutabs: [
                { text: '单曲'},
                { text: '歌手'},
                { text: '专辑'},
                { text: '歌单'}
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
        this.props.history.push(path);
        this.setState({
            index:index
        })
    }
    render() {
        return (
           <div>
               <MenuTab menutabs={this.state.menutabs}  {...this.props} index={this.state.index} onMenuTab={(index) => {this.onMenuTab(index)}}></MenuTab>
           </div>
        )
    }
}

export default SearchResult;