function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  function clearForm() {
    setWithdraw('');
    setDisabled(true);
    setShow(true);
  }

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function handleChange(e) {
    setWithdraw(e.currentTarget.value);
    setDisabled(!e.currentTarget.value);
  }

  function handleCreate() {
    if (!validate(withdraw,     '0'))     return;
    if (withdraw > ctx.users[0].balance) {
      validate(false, "Insufficient funds");
      clearForm();
      return;
    }
    if (withdraw <= 0) {
      validate(false, "Invalid withdraw amount");
      clearForm();
      return;
    }
    if (isNaN(withdraw)) {
      validate(false, "Value must be a number");
      clearForm();
      return;
    }
    ctx.users[0].balance = Math.round(ctx.users[0].balance) - Math.round(withdraw);
    console.log(ctx.users);
    setShow(false);
  }

  
  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? (
      <>
          <h3>Balance ${ctx.users[0].balance.toFixed(2)}</h3>
          <br />
        Withdraw Amount
        <br />
        
        <Money 
          placeholder="Enter withdraw amount"
          onChange={handleChange}                
        />
                                   
        <Click
           text="Submit"
           disabled={disabled}
           variant="primary"
           onClick={handleCreate}
           className="btn btn-outline-light"
          />
      </>
):(
    <>
      <h3>Balance ${ctx.users[0].balance.toFixed(2)}</h3>
      <br />
      <h6>Your account has been updated!</h6>
      <Click
        text="Start Another Transaction"
        className="btn btn-success"
        onClick={clearForm}
      />
    </>

)}
/>
  )
}
