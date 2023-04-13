import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { useEffect, useState } from 'react'


export default function Projects({ GITHUB_AUTH_TOKEN }) {
    const headers = {
        'Authorization': `Bearer ${GITHUB_AUTH_TOKEN}`
    }
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getRepos = async () => {
        try {
            const res = await fetch(`https://api.github.com/users/akifz21/repos?sort=created`, { headers })
            const data = await res.json()
            const repos = data.sort((a, b) => b.watchers - a.watchers)
            setRepos(repos)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(process.env.GITHUB_AUTH_TOKEN)
        getRepos()
    }, [])

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
                    isLoading ?
                        <div className='h-screen'>

                            <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span>
                            </div>
                        </div> :
                        repos.map((repo) => (
                            <Card key={repo.id} name={repo.name} watchers={repo.watchers} description={repo.description} url={repo.html_url} />
                        ))
                }

            </div>
        </Layout>

    )
}

export async function getStaticProps() {
    const { GITHUB_AUTH_TOKEN } = process.env

    return {
        props: {
            GITHUB_AUTH_TOKEN,
        },
    }
}
