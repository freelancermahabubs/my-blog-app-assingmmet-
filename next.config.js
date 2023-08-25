/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",

  // images: {
  //   domains: ["basic-blog.teamrabbil.com"],
  // },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
