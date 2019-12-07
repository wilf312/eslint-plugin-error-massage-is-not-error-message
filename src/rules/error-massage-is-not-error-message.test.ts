import { RuleTester } from "eslint";

import rule from "./error-massage-is-not-error-message";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

tester.run("no-reteral", rule, {
  valid: [
    { code: `let errorMessage` },
  ],
  invalid: [
    {
      code: `const x = 'errorMassage';`,
      errors: [{ message: "errorMassage is mAssage!" }],
    },
    {
      code: `const errorMassage = 'a';`,
      errors: [{ message: "errorMassage is mAssage!" }],
    }
  ],
});
