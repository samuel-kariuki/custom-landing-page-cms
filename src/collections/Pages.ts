import { CollectionConfig } from "payload";
import { generateUrl } from "@/utils/generate-url";

import { NavigationField } from "./fields/navigation-field";
import { SimpleHero } from "@/blocks/hero/simple-hero";
import * as ContentBlocks from "@/blocks/content";
import * as ContactBlocks from "@/blocks/contact/simple-contact";

export const Page: CollectionConfig = {
    slug: 'page',
    access: {
        read: () => true,
        update: () => true,
        create: () => true
    },
    admin: {
        useAsTitle: 'title'
    },
    defaultSort: ['-number', '-title'],
    fields: [
        {
            type: 'row',
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    admin: {
                        width: '33%',
                    },
                    required: true,
                },
                {
                    type: 'select',
                    name: 'country',
                    required: true,
                    admin: {
                        width: '33%',
                    },
                    options: ['ke', 'tz', 'mz', 'cbv', 'stm']
                },
                {
                    type: 'text',
                    name: 'theme color',
                    admin: {
                        width: '33%',
                    },
                },
                {
                    type: 'text',
                    name: 'core values',
                    admin: {
                        width: '33%',
                    }
                },
                {
                    type: 'text',
                    name: 'url',
                    required: true,
                    admin: {
                        width: '33%',
                        description: 'Add all required fields and save to autogenerate',
                    },
                    hooks: {
                        beforeValidate: [({ value, siblingData }) => {
                            value = generateUrl({ title: siblingData.title, country: siblingData.country })
                            return value
                        }]
                    }
                },
                {
                    type: 'richText',
                    name: 'operating hours',
                    admin: {
                        width: '33%'
                    }
                }
            ]
        },
        {
            type: 'group',
            name: 'seo',
            fields: [
                {
                    type: 'text',
                    name: 'meta title',
                    required: true,
                    minLength: 50,
                    maxLength: 60,
                    admin: {
                        description: '50 - 60 characters'
                    }
                },
                {
                    type: 'text',
                    name: 'meta description',
                    required: true,
                    minLength: 70,
                    maxLength: 150,
                    admin: {
                        description: '70 - 150 characters'
                    }
                },
                {
                    type: 'text',
                    name: 'search console',
                    required: true,
                    defaultValue: '<meta name="google-site-verification" content="N0HompzJ25uz2PejDBXT-26yePXEWujgsnsWOcVrNQQ">'
                }, {
                    type: 'text',
                    name: 'analytics',
                    required: true,
                    defaultValue: '<!-- Google tag (gtag.js) -->'
                },
            ]
        },
        NavigationField,
        {
            type: 'blocks',
            name: 'hero',
            blocks: [SimpleHero],
            maxRows: 1,
            minRows: 1,
        },
        {
            type: 'blocks',
            name: 'content',
            blocks: [...Object.values(ContentBlocks)],
            label: 'Content',
            minRows: 1
        },
        {
            type: 'blocks',
            name: 'contact',
            label: 'Contact',
            blocks: [...Object.values(ContactBlocks)],
            maxRows: 1,
            minRows: 1
        },
        {
            type: 'array',
            name: 'social links',
            fields: [
                {
                    type: 'text',
                    name: 'url',
                    required: true
                }, {
                    type: 'text',
                    name: 'title',
                    required: true
                }, {
                    type: 'select',
                    name: 'platform',
                    options: ['facebook', 'instagram', 'x (formerly twitter)', 'linkedin', 'youtube']
                }
            ]
        },
        {
            type: 'select',
            name: 'footer style',
            options: ['default', 'tiny'],
            defaultValue: 'default'
        }
    ]
}