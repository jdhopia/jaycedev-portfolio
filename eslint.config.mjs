import eslint from "@eslint/js";
import next from "next";

export default [
  next(),
  eslint.configs.recommended
];
