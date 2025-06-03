/**
 * Component that displays the product image inside a styled figure element.
 * Falls back to a placeholder if no image is provided.
 *
 * @param {Object} props
 * @param {Array} props.images - List of image objects with 'original' or 'thumbnail' keys.
 * @param {string} props.alt - Alternative text for the image.
 */

function DetailImage({ images, alt }) {
    const imageUrl =
        images?.[0]?.original ||
        images?.[0]?.thumbnail ||
        "/placeholder.jpg";

    return (
        <figure className="list__photo">
            <img
                className="list__image"
                src={imageUrl}
                alt={alt || "Product image"}
                loading="lazy"
            />
        </figure>
    );
}

export default DetailImage;
