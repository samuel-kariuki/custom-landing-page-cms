import { ContentWithMedia } from "@/blocks/content-with-media";
import { SimpleCallToAction } from "@/blocks/cta/simple-call-to-action";
import { SimpleHero } from "@/blocks/hero/simple-hero";
import { CollectionConfig } from "payload";
import type { Field } from "payload";
import { anchorIds } from "@/utils/anchor-id";
import { SimpleContact } from "@/blocks/contact/simple-contact";
import { MultiLocation } from "@/blocks/contact/multi-location";
import { ImageGridCta } from "@/blocks/cta/image-grid-cta";
import { TwoImageCta } from "@/blocks/cta/two-image-cta";
import { generateUrl } from "@/utils/generate-url";
import { WhyChooseUsGrid } from "@/blocks/why-choose-us/why-choose-us-grid";
import { WhyChooseUsColumn } from "@/blocks/why-choose-us/why-choose-us-column";
import { NavigationField } from "./fields/navigation-field";

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
    defaultSort: ['-title', '-number'],
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
                        description: 'Add title and country. Save to autogenerate',
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
                    minLength: 140,
                    maxLength: 150,
                    admin: {
                        description: '140 - 150 characters'
                    }
                },
                {
                    type: 'text',
                    name: 'search console',
                    required: true
                }, {
                    type: 'text',
                    name: 'analytics',
                    required: true
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
            name: 'why choose us',
            blocks: [WhyChooseUsGrid, WhyChooseUsColumn],
            maxRows: 1,
            minRows: 1
        },
        {
            type: 'blocks',
            name: 'content',
            blocks: [ContentWithMedia],
            label: 'Content',
            minRows: 1
        },
        {
            type: 'blocks',
            name: 'call to action',
            blocks: [SimpleCallToAction, ImageGridCta, TwoImageCta],
            minRows: 1,
            maxRows: 1
        },
        {
            type: 'blocks',
            name: 'contact',
            blocks: [SimpleContact, MultiLocation],
            maxRows: 1,
            minRows: 1
        },
        {
            type: 'select',
            name: 'footer style',
            options: ['default', 'tiny'],
            defaultValue: 'default'
        }
    ]
}