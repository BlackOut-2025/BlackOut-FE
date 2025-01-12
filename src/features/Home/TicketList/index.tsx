import * as s from './style.css'
import TicketItem from '@/features/Home/TicketList/TicketItem'
import JHopeImage from '@/common/assets/JHope.png'
import JannabiImage from '@/common/assets/Jannabi.png'
import BlackSkirtsImage from '@/common/assets/BlackSkirts.png'
import SynthesizeImage from '@/common/assets/Synthesize.png'
import IUImage from '@/common/assets/IU.png'

const Banners = [
  {
    image: JHopeImage,
    title: 'j-hope Tour ‘HOPE ON THE STAGE’ in SEOUL',
  },
  {
    image: JannabiImage,
    title: '‘JANNABI ON THE STAGE’ in SEOUL',
  },
  {
    image: BlackSkirtsImage,
    title: '‘BLACK SKIRTS ON THE STAGE’ in SEOUL',
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

const HomeTicketList = () => {
  return (
    <div className={s.Wrapper}>
      {Banners.map((banner, index) => (
        <TicketItem key={index} image={banner.image} title={banner.title} />
      ))}
    </div>
  )
}

export default HomeTicketList
