import { Badge, Text } from '@mantine/core'
import { IconBell, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

import * as s from './style.css'

import BannerImage from '@/common/assets/JHope.png'
import BlackSkirtsImage from '@/common/assets/BlackSkirts.png'
import JannabiImage from '@/common/assets/Jannabi.png'
import SynthesizeImage from '@/common/assets/Synthesize.png'
import IUImage from '@/common/assets/IU.png'
import { usePrevNextButtons } from '@/features/Home/hooks/carousel-button'
import { vars } from '@/theme'

const Banners = [
  {
    image: BannerImage,
    title: 'j-hope Tour ‘HOPE ON THE STAGE’ in SEOUL',
  },
  {
    image: JannabiImage,
    title: '‘JANNABI ON THE STAGE’ in SEOUL',
  },
  {
    image: BlackSkirtsImage,
    title: '2025 검정치마 단독공연 "SONGS TO BRING YOU HOME"',
  },
  {
    image: SynthesizeImage,
    title: '실리카겔 2025 TOUR in SEOUL',
  },
  {
    image: IUImage,
    title: 'IU 2025 TOUR in SEOUL',
  },
]
const HomeBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay()])

  const [currentSlide, setCurrentSlide] = useState(0)

  const logSlidesInView = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      const currentSlideIndex = emblaApi.internalEngine().index.get()
      setCurrentSlide(currentSlideIndex)
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', logSlidesInView)
  }, [emblaApi, logSlidesInView])

  console.log(currentSlide)

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)
  return (
    <div
      className={s.Wrapper}
      style={{
        backgroundImage: `url(${Banners[currentSlide].image})`,
      }}
    >
      <div className={s.Wrapper} style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)', paddingTop: '1.875rem' }}>
        <div className={s.TitleWrapper}>
          <Text size="lg" fw={700}>
            TIFT
          </Text>
          <IconBell size={24} />
        </div>
        <div className={s.CarouselWrapper}>
          <Badge color="gray.9">
            <Text size="xs">단독</Text>
          </Badge>
          <div className={s.CarouselSlide}>
            <div ref={emblaRef} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', backfaceVisibility: 'hidden', alignItems: 'center' }}>
                {Banners.map((banner, index) => (
                  <motion.div
                    key={index}
                    className={s.CarouselSlideItem}
                    animate={{
                      width: currentSlide === index ? '8.75rem' : '6.625rem',
                      height: currentSlide === index ? '11.875rem' : '8.875rem',
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut',
                      delay: 0.4,
                    }}
                    style={{ backgroundImage: `url(${banner.image})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={s.ContentWrapper}>
          <div className={s.Content}>
            <div className={s.ControlButton} onClick={onPrevButtonClick}>
              <IconChevronLeft size={24} color="white" />
            </div>
            <div className={s.Description}>
              <Text c={vars.colors.BG[0]} fw={700} style={{ textAlign: 'center' }}>
                {Banners[currentSlide].title}
              </Text>
              <Text c="gray.6" size="sm">
                2025.02.28 - 2025.03.02
              </Text>
            </div>
            <div className={s.ControlButton} onClick={onNextButtonClick}>
              <IconChevronRight size={24} color="white" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
