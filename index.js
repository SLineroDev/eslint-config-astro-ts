/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  // eslint-configs
  env: {
    es2022: true,
		node: true,
		browser: true,
	},
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
	parser: "@typescript-eslint/parser",
	parserOptions: {
    ecmaVersion: "latest",
		sourceType: "module",
	},
  // eslint-plugins
  plugins: ['simple-import-sort'],
  // enabling/disabling/changing level of rules
  rules: {
    'class-methods-use-this': 'off',
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'prettier/prettier': [
      'error',
      // configure Prettier for ESLint
      {
        arrowParens: 'avoid',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    radix: 'off',
  },
  overrides: [
    {
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
			rules: {
				"astro/no-conflict-set-directives": "warn",
				"astro/no-unused-define-vars-in-style": "warn",
				"astro/no-unused-css-selector": "off",
				"astro/prefer-class-list-directive": "warn",
				"astro/semi": ["warn", "never"],
				"astro/jsx-a11y/anchor-is-valid": "warn",
				"@stylistic/ts/indent": "off",
			},
		},
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        "prettier/prettier": "off",
      },
    },
    {
      // Define the configuration for `<script>` tag when using `client-side-ts` processor.
      // Script in `<script>` is assigned a virtual file name with the `.ts` extension.
      files: ["**/*.astro/*.ts", "*.astro/*.ts"],
      env: {
        browser: true,
        es2020: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: null,
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        "prettier/prettier": "off",
      },
    },
  ]
};