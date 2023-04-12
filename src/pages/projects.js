import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Head from 'next/head'


export default function projects({ repos }) {
    return (
        <Layout>
            <Head>
                <title>Projects 📚</title>
            </Head>
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
export async function getServerSideProps(context) {
    const { GITHUB_AUTH_TOKEN } = process.env;

    const headers = {
        'Authorization': `Bearer ${GITHUB_AUTH_TOKEN}`
    }
    try {
        const res = await fetch(`https://api.github.com/users/akifz21/repos?sort=created`, { headers })
        const data = await res.json()
        const repos = data.sort((a, b) => b.watchers - a.watchers)
        return { props: { repos } }
    } catch (error) {
        console.error(error);
        return { props: {} };
    }
}



