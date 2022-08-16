# Brian Sunter's Knowledge Graph
My public logseq knowledge graph and tooling to deploy it.

Builds a static site out of my logseq knowledge graph and deploys it to AWS Cloudfront.
## Setup
1. Click export public pages to hugo in logseq (provided you have logseq Schrodinger installed)
1. Unzip the file and move the contents into the content directory
    - it should have a search file, an archives file and two folders(assets and pages)
1. Type hugo server -D to run the website locally
1. Type hugo -D to build the website into a static site

Made with [logseq-schrodinger](https://github.com/sawhney17/logseq-schrodinger)