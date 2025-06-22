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
    rules: {
      // Disable unused variables error
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      
      // Disable unescaped entities error
      "react/no-unescaped-entities": "off",
      
      // Disable other problematic rules
      "react-hooks/exhaustive-deps": "warn",
      
      // Allow any console statements
      "no-console": "off",
      
      // Disable strict mode for better compatibility
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];

export default eslintConfig;
