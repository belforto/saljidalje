
import React from "react";

class SubscribeNavbar extends React.Component {

    constructor() {
        super();
        this.state = {

        };


    }

    componentDidMount() {



    }



    subscribe() {

    }

    render() {

        return (
            <div class="alert alert-warning">
                <p class="text-primary">Pridruži se grupi od <strong>3257</strong> marketingaša koji su ostavili svoj kontakt,a  mi ćemo te povremeno obavijestiti o novim člancima i meetupima</p>
                <div class="row">

                    <div class="col sm-9">
                        <div class="form-group">
                            <input class="input-block" type="text" placeholder="example@example.com" id="paperInputs3" />
                        </div>
                    </div>
                    <div class="col sm-3">
                        <div class="form-group">
                            <button class="btn-block btn-success"> Saznaj još Zanimljivih Priča</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

const flexStyle = {
    flex: 1,
    flexDirection: 'row',
};

export default SubscribeNavbar;