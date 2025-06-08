import { Block } from "payload";

export const SimpleCallToAction: Block = {
    slug: 'simple-call-to-action',
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true
        },
        {
            name: 'description',
            type: 'text',
            required: true
        },
        {
            name: 'buttonText',
            type: 'text',
            required: true
        }
    ]
}