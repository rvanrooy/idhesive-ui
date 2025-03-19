module.exports = {
  idhesive: {
    output: {
      mode: 'tags-split',

      target: 'src/idhesive.ts',

      schemas: 'src/model',

      client: 'react-query',

      mock: true
    },

    input: {
      target: '../spec/tsp-output/schema/openapi.yaml'
    }
  }
};
