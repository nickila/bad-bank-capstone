function AllData(){

  
  const ctx = React.useContext(UserContext);
  return (
    <container>
      <div className="card">
        <div className="container-fluid" font-size="4em">
        <br />
        <img src="person-badge.svg" width="35px" className="img-fluid" alt="Responsive image"/> User Data
        </div>
        <br />
        <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
      {ctx.users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>${user.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</container>
  );
}