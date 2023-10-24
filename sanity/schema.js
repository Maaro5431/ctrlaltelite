
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from 'D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/sanity/schemas/product'
import banner from 'D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/sanity/schemas/banner'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner]),
})
