
import React from "react";

class PathPutanja extends React.Component {

    constructor() {
        super();
        this.state = {
            subscribeModalOpen: false
        };
   
        
    }

    componentDidMount() {
console.log(window.location.pathname,"pathname............")
     //   setTimeout(function () {this.exitIntent()}.bind(this), 20000);
        

    }

   

    render() {

        return (
            <div>
              
            </div>
        );
    }
}

const flexStyle = {
    flex: 1,
    flexDirection: 'row',
};

export default PathPutanja;