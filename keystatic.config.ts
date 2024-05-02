import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          description: "A short description of the post.",
        }),
        draft: fields.checkbox({ label: "Draft", defaultValue: true }),
        datePublished: fields.datetime({
          label: "Date Published",
        }),
        lastUpdated: fields.datetime({
          label: "Last Updated",
          validation: {
            isRequired: true,
          },
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "public/",
              publicPath: "/",
              schema: {
                title: fields.text({
                  label: "Caption",
                  description:
                    "The text to display under the image in a caption.",
                }),
              },
            },
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        abstract: fields.text({ label: "Abstract" }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "public/",
              publicPath: "/",
              schema: {
                title: fields.text({
                  label: "Caption",
                  description:
                    "The text to display under the image in a caption.",
                }),
              },
            },
          },
        }),
      },
    }),
  },
  singletons: {
    sequence: singleton({
      label: "Sequence of Text to load",
      schema: {
        text: fields.array(
          fields.text({ label: "Loading Text Sequence" }),
          // Labelling options
          {
            label: "Text",
            itemLabel: (props) => props.value,
          }
        ),
      },
    }),
  },
});
