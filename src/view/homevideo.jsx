import React from 'react';

class HomeVideo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test:'这是个video'
        }
    }
    componentDidMount(){
        console.log(this.state.test)
    }
    render() {
        return (
            <div></div>
        )
    }
}

export default HomeVideo;