import React from 'react';

class Music extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test:'这是个测试'
        }
    }
    componentDidMount(){
        console.log("music加载了")
    }
    render() {
        return (
            <div>
                <div>
                    music
                </div>
            </div>
        )
    }
}

export default Music;