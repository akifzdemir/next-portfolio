import Layout from "@/components/Layout";

export const metadata = {
    title: "About"
}

const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
}

export default function About() {
    return (
        <Layout variants={variants}>
            <div className="flex flex-col  mt-10 md:mt-5 lg:mt-0  h-screen w-full justify-center items-center ">
                <div>
                    <h1 className="md:text-4xl text-2xl font-bold">About me </h1>
                </div>
                <div className="mt-3 flex flex-col dark:shadow-zinc-600 dark:shadow-lg shadow-2xl p-4  lg:p-10 rounded-2xl gap-4 text-base xl:text-xl font-light text-left ">
                    <p>
                        Hello there! My name is Mehmet Akif, and I'm a third-year computer engineering student with a passion for developing software applications.
                        With extensive experience in Java, Spring boot, .NET, React, HTML, CSS, JavaScript, Next.js, Node.js, and SQL, I have a strong foundation in full-stack development.
                    </p>
                    <p>
                        In addition to my technical skills, I have also learned essential concepts such as data structures, algorithms,
                        database management and more in my academic studies. I'm excited to utilize these skills to develop scalable and efficient software solutions.
                    </p>

                    <p>
                        As a curious learner, I enjoy keeping up with the latest trends and technologies in the field and implementing them in my projects.
                        I'm a self-motivated individual with a strong work ethic and problem-solving skills.

                    </p>

                    <p>
                        If you're looking for a dedicated and skilled computer engineering student with a passion for software development,
                        I'd love to connect with you. Please feel free to reach out to me.
                    </p>
                </div>
            </div>
        </Layout>
    )
}
