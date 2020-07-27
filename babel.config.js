module.exports = {
  presets: [[
    "@vue/cli-plugin-babel/preset", {
      useBuiltIns: 'entry'
    }
  ]
  ],
  plugins: [["import", {
    libraryName: "view-design",
    libraryDirectory: "src/components"
  }]]
};
