

export default function FooterComponents() {
  let date = new Date()
  return (
    <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between small">
          <div className="text-muted">Copyright &copy; Storage Store @{date.getFullYear()}</div>
        </div>
      </div>
    </footer>
  )
}
