const delay = {
  lg: 4500,
  md: 3000,
  sm: 1500,
}

export const createFakeRequest = <T>(
  cb: (res: (value: T) => void, rej: (value: unknown) => void) => void,
  delaySize?: keyof typeof delay
) =>
  new Promise<T>((res, rej) => {
    const timeout = setTimeout(
      () => {
        cb(res, rej)
        clearTimeout(timeout)
      },
      delay[delaySize ?? 'md']
    )
  })
