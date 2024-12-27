import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return[
        {
            url: `${process.env.URL}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.URL}/projects`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.CV}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.URL}/about`,
            lastModified: new Date(),
        }
    ]
    
}