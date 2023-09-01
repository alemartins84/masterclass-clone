import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'lkc88fqo', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from your sanity.json
  useCdn: true, // `false` if you want to ensure fresh data, see documentation for details
});