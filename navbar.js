function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home"><Icon /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"> 
            <a className="nav-link" href="#/CreateAccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create Account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Deposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Withdraw">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account Overview">Account Overview</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}