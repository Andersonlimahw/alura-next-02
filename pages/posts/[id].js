import { useRouter } from 'next/router';

const PostPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <h1>
            Posts page id: {id}
        </h1>
    )
}

export async function getStaticProps(context) {
    console.log(`Contexto: ${context}`);
    return {
        props: {
            id: context.params.id, 
            title: `Post: [${context.params.id}]`, 
            date: new Date().toLocaleDateString('pt-BR'),
            content: `Lorem ipsum dolor imit crivia.`
        }
    }
}

export async function getStaticPaths() {
    const paths = [
        { params: { id: `1` } },
        { params: { id: `2` } },
        { params: { id: `3` } }
    ]
    return {
        paths: paths,
        fallback: false // false vai para page 404, true vai carregar a pagina mas pode estar invalida, blocking aguarda o carregamento
    };
}

export default function PostByIdScren(props){
    return(
        <>
            <h1>
                {props.title}
            </h1>
            <p>
                Data: {props.date}
            </p>
            <h2>
                {props.content}
            </h2>
        </>
    )
}