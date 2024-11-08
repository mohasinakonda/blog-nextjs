/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "ui-avatars.com" },
			{ hostname: "localhost" },
		],
	},
};

export default nextConfig;
