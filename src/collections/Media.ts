import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'aspect',
      type: 'select',
      options: ['landscape', 'portrait', 'square'],
      defaultValue: 'landscape'
    }
  ],
  upload: true,
  folders: true,
}
