import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sign:{
                name:'search',
                path:'/home'
            }
        }
    }
    componentDidMount(){
        console.log("music加载了")
    }
    render() {
        return (
        <div>
            <div className="search-header">
              <Header sign={this.state.sign}></Header>
            </div>
            <div className="search-body">
              
            </div>
            <Footer></Footer>
        </div>
        )
    }
}

export default Search;