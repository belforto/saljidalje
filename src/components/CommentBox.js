import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CommentBox extends React.Component {

  constructor() {
    super();

    this.state = {
      showComments: true
      ,
      brojKom: 0,
      comments: [

        //  { url: "/a-b-c", autor: "landiggity", date: "12-3-1994 17:45", komentar: "This is my first comment on this forum so don't be a dick" },
        /*   { id: 2, author: "scarlett-jo", date: "12-3-1994 17:45", body: "That's a mighty fine comment you've got there my good looking fellow..." },
           { id: 3, author: "rosco", date: "12-3-1994 17:45", body: "What is the meaning of all of this 'React' mumbo-jumbo?" }
           */
      ]
    };


  }


  componentDidUpdate(){


    console.log("kom se updetala------------")
  }

  async componentDidMount() {
    await this._downloadComments();
    var brojKomentara = 0;

    var comentsHTML = await this.state.comments.map((comment) => {
      if (comment.url == window.location.pathname) {
        this.setState({ brojKomentara: ++brojKomentara })

        // console.log("ovaj priprada članku",comment, window.location.pathname,comment.url == window.location.pathname)
        return (
          <Comment
            author={comment.autor}
            body={comment.komentar}
            key={Math.random()} />
        );
      }


    });

    this.setState({ comentsHTML: comentsHTML })
    console.log("didmountsS", comentsHTML, this.state.brojKomentara)

  }

  render() {

    console.log(this.state.komentariSpremni, " koment spemni?")
    if (!this.state.komentariSpremni) {
      return (<h2>Komentari u pripremi!</h2>)
    }
    else {
      const comments = this.state.comentsHTML
      console.log("komentari za prikaz u render met", comments)
      let commentNodes;
      let buttonText = 'Show Comments';

      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      return (

        <div className="comment-box">
         <ToastContainer />
          <h2>Join the Discussion!</h2>
          <CommentForm addComment={ this._addComment.bind(this)} />
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle()}
          </h4>
          {commentNodes}

        </div>

      );
    }
  } // end render

  async _addComment(author, body) {
    console.log("begin----------",this.state.comments)
    const comment = {
      url: window.location.pathname,
      autor: author,
      komentar: body,
     // datum:new Date().toDateString()
    };
   await this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    console.log("novikomentari",this.state.comments)
    this.forceUpdate()
    toast("Tvoj Komentar Je Spremljen",{ type: toast.TYPE.SUCCESS, autoClose: 5000 })
    var formData = new FormData();
    formData.append('url', window.location.pathname);
    formData.append('autor', author);
    formData.append('komentar', body);

    fetch('https://www.markwebkitchen.com/seo/komentari/a.php', {
      method: 'POST',
      body: formData
    })
   .then(
   
    
    setTimeout(function() { //Start the timer
      window.location.reload()
  }.bind(this), 4000)
   )
    

  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }




  async _downloadComments() {

    await fetch('https://www.markwebkitchen.com/seo/komentari/komentari.json')
      .then(response => response.json())
      .then(comments => {
        console.log("komentari spremni");
        this.setState({ comments: comments.svi, showComments: true, komentariSpremni: true });
         this.forceUpdate()
      }
      )



  }



  _getCommentsTitle() {
    var commentCount = this.state.brojKomentara;
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
          <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    );
  } // end render

  _handleSubmit(event) {
    event.preventDefault();   // prevents page from reloading on submit
    let author = this._author;
    let body = this._body;
    //  console.log("aut",author.value,body.value)
    this.props.addComment(author.value, body.value);
  }
} // end CommentForm component


class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer">
          <p>{this.props.date}</p>
        </div>
      </div>
    );
  }

}



export default CommentBox;

