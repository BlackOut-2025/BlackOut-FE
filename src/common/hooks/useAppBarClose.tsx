import type { MouseEvent } from 'react'

import { IconChevronLeft, IconX } from '@tabler/icons-react'

import { useBack } from './useBack'

export type CloseButtonType = 'back' | 'close'

export type CloseButtonCycle = {
  color?: string
  onBeforeClose?: () => boolean | Promise<boolean>
  onClose?: () => void
}

type Props = CloseButtonCycle

export const useAppBarClose = ({ color, onClose, onBeforeClose }: Props) => {
  const back = useBack()

  const renderClose = (type: CloseButtonType) => ({
    onClick: async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (onClose) {
        onClose()
        return
      }

      if (!onBeforeClose || (await onBeforeClose())) {
        back()
      }
    },
    renderIcon: () =>
      type === 'back' ? (
        <IconChevronLeft width={24} height={24} color={color} />
      ) : (
        <IconX width={24} height={24} color={color} />
      ),
  })

  return renderClose
}
