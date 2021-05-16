---
to: <%= absPath %>/<%= component_name %>.tsx
---
import * as React from 'react';
import { View } from 'react-native';

type <%= component_name %>Props{};

/**
 * <%= component_name %>
 * returns <%= component_name %>
 */
function <%= component_name %>({}:<%= component_name %>Props){
  return <View />;
};

export default <%= component_name %>;