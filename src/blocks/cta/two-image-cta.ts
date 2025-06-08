import { Block } from "payload";

export const TwoImageCta: Block = {
    slug: 'two-image-cta',
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
            minRows: 2,
            maxRows: 2,
            required: true,
            fields: [{
                type: 'upload',
                name: 'image',
                relationTo: 'media'
            }]
        }
    ]
}