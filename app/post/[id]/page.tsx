export interface PostParams {
    id: string
}

interface IProps {
    params: PostParams
}

const PostId = (props: IProps) => {

    const { params } = props;

    return (
        <h2>PostId with params id: {params.id}</h2>
    )
}

export default PostId;