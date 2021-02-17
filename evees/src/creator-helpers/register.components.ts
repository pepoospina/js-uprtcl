import { registerCommonUI } from '@uprtcl/common-ui';
import { Evees } from '../evees/evees.service';
import { registerEveesElements } from '../creator-helpers/evees.elements';

export const registerComponents = (evees: Evees) => {
  /** register common ui */
  registerCommonUI();

  /** register evees components */
  registerEveesElements();

  /** register module-specific components */
  if (evees.modules) {
    evees.modules.forEach((module) => {
      if (module.registerComponents) {
        module.registerComponents();
      }
    });
  }
};
