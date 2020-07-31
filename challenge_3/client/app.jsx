class App extends React.Component {
  constructor(props) {
    super(props);

    // reformat to have only one item and have that change the string based on what page I'm showing - ben pernick
    this.state = {
      currentPage: '',
      name: '',
      email: '',
      password: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipCode: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipCode: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.addData = this.addData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: event.target.value
    })
  }

  componentDidMount() {
    this.setState({
      currentPage: 'homepage'
    });
  }

  addData(data) {
    axios.post('/customerData', data)
      .then(() => console.log('Data has been posted'))
      .catch(() => console.log('There was an error posting data'))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return (
      <div>
        {this.state.currentPage === 'homepage' ? <HomePage addData={this.addData} handleClick={this.handleClick}/> : null}
        {this.state.currentPage === 'F1' ? <FormOne state={this.state}handleChange={this.handleChange} handleClick={this.handleClick}/> : null}
        {this.state.currentPage === 'F2' ? <FormTwo handleChange={this.handleChange} handleClick={this.handleClick}/> : null}
        {this.state.currentPage === 'F3' ? <FormThree handleChange={this.handleChange} handleClick={this.handleClick}/> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

function HomePage(props) {
  return (
    <div>
      <button value={'F1'} onClick={props.handleClick}>Checkout</button>
    </div>
  )
}

function FormOne(props) {
  return (
    <div>
      <form>
        <label>Name</label>
          <input type='text' name='name' value={props.state.name} onChange={props.handleChange}/>
      </form>
      <form>
        <label>Email</label>
          <input type='text' name='email' value={props.state.email} onChange={props.handleChange}/>
      </form>
      <form>
        <label>Password</label>
          <input type='text' name='password' value={props.state.password} onChange={props.handleChange}/>
      </form>
      <button value={'F2'} onClick={props.handleClick}>Next</button>
    </div>
  )
}

// class FormOne extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       email: '',
//       password: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     console.log(event);
//     this.setState({
//       name: '',
//       email: '',
//       password: ''
//     })
//     this.props.addData(this.state);
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <label>Name</label>
//             <input type='text' value={this.state.name} onChange={this.handleChange}/>
//         </form>
//         <form>
//           <label>Email</label>
//             <input type='text' value={this.state.email} onChange={this.handleChange}/>
//         </form>
//         <form>
//           <label>Password</label>
//             <input type='text' value={this.state.password} onChange={this.handleChange}/>
//         </form>
//         <button value={'F2'} onClick={this.props.handleClick}>Next</button>
//       </div>
//     )
//   }
// }

class FormTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Address</label>
            <input type='text' value={this.state.addressOne} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Address</label>
            <input type='text' value={this.state.addressTwo} onChange={this.handleChange}/>
        </form>
        <form>
          <label>City</label>
            <input type='text' value={this.state.city} onChange={this.handleChange}/>
        </form>
        <form>
          <label>State</label>
            <input type='text' value={this.state.state} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Zip Code</label>
            <input type='text' value={this.state.zipCode} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Phone Number</label>
            <input type='text' value={this.state.phoneNumber} onChange={this.handleChange}/>
        </form>
        <button value={'F3'} onClick={this.props.handleClick}>Next</button>
      </div>
    )
  }
}

class FormThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipCode: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipCode: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Credit Card #</label>
            <input type='text' value={this.state.addressOne} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Expiration Date</label>
            <input type='text' value={this.state.addressTwo} onChange={this.handleChange}/>
        </form>
        <form>
          <label>CVV</label>
            <input type='text' value={this.state.city} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Billing Zip Code</label>
            <input type='text' value={this.state.state} onChange={this.handleChange}/>
        </form>
        <button value={'F4'} onClick={this.props.handleClick}>Next</button>
      </div>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);

  }

  render() {
    return (
      <div>

        <button value={'F4'} onClick={this.props.handleClick}>Next</button>
      </div>
    )
  }
}