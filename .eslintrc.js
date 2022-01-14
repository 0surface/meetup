module.exports = {
    env: {
      browser: true,
    },
    extends: ["plugin:prettier/recommended", "prettier/react"],    
    rules: {
      "prettier/prettier": ["error"],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    }
};