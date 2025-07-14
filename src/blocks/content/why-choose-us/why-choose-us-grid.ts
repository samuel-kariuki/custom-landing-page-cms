import { Block } from "payload";

const WhyChooseUsGrid: Block = {
    slug: 'why-choose-us-grid',
    labels: {
        singular: 'Why Choose Us - Grid',
        plural: 'Why Choose Us - Grid'
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true,
        },
        {
            type: 'richText',
            name: 'description',
            required: true,
        },
        {
            type: 'checkbox',
            name: 'highlight',
            defaultValue: false
        },
        {
            type: 'array',
            name: 'options',
            required: true,
            maxRows: 5,
            minRows: 5,
            fields: [
                {
                    type: 'text',
                    name: 'icon',
                    required: true
                }, {
                    type: 'text',
                    name: 'title',
                    required: true,
                    maxLength: 50
                }, {
                    type: 'richText',
                    name: 'body',
                    required: true,
                }
            ]
        },
        {
            type: "checkbox",
            name: "colored",
            defaultValue: false
        }
    ]
}

export default WhyChooseUsGrid