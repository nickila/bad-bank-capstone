function Deposit(){
  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function clearForm() {
    setDeposit('');
    setDisabled(true);
    setShow(true);
  }

  function handleChange(e) {
    setDeposit(e.currentTarget.value);
    setDisabled(!e.currentTarget.value);
  }

  function handleCreate() {
    console.log(deposit);
    if (!validate(deposit,     '0'))     return;
    if (deposit <= 0) {
      validate(false, "Invalid deposit amount");
      clearForm();
      return;
    }
    if (isNaN(deposit)) {
      validate(false, "Value must be a number");
      clearForm();
      return;
    }
    ctx.users[0].balance = Math.round(ctx.users[0].balance) + Math.round(deposit);
    console.log(ctx.users);
    setShow(false);
  }

  
  return (
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? (
      <>
          <h3>Balance ${ctx.users[0].balance.toFixed(2)}</h3>
          <br />
        Deposit Amount
        <br />
        
        <Money
          onChange={handleChange}
          placeholder="Enter deposit amount"             
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