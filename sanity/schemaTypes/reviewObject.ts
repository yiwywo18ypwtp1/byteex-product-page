import { defineType } from "sanity";

export default defineType({
    name: "reviewObject",
    title: "Review",
    type: "object",
    fields: [
        { name: "photo", title: "Photo", type: "image" },
        { name: "name", title: "Name", type: "string" },
        { name: "text", title: "Text", type: "text" },
    ]
})