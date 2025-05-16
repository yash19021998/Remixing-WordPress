// routes/pages/$slug.jsx
import { useLoaderData } from "@remix-run/react";
import Header from "../../components/Header";
import Page from "../../components/Page";

// Loader function to fetch page data by slug
export async function loader({ params }) {
  const slug = params.slug; // Get slug from the dynamic route parameter
  const wordpressApiUrl = `http://localhost/remix-project/wp-json/wp/v2/pages?slug=${slug}`;

  try {
    const response = await fetch(wordpressApiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch page from WordPress.");
    }
    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null; // Return the first page or null if not found
  } catch (error) {
    console.error("Error fetching page from WordPress:", error);
    return null; // Return null if error occurs
  }
}

export default function Slug() {
    const page = useLoaderData();
  
    if (!page) {
      return <div>Page not found!</div>;
    }
  
    return (
      <div>
        <Header title={page.title.rendered} />
        {/* Use the Page component here */}
        <Page page={page} />
      </div>
    );
  }
