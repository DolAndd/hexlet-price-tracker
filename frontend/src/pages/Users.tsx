import { Head } from '@inertiajs/react'

export default function Users({ users }: { users: any }) {
  return (
    <div className="p-8">
      <Head title="Users" />
      <h1 className="text-2xl font-bold">User List</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}