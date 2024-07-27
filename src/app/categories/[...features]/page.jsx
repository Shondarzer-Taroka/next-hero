

const page = ({params}) => {
    console.log(params);

    if (params.features.length==3) {
        return <div className="h-screen text-center">{params.features[2]}</div>
    } 
    if (params.features.length==2) {
        return <div className="h-screen text-center">{params.features[1]}</div>
    } 
    if (params.features.length==1) {
        return <div className="h-screen text-center">{params.features[0]}</div>
    } 
    return (
        <div>
            
        </div>
    );
};

export default page;