
export function LoadingFunc(get) {
    return (
        <div className="col px-1" key={get}>
            <div className="card px-0 h-100" style={{ padding: '170px 0' }}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}