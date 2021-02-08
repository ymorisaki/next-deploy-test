import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type props = {
  home: boolean
}

const Logo: FC<props> = ({ home }) => {
  return (
    <>
      {home ? (
        <>
          <h1 className="logo">
            <Link href="/">
              <Image
                src="/vercel.svg"
                width={150}
                height={40}
                alt="vercel"
              />
            </Link>
          </h1>
        </>
      ) : (
        <>
          <div className="logo">
            <Link href="/">
              <Image
                src="/vercel.svg"
                width={150}
                height={40}
                alt="vercel"
              />
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default Logo
