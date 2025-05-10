import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Additional rules can be added here
    rules: {
      // Example rule: turn off unused expressions
      "@typescript-eslint/no-unused-expressions": "off",
      rules: {
        // Disable all rules
        "no-unused-vars": "off",
        "no-explicit-any": "off",
        "no-empty-object-type": "off",
        // Add other rules you want to disable
      },
    },
  },
];

export default eslintConfig;
