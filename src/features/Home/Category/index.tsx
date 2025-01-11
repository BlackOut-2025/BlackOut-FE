import { Button } from '@mantine/core'

import * as s from './style.css'

const HomeCategory = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.CategoryWrapper}>
        <Button size="xs" radius="xl" color="dark.7">
          콘서트
        </Button>
        <Button size="xs" radius="xl" color="gray.2">
          뮤지컬
        </Button>
        <Button size="xs" radius="xl" color="gray.2">
          연극
        </Button>
        <Button size="xs" radius="xl" color="gray.2">
          클래식/무용
        </Button>
        <Button size="xs" radius="xl" color="gray.2">
          팬클럽/팬미팅
        </Button>
      </div>
    </div>
  )
}

export default HomeCategory
