import { useFetch } from 'usehooks-ts'

const url = `http://jsonplaceholder.typicode.com/posts`

interface Post {
    userId: number
    id: number
    title: string
    body: string
}

const UseFetch = () => {
    const { data, error } = useFetch<Post[]>(url)

    if (error) return <p>There is an error.</p>
    if (!data) return <p>Loading...</p>
    return (
        <div>
            <h2>useFetch sample</h2>
            <p>{data[0].title}</p>
        </div>
    )
}

export default UseFetch