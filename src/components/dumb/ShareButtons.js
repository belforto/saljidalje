import {
    FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
  VKIcon,
} from "react-share";
import React from "react";
import { Passers } from "prop-passer";
import SubShareCSS from "./SubShareCSS";
import { ToastContainer, toast } from 'react-toastify';

class ShareButtons extends React.Component {

    constructor() {
        super();




    }

    componentDidMount(){

        let imena=["Marko", "Darijan","Florijan", "Šime","Slavko","Tomo","Tomislav","Ivana","Marija","Željka"];
        let randomIndex= Math.floor(Math.random()*imena.length);
        const SEC=1000;
        let vrijemePojaveToasta=Math.floor(Math.random() * 1000*SEC) + 10*SEC ;

        setTimeout(function(){ toast(imena[randomIndex]+" je upravo podijeli članak",{ type: toast.TYPE.SUCCESS, autoClose: 5000 }); }, vrijemePojaveToasta);

        
    }

   
  render() {
      const naslov =this.props.title;
      

    const {
      url = String(window.location),
      title = {naslov},
      shareImage = "https://www.steadylearner.com/static/images/brand/prop-passer.png",
      size = "2.5rem",
    } = this.props;

    const ShareList = Passers({
      url,
      className: "network__share-button",
      
    })({
      className: "network cursor-pointer hover transition--default",
      title: `Share ${String(window.location)}`,
      
    })("span");

    return (
        <div>
              <ToastContainer />
        <p >Podijeli  Članak</p>
        <ShareList >
          <FacebookShareButton
            quote={title}
          >
            <FacebookIcon
              size={size}
            />
          </FacebookShareButton>

          <TwitterShareButton
            title={title}
          >
            <TwitterIcon
              size={size}
            />
          </TwitterShareButton>

          <WhatsappShareButton
            title={title}
            separator=":: "
          >
            <WhatsappIcon size={size} />
          </WhatsappShareButton>

          <LinkedinShareButton
            title={title}
            windowWidth={750}
            windowHeight={600}
          >
            <LinkedinIcon
              size={size}

            />
          </LinkedinShareButton>

          <PinterestShareButton
            url={String(window.location)}
            media={`${shareImage}`}
            windowWidth={1000}
            windowHeight={730}
          >
            <PinterestIcon size={size} />
          </PinterestShareButton>
        </ShareList>
        
        </div>
    );
  }
}

const flexStyle = {
    flex: 1,
    flexDirection: 'row',
  };

export default ShareButtons;