import { a11yRules } from './a11yRules.js';
import { bestPracticesRules } from './bestPracticesRules.js';
import { errorsRules } from './errorsRules.js';
import { es6Rules } from './es6Rules.js';
import { importsRules } from './importsRules.js';
import { nodeRules } from './nodeRules.js';
import { reactRules } from './reactRules.js';
import { strictRules } from './strictRules.js';
import { styleTules } from './styleRules.js';
import { variablesRules } from './variablesRules.js';

export const rules = {
  ...bestPracticesRules,
  ...errorsRules,
  ...es6Rules,
  ...importsRules,
  ...nodeRules,
  ...strictRules,
  ...styleTules,
  ...variablesRules,
  ...a11yRules,
  ...reactRules,
};
