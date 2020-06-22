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
                  buildHookId: '5eeffda95de0e5666f686f46',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kwcr3tcu',
                  apiId: '70980f46-3ed3-4263-b9c2-659a7c432627'
                },
                {
                  buildHookId: '5eeffda9028bdd40c293e4d7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-39wsuhsf',
                  apiId: '5bd2fe5c-7c03-4bd2-b444-e010df80710f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pogoproductions/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-39wsuhsf.netlify.app',
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
