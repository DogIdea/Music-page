import React from 'react';

class HomeMusic extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test:'这是个music'
        }
    }
    componentDidMount(){
        console.log(this.state.test)
    }
    render() {
        return (
            <div>this is music</div>
        )
    }
}

export default HomeMusic;