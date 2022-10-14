const Loading = (props) => {
  return (
    <>
      <div className="col-12 text-center">
        {/* <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span> */}
        <span className="fa fa-circle-o-notch fa-spin fa-5x fa-fw " style={{ color: "#4b002c", animation: 'fa-spin 0.9s infinite linear' }}></span>
        <p style={{ textAlign: 'center' }}>Loading...</p>
      </div>
    </>
  )
}

export default Loading;