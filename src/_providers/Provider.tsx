'use client'

import { themeApp } from '@/assets/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={themeApp}>
      <Global
        styles={
          css`
            html: {
              scroll-behavior: smooth;
            }`
        }
      />
      {children}
    </ChakraProvider>
  )
}
