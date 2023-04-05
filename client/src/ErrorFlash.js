function ErrorFlash({ responseCode }) {
    if (responseCode && responseCode === '400') {
        return (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                Something went wrong, maybe the location you entered doesn't exit?
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    } else {
        return null
    }
}

export default ErrorFlash