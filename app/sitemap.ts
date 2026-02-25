import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://legalformat.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/all-tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/rent-agreement-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/affidavit-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/salary-certificate-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/experience-letter-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/noc-letter-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leave-license-agreement-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/offer-letter-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resignation-letter-format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/relieving-letter-format`,
      lastModified: new Date(),
    },
  ];
}
