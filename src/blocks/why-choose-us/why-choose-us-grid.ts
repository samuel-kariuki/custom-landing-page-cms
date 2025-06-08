import { Block } from "payload";

export const WhyChooseUsGrid: Block = {
    slug: 'why-choose-us-grid',
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true,
        },
        {
            type: 'text',
            name: 'description',
            required: true,
            maxLength: 100
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
                    type: 'text',
                    name: 'body',
                    required: true,
                    maxLength: 100
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