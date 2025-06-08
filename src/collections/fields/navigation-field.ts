import { anchorIds } from "@/utils/anchor-id";
import { Field } from "payload";

export const NavigationField: Field = {
    type: 'group',
    name: 'navigation',
    fields: [
        {
            type: 'upload',
            name: 'logo',
            relationTo: 'media'
        },
        {
            type: 'array',
            name: 'menuItems',
            required: true,
            minRows: 1,
            fields: [
                {
                    type: 'text',
                    name: 'anchor name',
                    required: true,
                },
                {
                    type: 'select',
                    name: 'anchor id',
                    required: true,
                    label: 'Anchor ID',
                    options: anchorIds,
                    hasMany: false,
                    admin: {
                        description: 'The ID of the section this menu item links to (without the # symbol)'
                    }
                },
                {
                    type: 'select',
                    name: 'style',
                    options: [
                        {
                            label: 'Default',
                            value: 'default'
                        },
                        {
                            label: 'Primary',
                            value: 'primary'
                        },
                        {
                            label: 'Secondary',
                            value: 'secondary'
                        }
                    ],
                    defaultValue: 'default'
                }
            ]
        }
    ]
}