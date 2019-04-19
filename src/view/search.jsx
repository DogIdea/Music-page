import React from 'react';
import '../assets/css/search.scss';
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
    render() {
        return (
        <div>
            <div className="search-header">
              <Header sign={this.state.sign}></Header>
            </div>
            <div className="search-body">
                {this.props.children}
            </div>
            <Footer></Footer>
        </div>
        )
    }
}

export default Search;