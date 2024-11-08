import { MarkdownRenderer } from "@/components/mdx";
import Image from "next/image";
import Link from "next/link";
const getPost = async () => {
	const res = await fetch(
		"http://localhost:1337/api/blogs?filters[title][$eq]=what is ssr?&populate=*"
	);
	const data = await res.json();
	return data;
};
const BlogPage = async () => {
	const posts = await getPost();
	console.log(posts.data[0].attributes);
	return (
		<div>
			<h1>{posts.data[0].attributes.title}</h1>
			<div>
				<Image
					src={`http://localhost:1337/uploads/image_153_1_f8585820eb.png`}
					height={700}
					width={700}
					alt="feature image"
				/>
			</div>
			<div className="prose prose-headings:text-white prose-p:text-white prose-pre:bg-white">
				<MarkdownRenderer>
					{posts.data[0]?.attributes?.content}
				</MarkdownRenderer>
				<ul className="flex gap-5 flex-wrap">
					{posts.data[0]?.attributes?.tags.map(
						(tag: { id: string; tag_name: string }) => (
							<Link
								href={"/"}
								key={tag.id}
								className="inline-block bg-gray-300 border rounded-full list-none text-sm px-3"
							>
								{tag.tag_name}
							</Link>
						)
					)}
				</ul>
			</div>
		</div>
	);
};

export default BlogPage;
