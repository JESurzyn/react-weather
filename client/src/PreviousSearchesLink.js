function PreviousSearchesLink({location}) {
    const searchString = `?location=${location}`
    return (
        <div className="col">
            <a href={searchString}>{location}</a>
        </div>
    )
}

export default PreviousSearchesLink;