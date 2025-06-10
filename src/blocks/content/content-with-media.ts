import { Block } from "payload";
import { anchorIds } from "@/utils/anchor-id";

const ContentWithMedia: Block = {
    slug: 'content-with-media',
    labels: {
        singular: 'Content with media block',
        plural: 'Content with media blocks'
    },
    fields: [{
        type: 'text',
        name: 'title',
        required: true
    }, {
        type: 'select',
        name: 'anchor id',
        required: true,
        unique: true,
        options: anchorIds,
        hasMany: false,
        admin: {
            description: 'The ID of the section this menu item links to (without the # symbol)'
        }
    }, {
        type: 'richText',
        name: 'body',
        required: true
    }, {
        type: 'upload',
        name: 'image',
        relationTo: "media",
        required: true
    }, {
        type: 'radio',
        name: 'text position',
        options: ['left', 'right']
    }, {
        type: 'checkbox',
        name: 'highlight',
        defaultValue: false
    }]
}

export default ContentWithMedia