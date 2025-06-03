function DetailImage({ images, alt }) {
    const imageUrl = images?.[0]?.original || images?.[0]?.thumbnail;
    return (
        <figure className="list__photo">
            <img className="list__image" src={imageUrl} alt={alt} />
        </figure>
    );
}

export default DetailImage;
