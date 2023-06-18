export default function Diskusi({diskusi}) {
    return (
        <div>
            <section>
                <h2>{diskusi?.data.title}</h2>
            </section>
            <article className="quil-content" dangerouslySetInnerHTML={{ __html: diskusi.data.desk }} />
        </div>
    )
}