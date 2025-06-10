import { Block } from "payload";

const WhyChooseUsColumn: Block = {
    slug: 'why-choose-us-column',
    labels: {
        singular: 'Why Choose Us - Column',
        plural: 'Why Choose Us - Column'
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        }, {
            type: 'richText',
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
                type: 'richText',
                name: 'description',
                required: false
            }]
        }
    ]
}

export default WhyChooseUsColumn