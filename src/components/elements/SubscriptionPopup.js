
import React from "react";

class SubscriptionPopup extends React.Component {

    constructor() {
        super();
        this.state = {
            subscribeModalOpen: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.subscribe = this.subscribe.bind(this);
        
    }

    componentDidMount() {

        setTimeout(function () {this.exitIntent()}.bind(this), 20000);
        

    }

    exitIntent() {
        if (window.innerWidth >= 1024) {
            document.addEventListener('mouseout', (e) => {
                if (e.toElement === null && e.relatedTarget === null) {
                    //    console.log("web out---")
                    this.openModal();
                }
            })
        } else {
            //  console.log("mobile")
            setTimeout(function () { this.openModal() }.bind(this), 40000);

        }
    }

    openModal() {
        this.setState({ subscribeModalOpen: true });
    }

    closeModal() {
        this.setState({ subscribeModalOpen: false });
    }

    subscribe() {
        
    }

    render() {

        return (
            <div>
                <div class="row flex-spaces child-borders">

                </div>
                <input class="modal-state" id="modal-1" checked={this.state.subscribeModalOpen} type="checkbox"></input>
                <div class="modal" >
                    <label class="modal-bg" for="modal-1"></label>
                    <div class="modal-body">
                        <span class="btn-close" onClick={this.closeModal} >X</span>
                        <h4 class="modal-title">Hej ajmo ostati u kontaktu</h4>
                        <h5 class="modal-subtitle"></h5>
                        <p class="modal-text"></p>
                        <label for="modal-1"></label>


                        <hr />
                        <h4 class="modal-text">Pridruži se grupi od <bold>3257</bold> marketingaša koji su ostavili svoj kontakt</h4>

                        <p>A mi ćemo te povremeno obavijestiti o novim člancima i meetupima</p>

                        <div class="col sm-12">
                            <div class="form-group">

                                <input class="input-block" type="text" placeholder="example@example.com" id="paperInputs3" />
                            </div>
                        </div>

                        <div class="col-12 col">


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

export default SubscriptionPopup;