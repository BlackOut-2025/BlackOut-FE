import { motion } from 'framer-motion'

import * as s from './style.css'

export const LoadingSpinner = () => {
  return (
    <div className={s.Spinner}>
      <div className={s.SpinnerTrack} />
      <motion.div
        className={s.SpinnerIndicator}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
