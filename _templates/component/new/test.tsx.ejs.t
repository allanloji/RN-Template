---
to: <%= absPath %>/__tests__/<%= component_name %>.test.tsx
---
import * as React from 'react';
import { render } from '@testing-library/react-native';
import <%= component_name %> from '../';

describe('<%= component_name %>', () => {
    test('renders successfully', () => {
        render(<<%= component_name %>  />);
    });
});
