// This snippet file was generated by processing the source file:
// ./appcheck-next/index.js
//
// To make edits to the snippets in this file, please edit the source

// [START appcheck_initialize_custom_provider_modular]
import { initializeApp } from "firebase/app";
import { initializeAppCheck } from "firebase/app-check";

const app = initializeApp({
  // Your firebase configuration object
});

const appCheck = initializeAppCheck(app, {
  provider: appCheckCustomProvider
});
// [END appcheck_initialize_custom_provider_modular]