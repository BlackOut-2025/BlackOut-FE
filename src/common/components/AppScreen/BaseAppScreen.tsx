import { AppScreen, AppScreenProps } from '@stackflow/plugin-basic-ui'
import { ErrorBoundary } from '@toss/error-boundary'

import * as s from './style.css'

import { CloseButtonCycle, useAppBarClose } from '@/common/hooks/useAppBarClose'
import { vars } from '@/theme'

export type BaseAppScreenProps = AppScreenProps &
  Partial<Pick<Parameters<typeof ErrorBoundary>[0], 'renderFallback'>> &
  CloseButtonCycle & {
    showBorder?: boolean
    showCloseButton?: boolean
    showBackButton?: boolean
  }

export const BaseAppScreen = ({
  onBeforeClose,
  onClose,
  children,
  appBar,
  showBorder = false,
  showCloseButton = false,
  showBackButton = false,
  renderFallback = () => <></>,
  ...appScreenProps
}: BaseAppScreenProps) => {
  const renderAppBarLeft = useAppBarClose({
    onBeforeClose,
    onClose,
  })
  const renderChildren = () => (
    <div className={s.Wrapper}>
      <ErrorBoundary renderFallback={renderFallback}>{children}</ErrorBoundary>
    </div>
  )
  return (
    <AppScreen
      {...appScreenProps}
      backgroundColor={vars.colors.BG[0]}
      appBar={{
        borderSize: showBorder ? '0.5px' : '0',
        borderColor: vars.colors.dark[1],
        iconColor: vars.colors.black[6],
        textColor: vars.colors.black[6],
        closeButton: showCloseButton ? renderAppBarLeft('close') : undefined,
        backButton: showBackButton ? renderAppBarLeft('back') : undefined,
        ...appBar,
        renderRight: () => <div className={s.RightWrapper}>{appBar?.renderRight?.()}</div>,
      }}
    >
      {renderChildren()}
    </AppScreen>
  )
}
