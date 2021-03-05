import articleStyles from '../styles/Article.module.css'
import Article from './ArticleItem'

const ArticleList = ({articles}) => {
    return ( 
        <div className={articleStyles.articles}>
        <div className={articleStyles.grid}>
            {articles.map(article => 
            <Article article={article}/>
            )};
        </div>
        </div>
     );
}
 
export default ArticleList;