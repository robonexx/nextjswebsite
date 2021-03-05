import articleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
    return ( 
        <div className={articleStyles.grid}>
            {articles.map(article => 
            
            <h4>{article.title}</h4>
            
            )};
        </div>
     );
}
 
export default ArticleList;