const path = require('path');

module.exports = {
  devServer: {
    hot: false, // Desactiva la recarga en caliente
    liveReload: false, // Desactiva la recarga en vivo
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
  },
  
  };
