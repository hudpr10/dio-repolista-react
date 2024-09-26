import { RepoContainer } from "./style";


function Repo({ data, handleRemove }) {
    return (
        <RepoContainer key={Number(data.id)}>
            <h3>{data.name}</h3>
            <div>
                <a href={data.html_url} className="link">{data.full_name}</a>
                <button onClick={handleRemove} id={data.id}>Remover</button>
            </div>
            <hr />
        </RepoContainer>
    )
}

export default Repo;