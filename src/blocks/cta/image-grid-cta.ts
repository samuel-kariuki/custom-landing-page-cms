import { Block } from "payload";

export const ImageGridCta: Block = {
    slug: 'image-grid-cta',
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        },
        {
            type: 'richText',
            name: 'body',
            required: true
        },
        {
            type: 'array',
            name: 'images',
            minRows: 3,
            maxRows: 3,
            required: true,
            fields: [{
                type: 'upload',
                name: 'image',
                relationTo: 'media'
            }]
        }
    ]
}