import { CheckboxWidget } from './components';

const applyConfig = (config) => {
  config.widgets.type = {
    ...config.widgets.type,
    boolean: CheckboxWidget,
  };
  return config;
};

export default applyConfig;
