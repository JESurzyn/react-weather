import Alert from 'react-bootstrap/Alert';

// function ErrorFlash({responseCode}) {
function ErrorFlash({show, setShow}) {
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Something went wrong</Alert.Heading>
                <p className="mb-0">
                    maybe the location you entered doesn't exit?
                </p>
            </Alert>
        )
    } else {
    return null
    }
}

export default ErrorFlash
// function ErrorFlash({ responseCode }) {
//     if (responseCode && responseCode === '400') {
//         return (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//                 Something went wrong, maybe the location you entered doesn't exit?
//                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//             </div>
//         )
//     } else {
//         return null
//     }
// }

// export default ErrorFlash