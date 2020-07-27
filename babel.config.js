module.exports = {
  presets: [[
    '@vue/app', {
      useBuiltIns: 'entry'
    }
  ]
  ],
  plugins: [["import", {
    libraryName: "view-design",
    libraryDirectory: "src/components"
  }]]
};
