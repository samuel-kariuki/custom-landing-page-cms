import { Block } from "payload";

const SimpleCallToAction: Block = {
    slug: 'simple-call-to-action',
    labels: {
        singular: 'Simple CTA',
        plural: 'Simple CTAs'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true
        },
        {
            name: 'description',
            type: 'richText',
            required: true
        },
        {
            name: 'buttonText',
            type: 'text',
            required: true
        }
    ]
}

export default SimpleCallToAction