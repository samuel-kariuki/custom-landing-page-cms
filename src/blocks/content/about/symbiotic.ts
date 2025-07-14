import { Block } from 'payload'
import { anchorIds } from '@/utils/anchor-id'

const SymbioticAbout: Block = {
    slug: 'symbiotic-about',
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
            name: 'excerpt',
            required: true
        },
        {
            type: 'richText',
            name: 'body',
            required: true
        },
        {
            type: 'upload',
            name: 'image',
            relationTo: "media",
            required: true
        },
        {
            type: 'checkbox',
            name: 'highlight',
            defaultValue: false
        }
    ]
}

export default SymbioticAbout