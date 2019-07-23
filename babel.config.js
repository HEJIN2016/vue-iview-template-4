module.exports = {
  presets: [[
    '@vue/app', {
      useBuiltIns: 'entry'
    }
  ]
  ],
  plugins: [["import", {
    libraryName: "iview",
    libraryDirectory: "src/components"
  }]]
};
