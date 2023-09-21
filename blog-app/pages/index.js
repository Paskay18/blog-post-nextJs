import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

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


const HomePage= ()=> {
 return (
    <Fragment>
    <Hero />
    <FeaturedPosts posts={DUMMY_POSTS}/>
  </Fragment>
 ) 
}
export default HomePage;