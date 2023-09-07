/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

const nextConfig = {
	images: {
		domains: ["www.freepnglogos.com", "ik.imagekit.io"], // Add your desired domain(s) here
	},
};

module.exports = nextConfig;
