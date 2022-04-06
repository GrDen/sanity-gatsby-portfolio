export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '624da74b36ad813d195ff64a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2v6k3hfz',
                  apiId: '89c3d07f-7862-43b5-8f44-8e37ad366d41'
                },
                {
                  buildHookId: '624da74c0117c7397f842e9c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yf65mwfe',
                  apiId: '29cb868a-47f7-4f38-bd8c-ad31e0e09753'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GrDen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yf65mwfe.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
