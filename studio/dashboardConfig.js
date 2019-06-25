export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d11f6214bcf08052d9991fb',
                  title: 'Sanity Studio',
                  name: 'formetry-studio',
                  apiId: '473965f7-eb50-4fa1-bdc4-e6d019c759e0'
                },
                {
                  buildHookId: '5d11f621fb1a3dee4a2cc969',
                  title: 'Blog Website',
                  name: 'formetry',
                  apiId: '29eacd3c-63e3-479e-ba9e-4f3b346815be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ranganaut/formetry',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://formetry.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
