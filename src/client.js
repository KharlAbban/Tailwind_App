import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_APP_SANITY_PROJECT_ID;
const projectToken = import.meta.env.VITE_APP_SANITY_TOKEN;

export const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-02-13",
    token: projectToken,
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);