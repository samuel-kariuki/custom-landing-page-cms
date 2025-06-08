import { Block } from "payload";

export const WhyChooseUsColumn: Block = {
    slug: 'why-choose-us-column',
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        }, {
            type: 'text',
            name: 'description',
            required: false,
        }, {
            type: 'upload',
            name: 'image',
            relationTo: 'media'
        }, {
            type: 'array',
            name: 'options',
            required: true,
            maxRows: 5,
            fields: [{
                type: 'text',
                name: 'title',
                required: true
            }, {
                type: 'text',
                name: 'description',
                required: false
            }]
        }
    ]
}