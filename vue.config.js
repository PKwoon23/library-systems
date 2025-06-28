module.exports = {
  transpileDependencies: [
    'some-dependency'  // เปลี่ยนชื่อเป็นชื่อ dependencies ที่ต้องการให้ transpile
  ],
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
    ],
  },
};
