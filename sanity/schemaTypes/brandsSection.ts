import { defineType, defineField } from "sanity";

export default defineType({
    name: "brandsSection",
    title: "Brands Section",
    type: "document",
    fields: [

        defineField({
            name: "title",
            title: "Title",
            type: "text",
        }),

        defineField({
            name: "carouselPhotos",
            title: "Carousel Photos",
            type: "array",
            of: [
                { type: "image" }
            ]
        }),

        defineField({
            name: "logoPhotos",
            title: "Logo photos",
            type: "array",
            of: [
                { type: "image" }
            ]
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
        }),
    ],
});
