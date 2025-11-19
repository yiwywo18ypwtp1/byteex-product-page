import { defineType, defineField } from "sanity";

export default defineType({
    name: "impactSection",
    title: "Impact Section",
    type: "document",
    fields: [

        defineField({
            name: "title",
            title: "Title",
            type: "text",
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
                        { name: "title", title: "Title", type: "text" },
                        { name: "text", title: "Text", type: "text" },
                    ],
                },
            ],
        })
    ],
});
