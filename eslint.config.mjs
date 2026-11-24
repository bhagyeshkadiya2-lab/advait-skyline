import nextPlugin from "@next/eslint-plugin-next";
import hooksPlugin from "eslint-plugin-react-hooks";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      "react-hooks": hooksPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "archive/**",
      "out/**",
      "public/**",
      "next-env.d.ts",
    ],
  },
];
