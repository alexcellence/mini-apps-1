class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homepage: true,
      F1: false,
      F2: false,
      F3: false,
      confirmation: false,
      formOne: [],
      formTwo: [],
      formThree: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.changePage(event.target.value);
  }

  componentDidMount() {
    this.setState({
      homepage: true,
      F1: false,
      F2: false,
      F3: false,
      confirmation: false,
      formOne: [],
      formTwo: [],
      formThree: []
    });
  }

  changePage(toggleKey) {
    var stateCopy = {...this.state};
    var nextValue = !stateCopy[toggleKey];
    Object.keys(stateCopy).forEach(key => stateCopy[key] = false);
    stateCopy[toggleKey] = nextValue;
    this.setState(stateCopy);
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
        {this.state.homepage === true ? <HomePage handleClick={this.handleClick}/> : null}
        {this.state.F1 === true ? <FormOne handleClick={this.handleClick}/> : null}
        {this.state.F2 === true ? <FormTwo handleClick={this.handleClick}/> : null}
        {this.state.F3 === true ? <FormThree handleClick={this.handleClick}/> : null}
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