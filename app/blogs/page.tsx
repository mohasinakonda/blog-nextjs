import { MarkdownRenderer } from "@/components/mdx";
const getPosts = async () => {
	const res = await fetch("http://localhost:1337/api/blogs");
	const data = await res.json();
	return data;
};
const BlogsPage = async () => {
	const posts = await getPosts();

	return (
		<div className="prose">
			<MarkdownRenderer>
				{posts.data[1]?.attributes?.content}
			</MarkdownRenderer>
		</div>
	);
};

export default BlogsPage;
