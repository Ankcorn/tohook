import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

addDecorator(
  withOptions({
    theme: {
      ...themes.dark,
      mainFill: '#102A43'
    },
  })
);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
