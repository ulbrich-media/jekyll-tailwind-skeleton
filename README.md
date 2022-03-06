# jekyll-tailwind-skeleton
This repository serves as a template for your next Jekyll project. It's based on: 
- Docker
- Jekyll
- Webpack 
- TailwindCSS 

## First installation 

Install javascript dependencies and stuff 
```
yarn install
```
That's all. 

## Commands 

Make sure Docker is running! 

### Start dev environment
Starting the docker container may take some take. Once it's done loading the page is available on [http://0.0.0.0:4000](http://0.0.0.0:4000).  
```
yarn watch
```
If you save something, the page gets rendered automatically. You only need to refresh in your browser.

Once you're done just hit CTRL+C to shut down everything. 

### Build live website 
This will definitely take some time. You find the result in `site` when it's done. 
```
yarn build
```
