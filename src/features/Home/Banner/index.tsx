import { Badge, Text } from '@mantine/core'
import { IconBell, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

import * as s from './style.css'

import BannerImage from '@/common/assets/JHope.png'
import { usePrevNextButtons } from '@/features/Home/hooks/carousel-button'
import { vars } from '@/theme'

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
        <div className={s.CarouselWrapper}>
          <Badge color="gray.9">
            <Text size="xs">단독</Text>
          </Badge>
          <div className={s.CarouselSlide}>
            <div ref={emblaRef} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', backfaceVisibility: 'hidden', alignItems: 'center' }}>
                {Array.from({ length: 5 }).map((_, index) => (
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
                    style={{ backgroundImage: `url(${BannerImage})` }}
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
                j-hope Tour ‘HOPE ON THE STAGE’ in SEOUL
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
