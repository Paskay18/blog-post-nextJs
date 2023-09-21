import AllPosts from "@/components/posts/all-posts"


export default function AllPostsPage () {


    const DUMMY_POSTS = [
        {slug:'getting-with-next-js',
         title:"next-js", 
         image:"getting-started-nextjs.png", 
         excerpt:"hoooo", 
         date:"2023-01-23"},
         {
          slug:'getting-with-next-js-2',
          title:"next-js", 
         image:"getting-started-nextjs.png", 
         excerpt:"hoooo", 
         date:"2023-01-23"},
         {
          slug:'getting-with-next-js-3',
         title:"next-js", 
         image:"getting-started-nextjs.png", 
         excerpt:"hoooo", 
         date:"2023-01-23"}
      ]



    return (
    <AllPosts posts={DUMMY_POSTS} />
)
}