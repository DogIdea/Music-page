import React from 'react';
import Footer from '../components/footer.jsx';
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test:'这是我的'
        }
    }
    render() {
        return (
            <div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;