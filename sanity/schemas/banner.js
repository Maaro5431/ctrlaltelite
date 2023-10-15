export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Backround',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image2',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image3',
      title: 'headLogo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
    },
  ],
}
