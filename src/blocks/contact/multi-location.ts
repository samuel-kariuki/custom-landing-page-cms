import { Block } from "payload";

export const MultiLocation: Block = {
    slug: 'multi-location-contact',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'contact',
            type: 'group',
            fields: [
                {
                    name: 'phone',
                    type: 'array',
                    required: true,
                    minRows: 1,
                    fields: [
                        {
                            type: 'text',
                            name: 'number',
                            required: true
                        },
                        {
                            type: 'select',
                            name: 'type',
                            options: ['mobile', 'whatsapp', 'telephone'],
                            defaultValue: 'mobile'
                        }
                    ]
                },
                {
                    name: 'email',
                    type: 'array',
                    required: true,
                    minRows: 1,
                    fields: [
                        {
                            type: 'email',
                            name: 'email',
                            required: true
                        },
                        {
                            type: 'text',
                            name: 'icon',
                            defaultValue: 'mdi:email'
                        }
                    ]
                }
            ]
        },
        {
            type: 'group',
            name: 'location',
            fields: [
                {
                    type: 'array',
                    name: 'locations',
                    required: true,
                    minRows: 2,
                    fields: [
                        {
                            name: 'address',
                            type: 'richText',
                            required: true,
                        }, {
                            name: 'iframe',
                            type: 'text',
                            required: true
                        }
                    ]
                }
            ]
        }
    ]
}