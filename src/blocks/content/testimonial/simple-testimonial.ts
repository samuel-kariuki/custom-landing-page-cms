import { Block } from "payload";

const SimpleTestimonial: Block = {
    slug: 'simple-testimonial',
    labels: {
        singular: 'Simple Testimonial',
        plural: 'Simple Testimonials'
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
            type: 'array',
            name: 'testimonies',
            maxRows: 6,
            fields: [
                {
                    type: 'richText',
                    name: 'testimony',
                    required: true
                },
                {
                    type: 'text',
                    name: 'title',
                    required: true,
                }
            ]
        }
    ]
}

export default SimpleTestimonial