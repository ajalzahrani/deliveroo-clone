import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: "7ldi6dow",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);
