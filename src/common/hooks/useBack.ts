import { useActivity, useFlow } from '@stackflow/react/future'

export const useBack = () => {
  const { pop } = useFlow()
  const { isRoot } = useActivity()

  return () => (isRoot ? pop() : pop())
}
