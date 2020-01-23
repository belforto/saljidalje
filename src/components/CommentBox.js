import React from "react";

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: true
      ,
      brojKom:0,
      comments: [

       // { id: 1, author: "landiggity", date: "12-3-1994 17:45", body: "This is my first comment on this forum so don't be a dick" },
        /*   { id: 2, author: "scarlett-jo", date: "12-3-1994 17:45", body: "That's a mighty fine comment you've got there my good looking fellow..." },
           { id: 3, author: "rosco", date: "12-3-1994 17:45", body: "What is the meaning of all of this 'React' mumbo-jumbo?" }
           */
      ]
    };

    this._downloadComments();
  }



  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';

    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <h2>Join the Discussion!</h2>
        <CommentForm addComment={this._addComment.bind(this)} />
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this.state.brojKom}
        </h4>
        {commentNodes}
      </div>
    );
  } // end render

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      autor:author,
      komentar:body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    console.log(this.state.comments)
    var formData = new FormData();
    formData.append('url', window.location.pathname);
    formData.append('autor', author);
    formData.append('komentar', body);

    fetch('https://www.markwebkitchen.com/seo/komentari/a.php', {
      method: 'POST',
      body: formData
    })
    this.forceUpdate()
  // const comments = this._getComments();
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }




  _downloadComments() {

    fetch('https://www.markwebkitchen.com/seo/komentari/komentari.json')
      .then(response => response.json())
      .then(comments => this.setState({ comments: comments.svi }));

    this.setState({
      showComments: !this.state.showComments
    });
  }

  _getComments() {

    return this.state.comments.map((comment) => {
      var br=0
      console.log(comment,window.location.pathname)
      if(comment.url==window.location.pathname){
        br++
      return (
        <Comment
          author={comment.autor}
          body={comment.komentar}
          key={Math.random()} />
      );
      }
      //this.setState({brojKom:br})
    });
  }

  _getCommentsTitle(commentCount) {
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
    console.log("aut",author.value,body.value)
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

