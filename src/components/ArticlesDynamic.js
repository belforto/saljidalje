import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../redux/actions";
import { Link } from 'react-router-dom';
import CommentBox from "./CommentBox";
import Catalog from "./Catalog";
import ShareButtons from "./dumb/ShareButtons";

class ArticlesDynamic extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };

  }



  componentDidMount() {
    //redux action call
    this.props.fetchArticles();

    setTimeout(
      function () {
        this.setState({ loading: false });
      }
        .bind(this),
      2000
    );

  }

  render() {
    const { id } = this.props.match.params

    return (
      <div>


        {this.state.loading ? <Catalog /> : <h5></h5>}

        {this.props.apiResults ? <div>{this.props.apiResults.map(function (article, i) {
          //on path all return all article titles
          if (id === "all") {
            var imurl = "https://unsplash.it/" + Math.floor((Math.random() * 500) + 400)
            return <div key={i} ><Link style={{ color: '#000000' }} key={i} to={"/articles/" + article.path}><img src={imurl} alt="Random Unsplash"></img><h1 key={i} className="article-title">{article.title}</h1> <p className="article-meta">Written by {article.author}</p></Link></div>
          }
          //return particular article based on path {id}
          else if (article.path === id) {
            return <article className="article" key={i}>
           
              <h1 className="article-title">{article.title}</h1>
              < ShareButtons title={article.title}/>
              <p className="article-meta">Written by {article.author}</p>
              <p className="article-meta">at {article.date}</p>
              <p dangerouslySetInnerHTML={{ __html: article.article }} ></p>

              < ShareButtons title={article.title}/>
              <div className="row">
              
    <button><Link style={{ color: '#000000' }} to={"/articles/all"}><div>Read More</div> </Link></button>
  </div>

  <CommentBox comment={article.title+"********KOMENTAR"}/>
            </article>

           
          }

        })}</div> : <h1>No Articles </h1>}


      </div>
    );
  }
}




const mapStateToProps = (state) => ({


  apiResults: state.articleReducer.json,
  articleLoading: state.articleReducer.articleLoading

})

export default connect(
  mapStateToProps,
  { fetchArticles }
)(ArticlesDynamic);


