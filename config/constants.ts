import { downloadLinkType } from './types'

export const appName = 'Gryt' as const
export const selfHostLink = 'https://docs.gryt.chat/docs/server/introduction/setup' as const
export const downloadLinks: downloadLinkType = {
    'windows': '#windows',
    'mac os': '#macos',
    'linux': '#linux',
} as const