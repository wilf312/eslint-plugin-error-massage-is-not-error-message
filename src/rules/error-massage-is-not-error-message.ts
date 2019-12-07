import { Rule } from "eslint";

import { checkTypo } from '../util'

const rule: Rule.RuleModule = {
  create: (context): Rule.RuleListener => {
    return {
      Literal: (node: any) => {
        const typo = checkTypo(node.value);
        if (typo) {
          context.report({
            message: `${node.value} is mAssage!`,
            node,
          });
        }

        // if (typo) {
        //   path.replaceWith(babel.types.stringLiteral(typo.fix));
        //   path.skip();
        // }
      },
      Identifier(node: any) {
        const typo = checkTypo(node.name);
        if (typo) {
          context.report({
            message: `${node.name} is mAssage!`,
            node,
          });
        }
      }
    };
  }
};

export = rule;
