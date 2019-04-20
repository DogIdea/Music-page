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
            },
            IsSearch:true
        }
    }
    render() {
        return (
        <div>
            <div className="search-header">
              <Header sign={this.state.sign}></Header>
            </div>
            <div className="search-body">
                {
                    React.Children.map(this.props.children, Child => {
                        console.log(this.props,'1')
                        console.log(this.props.children,'2')
                        console.log(React.cloneElement(Child,{IsSearch:this.state.IsSearch}),'3')
                        return React.cloneElement(Child,{IsSearch:this.state.IsSearch})
                    })
                }
            </div>
            <Footer></Footer>
        </div>
        )
    }
}

export default Search;