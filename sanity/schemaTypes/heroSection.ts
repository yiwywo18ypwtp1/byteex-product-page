import { defineType, defineField } from "sanity";

export default defineType({
    name: "heroSection",
    title: "Hero Section",
    type: "document",
    fields: [

        defineField({
            name: "title",
            title: "Title",
            type: "text",
        }),

        defineField({
            name: "leftPhoto",
            title: "Left photo",
            type: "image",
            options: { hotspot: true }
        }),

        defineField({
            name: "centerPhoto",
            title: "Center photo",
            type: "image",
            options: { hotspot: true }
        }),

        defineField({
            name: "rightPhoto",
            title: "Right photo",
            type: "image",
            options: { hotspot: true }
        }),

        defineField({
            name: "review",
            title: "Review block",
            type: "reviewObject"
        }),

        defineField({
            name: "featuresList",
            title: "Features list",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "feature",
                    fields: [
                        { name: "svg", title: "Svg icon", type: "file" },
                        { name: "text", title: "Text", type: "text" },
                    ],
                },
            ],
        }),
    ],
});
