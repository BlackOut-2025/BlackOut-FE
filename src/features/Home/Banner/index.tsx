import { Carousel } from '@mantine/carousel'
import { Text } from '@mantine/core'
import { IconBell } from '@tabler/icons-react'

import * as s from './style.css'

import BannerImage from '@/common/assets/JHope.png'

const HomeBanner = () => {
  return (
    <div
      className={s.Wrapper}
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className={s.Wrapper} style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)', paddingTop: '1.875rem' }}>
        <div className={s.TitleWrapper}>
          <Text size="lg" fw={700}>
            BANNER
          </Text>
          <IconBell size={24} />
        </div>
        <Carousel slideSize="70%" height={200} slideGap="md" loop withControls={false} style={{ height: '13.5rem' }}>
          <Carousel.Slide>
            <div>1</div>
          </Carousel.Slide>
        </Carousel>
        <div className={s.Content}>
          <div>hi</div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
