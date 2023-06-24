import Card from '@/components/Card'
import Layout from '@/components/Layout'


const { GITHUB_AUTH_TOKEN } = process.env

const headers = {
    'Authorization': `Bearer ${GITHUB_AUTH_TOKEN}`
}

export const getData = async () => {
    try {
        const res = await fetch(`https://api.github.com/users/akifz21/repos?sort=created`, { cache: 'no-store', headers: { headers } })
        const data = await res.json()
        const repos = data.sort((a, b) => b.watchers - a.watchers)
        return repos
    } catch (error) {
        console.error(error);
    }
}

export const metadata = {
    title: "Projects"
}


const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
}

export default async function Projects() {

    const repos = await getData()

    return (
        <Layout variants={variants}>
            <div className='mt-24 flex flex-col gap-7 items-center content-center justify-center w-full' >
                <div className='text-center self-center'>
                    <h1 className="md:text-4xl text-2xl font-bold">Projects 📚</h1>
                </div>
                {
                    repos.map((repo) => (
                        <Card key={repo.id} name={repo.name} watchers={repo.watchers} description={repo.description} url={repo.html_url} />
                    ))
                }

            </div>
        </Layout>
    )
}
