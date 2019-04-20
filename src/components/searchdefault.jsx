import React from 'react';

class SearchDefault extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        console.log(this.props)
        console.log("music加载了")
    }
    render() {
        let SearchDefault = (
                <div className="search-default">
                    <div className="search-hot">
                        <div className="label-title">
                            <h1>热门搜索</h1>
                        </div>
                        <ul className="label-list">
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                        </ul>
                    </div>
                    <div className="search-history">
                        <div className="label-title">
                            <h1>搜索历史</h1>
                            <i className="iconfont icon-qingkongshanchu"></i>
                        </div>
                        <ul className="label-list">
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                            <li className="label-word">心如止水</li>
                        </ul>
                    </div>
                </div>
            )
            let SearchIng = (
                <div className="search-ing">
                    <ul className="search-list">
                        <li className="search-keyword first-keyword">
                            搜索 “gg”
                        </li>
                        <li className="search-keyword">歌曲名A</li>
                        <li className="search-keyword">歌曲名B</li>
                        <li className="search-keyword">歌曲名C</li>
                        <li className="search-keyword">歌曲名D</li>
                    </ul>
               </div>
            )
        return (
           <div>
               {
                   this.props.IsSearch ? SearchDefault : SearchIng
               }
           </div>
        )
    }
}

export default SearchDefault;