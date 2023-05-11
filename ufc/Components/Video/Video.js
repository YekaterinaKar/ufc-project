function Video({ video }) {
    const aspectRatio = 16 / 9;
    const width = 650;
    const height = width / aspectRatio;

    return (
        <div>
            <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${video}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Video;
