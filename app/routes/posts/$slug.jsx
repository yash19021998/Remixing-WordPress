import Header from "../../components/Header"
import { useLoaderData } from "@remix-run/react";
// import { gql } from "@apollo/client"
// import { client }  from "../../lib/apollo"

export async function loader ({params}) {
    
     const slug = params.slug;
     const baseUrl = process.env.WORDPRESS_API_URL;

     if (!baseUrl) {
      throw new Error("WORDPRESS_API_URL is not defined in the environment.");
    }

     // Replace with your local WordPress site's URL
     const wordpressApiUrl = `${baseUrl}/posts?slug=${slug}`;

     try {
        const response = await fetch(wordpressApiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch posts from WordPress.");
        }
        const posts = await response.json();
        return posts.length > 0 ? posts[0] : null; // Return the first post, or null if not found
      } catch (error) {
          console.error("Error fetching WordPress posts:", error);
          return null; // Return null in case of error
      }
}

export default function Slug() {
  const post = useLoaderData()
  return (
    <div>
      <Header title="Home Page" ></Header>
        <main className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
            <h1 className="text-4xl">{post.title.rendered}</h1>
            <div className="text-2xl mt-4">{new Date(post.date).toLocaleDateString()}</div>
            <article className="mt-4 space-y-2" dangerouslySetInnerHTML={{__html: post.content.rendered}}></article>
        </main>
    </div>
  );
}
