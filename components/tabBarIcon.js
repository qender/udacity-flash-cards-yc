import React, {Fragment} from 'react';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
      <Fragment>
          {props.library === 'ionicons' && <Ionicons
              name={props.name}
              size={26}
              style={{ marginBottom: -3 }}
              color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />}

          {props.library === 'material-community' && <MaterialCommunityIcons
              name={props.name}
              size={26}
              style={{ marginBottom: -3 }}
              color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />}
      </Fragment>
  );
}
