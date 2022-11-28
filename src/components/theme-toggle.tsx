import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Text, HStack, Switch, useColorMode, Icon } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack space={2} alignItems="center">
      <Icon
        as={ Feather }
        name="moon"
        size="md"
        opacity={0.9}
      />
      <Switch
        isChecked={colorMode==='light'}
        onToggle={toggleColorMode}
      ></Switch>
      <Icon
        as={ Feather }
        name="sun"
        size="md"
        opacity={0.9}
      />
    </HStack>
  )
}