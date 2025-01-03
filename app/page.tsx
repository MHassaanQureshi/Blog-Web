import BlogCard from "./components/BlogCard/BlogCard"
import Hero from "./components/Hero/Hero"
export default function Home(){
  return(
    <>
    <Hero />
    <div  id="blog-section" className="mt-36 p-4 flex flex-col items-center w-full">
     <BlogCard />
     
    </div>
    </>
    
  
)
}