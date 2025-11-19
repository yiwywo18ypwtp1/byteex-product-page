import { defineType, defineField } from "sanity";

export default defineType({
    name: "aboutSection",
    title: "About Section",
    type: "document",
    fields: [

        defineField({
            name: "title",
            title: "Title",
            type: "text",
        }),

        defineField({
            name: "text",
            title: "Text",
            type: "text",
        }),

        defineField({
            name: "topPhoto",
            title: "Top photo",
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
            name: "bottomPhoto",
            title: "Bottom photo",
            type: "image",
            options: { hotspot: true }
        }),
    ],
});
