import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Text } from '../components/input'


storiesOf('Text Input', module)
  .addDecorator(withKnobs)
  .add('animate on focus', () => <Text />)