import PostHeader from './post-header'
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
    slug:'getting-with-next-js',
         title:"next-js", 
         image:"getting-started-nextjs.png", 
         date:"2023-01-23",
         content: "# This is a first post"
}

export default function PostContent () {

    const imagePath =`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    return (
       <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
       </article>
    )
}