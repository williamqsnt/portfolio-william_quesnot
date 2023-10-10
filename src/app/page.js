import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-24" style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          I'm William Quesnot,<br /> welcome on my portfolio website
        </h1>
        <Link href="/about" className="text-blue-500 hover:underline text-base lg:text-lg">
          Learn more
        </Link>
      </div>
    </main>
  )
}
