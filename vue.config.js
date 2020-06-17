module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/css/_style.scss";
          @import "@/css/_variables.scss";
        `
      }
    }
  }
};
