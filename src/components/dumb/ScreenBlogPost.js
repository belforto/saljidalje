import React from "react";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import PathBar from "../elements/PathBar";
import FooterSD from "../elements/Footer";
import SocialMediaShare from "../elements/SocialMediaShare";
import WebshopPromoComponent from "../elements/WebshopPromoComponent";
import WebshopFacebookPromoComponent from "../elements/WebshopFacebookPromoComponent";
import { useState, useEffect } from "react";
import marked from "marked";
import sanitizeHtml from "sanitize-html";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function ScreenBlogPost() {
  let params = useParams();

  useEffect(() => {
    console.log(params, "aaaaa333");

    fetchBlogPost(params.identifikator);
  }, []);

  const allowedTagsDefault = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "strong",
    "ul",
    "li",
    "a",
    "img",
    "div",
    "tb",
    "td",
    "table",
    "tr",
    "th"
  ];
  const allowedAttributes = {
    img: ["class", "src", "style"],
    a: ["href", "download", "target", "style"],
    div: ["style"],
    h1: ["style"],
    h2: ["style"]
  };

  const fetchBlogPost = async identifikator => {
    
    const response = await fetch(
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/FetchBlogByPathName?identifikator=" +
        identifikator
        
    );
    const blogPost = await response.json();
    setText(blogPost[0]?.text?blogPost[0].text:null);
  };

  const [text, setText] = useState("");
  return (
    <div>
      <div class="container">
        <SaljiDaljeNavbar />
        <PathBar />
        {!!text &&  <SocialMediaShare />}
        {/* <WebshopPromoComponent /> */}
        <div class="title-wrapper ">
          {!!text && (
            <div
              class="overrideBulma positionCenter"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(marked(text), {
                  allowedTags: allowedTagsDefault,
                  allowedAttributes: allowedAttributes
                })
              }}
            />
          )}
          {!text&&  <div class="title-wrapper  has-text-centered overrideBulma"> <h1> Nažalost ne možemo pronaći traženi post </h1></div>}
        </div>
        {!!text &&  <SocialMediaShare />}
       
        <WebshopPromoComponent />
        {/* <WebshopFacebookPromoComponent /> */}
      </div>

      <FooterSD />
    </div>
  );
}
