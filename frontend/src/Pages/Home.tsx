import { PageProps } from '@inertiajs/core'

interface Props extends PageProps {
  title: string
}

export default function Home({ title }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}