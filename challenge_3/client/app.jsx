class App extends React.Component {
  constructor(props) {
    super(props);

    // reformat to have only one item and have that change the string based on what page I'm showing - ben pernick
    this.state = {
      currentPage: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.value);
    // this.changePage(event.target.value);
    this.setState({
      currentPage: event.target.value
    })
  }

  componentDidMount() {
    this.setState({
      currentPage: 'homepage'
    });
  }

  changePage(toggleKey) {
    // // create a copy of the this.state object to modify
    // var stateCopy = {...this.state};
    // // create a variable to be the opposite of the boolean value for the input key
    // var nextValue = !stateCopy[toggleKey];
    // // iterate over every key in this.state copy
    // // Object.keys(stateCopy).forEach(key => stateCopy[key] = false);
    // Object.keys(stateCopy).forEach(function(key) {
    //   if (typeof stateCopy[key] === 'boolean') {
    //     stateCopy[key] = false;
    //   }
    // }
    // stateCopy[toggleKey] = nextValue;
    this.setState({
      currentPage: toggleKey
    });
  }

  addData(data) {

  }

  render() {
    // create variables and if statements that will show different forms
    // var page;
    // if (this.state = {
    //   homepage: true,
    //   F1: false,
    //   F2: false,
    //   F3: false,
    //   confirmation: false
    // }) {
    //   page = <button onClick={this.handleClick}>Checkout</button>
    // } else if (
    //   this.state = {
    //     homepage: false,
    //     F1: true,
    //     F2: false,
    //     F3: false,
    //     confirmation: false
    //   }
    // ) {
    //   page = <FormOne />
    // }

    return (
      <div>
        {this.state.currentPage === 'homepage' ? <HomePage handleClick={this.handleClick}/> : null}
        {this.state.currentPage === 'F1' ? <FormOne handleClick={this.handleClick}/> : null}
        {this.state.currentPage === 'F2' ? <FormTwo handleClick={this.handleClick}/> : null}
        {this.state.currentPage === 'F3' ? <FormThree handleClick={this.handleClick}/> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

function HomePage(props) {
  return(
    <div>
      <button value={'F1'} onClick={props.handleClick}>Checkout</button>
    </div>
  )
}

class FormOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
            <input type='text' value={this.state.name} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Email</label>
            <input type='text' value={this.state.email} onChange={this.handleChange}/>
        </form>
        <form>
          <label>Password</label>
            <input type='text' value={this.state.password} onChange={this.handleChange}/>
        </form>
        <button value={'F2'} onClick={this.props.handleClick}>Next</button>
      </div>
    )
  }
}

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