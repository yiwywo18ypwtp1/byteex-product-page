import { defineType, defineField } from "sanity";

export default defineType({
    name: "testimonialsSection",
    title: "Testimonials Section",
    type: "document",
    fields: [

        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),

        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "text",
        }),

        defineField({
            name: "photos",
            title: "Gallery Photos",
            type: "array",
            of: [{ type: "image" }],
        }),

        defineField({
            name: "reviews",
            title: "Reviews",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "review",
                    fields: [
                        { name: "photo", title: "Photo", type: "image" },
                        { name: "name", title: "Name", type: "string" },
                        { name: "text", title: "Text", type: "text" },
                    ],
                },
            ],
        }),
    ],
});
