const Loading = () => {
    const urlImg = 'https://i.gifer.com/VAyR.gif';

    return (
        <div className="loading">
            <div className="loading__image">
                <img src={urlImg} alt="loading"/>
            </div>
        </div>
    );
};

export default Loading;
