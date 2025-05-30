import Post from "../components/Post";
import Header from "../components/Header";
import { useLoaderData } from "@remix-run/react";

export async function loader() {

    const baseUrl = process.env.WORDPRESS_API_URL;

    if (!baseUrl) {
        throw new Error("WORDPRESS_API_URL is not defined in the environment.");
      }
      
    // Replace with your local WordPress site's URL
    const wordpressApiUrl = `${baseUrl}/posts`;

    try {
        const response = await fetch(wordpressApiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch posts from WordPress.");
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error("Error fetching WordPress posts:", error);
        return [];
    }
}

export default function Index() {
    const posts = useLoaderData();

    return (
        <div>
            <Header title="Home Page" />
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
}
