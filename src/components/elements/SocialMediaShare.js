import React,{useState} from 'react'

import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    EmailIcon,
    TwitterIcon,
    ViberIcon,
    WhatsappIcon
  } from "react-share";


export default function SocialMediaShare() {
    const [url, setstate] = useState(window.location.href)
    return (
        <div style={{
        }}>
        <nav
        class="breadcrumb positionCenter"
        aria-label="breadcrumbs"
        style={{ padding: "20px", }}
      >
    <div style={{
          //  float: "right",
        //    paddingBottom:"20px",
        }}>

  
            <span>
            Podijeli nas na društvenim mrežama
                </span>
                <br/>
            {/* <FacebookShareButton url={window.location.href} /> */}
            <TwitterShareButton url={url}>
            <TwitterIcon
              size={"2rem"} // You can use rem value instead of numbers
              round
            />
          </TwitterShareButton>
            <FacebookShareButton url={url}>
            <FacebookIcon
              size={"2rem"} // You can use rem value instead of numbers
              round
            />
          </FacebookShareButton>

            <FacebookMessengerShareButton url={url}>
            <FacebookMessengerIcon
              size={"2rem"} // You can use rem value instead of numbers
              round
            />
          </FacebookMessengerShareButton>

            <EmailShareButton url={url}>
            <EmailIcon
              size={"2rem"} // You can use rem value instead of numbers
              round
            />
          </EmailShareButton>
            <ViberShareButton url={url}>
            <ViberIcon
              size={"2rem"} // You can use rem value instead of numbers
              round
            />
          </ViberShareButton>
            <WhatsappShareButton url={url}>
            <WhatsappIcon
              size={"2rem"} // You can use rem value instead of numbers
              round
            />
          </WhatsappShareButton>
          </div>
          </nav>
        </div>
    )
}
