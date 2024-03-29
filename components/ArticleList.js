import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {
    return ( 
        <div className={articleStyles.articles}>
        <div className={articleStyles.grid}>
            {articles.map(article => 
                <ArticleItem article={article} key={article.id}/>
            )};
        </div>
        </div>
     );
}
 
export default ArticleList;