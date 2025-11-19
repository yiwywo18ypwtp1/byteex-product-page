import { defineType, defineField } from "sanity";

export default defineType({
    name: "faqSection",
    title: "FAQ Section",
    type: "document",
    fields: [

        defineField({
            name: "title",
            title: "Title",
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

        defineField({
            name: "questions",
            title: "Questions",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "question",
                    fields: [
                        { name: "title", title: "Title", type: "text" },
                        { name: "text", title: "Text", type: "text" },
                    ],
                },
            ],
        }),
    ],
});
