type Image = {
    src: string,
    alt: string
}

type Entry = {
    img: Image,
    title: string,
    country: string,
    googleMapsLink: string,
    dates: string,
    text: string
}

type EntryProps = {
    entry: Entry
}

export default function Entry(props: EntryProps) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.entry.img.src} className="main-image" alt={props.entry.img.alt} />
            </div>
            <div className="info-container">
                <div className="first-info-container">
                    <img src="app/images/Fill 219.png" className="marker" alt="" />
                    <span className="country">{props.entry.country}</span>
                    <a className="journal-link" href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1 className="entry-title">{props.entry.title}</h1>
                <p className="trip-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
            </div>
        </article>
        
    )
}