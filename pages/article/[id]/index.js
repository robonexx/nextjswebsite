import {useRouter} from 'next/router'
import Link from 'next/link'
import articleStyles from '../../../styles/Article.module.css'

const article = ({article}) => {
/* 
    const router = useRouter()
    const {id} = router.query */

    return ( 
        <>
        <div className={articleStyles.showArticle}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back!</Link>
        </div>
        </>
     );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}
 
export default article;