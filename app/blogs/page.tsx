// import { MarkdownRenderer } from "@/components/mdx";
// const getPosts = async () => {
// 	const res = await fetch("http://localhost:1337/api/blogs");
// 	const data = await res.json();
// 	return data;
import Bracelate from "@/assets/images/bracelate.jpg";
import TeamImage from "@/assets/images/team.png";
import Pattern from "@/assets/images/hazrat-ali-akonda-bg-image.png";
import Code from "@/assets/images/code.jpg";
import Image from "next/image";
import { CommentIcon } from "@/assets/icons/comment";
import { HeartIcon } from "@/assets/icons/heart";
import { BookmarkFillIcon } from "@/assets/icons/bookmark-fill";
import { BookmarkIcon } from "@/assets/icons/bookmark";

const data = [
	{
		id: 1,
		title: "Blog 1",
		image: Bracelate,
		createAt: "2021-09-01",
		comment_count: 10,
		like_count: 20,
		bookmark: true,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
	},
	{
		id: 1,
		title: "Blog 2",
		image: TeamImage,
		createAt: "2021-09-01",
		comment_count: 5,
		like_count: 200,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
	},
	{
		id: 1,
		title: "Blog 3",
		image: Pattern,
		createAt: "2023-09-01",
		comment_count: 0,
		like_count: 200,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec.",
		bookmark: true,
	},
	{
		id: 4,
		title: "Blog 4",
		image: Code,
		createAt: "2023-09-01",
		comment_count: 50,
		like_count: 200,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec.",
	},
];
const BlogsPage = async () => {
	// const posts = await getPosts();

	return (
		<div className="px-20 grid grid-cols-12 gap-10">
			<div className="col-span-9 grid grid-cols-3 gap-6">
				{data.map((item) => (
					<div key={item.id} className=" bg-black/20 rounded-md">
						<div className="w-full h-[200px] ">
							<Image
								src={item.image.src}
								alt={item.title}
								width={200}
								height={200}
								className="object-cover w-full h-full rounded-t-md"
							/>
						</div>
						<div className="p-4">
							<h4 className="text-2xl">{item.title}</h4>
							<p className="text-sm font-normal">jan 11,2024</p>
							<div className="flex justify-between items-center">
								<div className="flex gap-5 py-3">
									<div className="flex bg-white w-fit text-black gap-2 rounded-md items-center px-1">
										<HeartIcon /> {item.like_count}
									</div>
									<div className="flex bg-white w-fit text-black gap-2 rounded-md items-center px-1">
										<CommentIcon /> {item.comment_count}
									</div>
								</div>
								<div>
									<button className="rounded-full border p-0.5">
										{item.bookmark ? (
											<BookmarkFillIcon />
										) : (
											<BookmarkIcon />
										)}
									</button>
								</div>
							</div>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="col-span-3 bg-black/20">
				<h2>Sidebar</h2>
			</div>
		</div>
	);
};

export default BlogsPage;
