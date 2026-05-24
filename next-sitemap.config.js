/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.advaitskyline.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 1.0,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
