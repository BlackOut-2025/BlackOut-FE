import * as s from './style.css'

import { ConcertInterface } from '@/common/types/concert'

const ConcertBanner = ({ imgUrl, title }: ConcertInterface) => {
  return (
    <div
      className={s.Wrapper}
      style={{
        backgroundImage: `url(${imgUrl})`,
        marginBottom: '1.25rem',
      }}
    >
      <div
        className={s.Wrapper}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)', paddingTop: '1.25rem', paddingLeft: '1.25rem' }}
      >
        <img src={imgUrl} alt={`${title} 포스터`} className={s.Image} />
      </div>
    </div>
  )
}

export default ConcertBanner
