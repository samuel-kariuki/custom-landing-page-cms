import { Block } from 'payload'
import { anchorIds } from '@/utils/anchor-id'

const ContentWithGrid: Block = {
    slug: 'content-with-grid',
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        },
        {
            type: 'select',
            name: 'anchor id',
            required: false,
            options: anchorIds,
            hasMany: false,
            admin: {
                description: 'The ID of the section this menu item links to (without the # symbol)'
            }
        },
        {
            type: 'richText',
            name: 'body',
            required: true
        },
        {
            type: 'checkbox',
            name: 'highlight',
            defaultValue: false
        },
        {
            type: 'select',
            name: 'card type',
            options: ['basic', 'alternating', 'alternating basic'],
            defaultValue: 'basic'
        },
        {
            type: 'array',
            name: 'card grid',
            minRows: 1,
            fields: [
                {
                    type: 'upload',
                    name: 'image',
                    relationTo: 'media'
                },
                {
                    type: 'text',
                    name: 'title',
                    required: true
                },
                {
                    type: 'richText',
                    name: 'body',
                    required: true
                }
            ]
        }
    ]
}

export default ContentWithGrid