const SinglePage = ({params}) => {
    console.log(params);
    return <div>
        <h3>This Blog Has Special Id : {params.id}</h3>
    </div>
};
export default SinglePage;