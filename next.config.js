/** @type {import('next').NextConfig} */

const withSass = require("@zeit/next-sass");

module.exports = withSass({
	/* Your other Next.js config options */
});

const nextConfig = {
	images: {
		domains: ["www.freepnglogos.com"], // Add your desired domain(s) here
	},
};

module.exports = nextConfig;
