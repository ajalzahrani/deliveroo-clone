import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "7ldi6dow",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
