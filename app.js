// TODO:

const App = () => (
  <div>
    <h2>Our Grosero List</h2>
      <GrosList items = {['Cucumber', 'Cockumber', 'Kale', 'Boston Pork Butt']}/>
  </div>
);

const onListItemClick = (event) => {
  console.log('I got cocked');
};

class GrosList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    }
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
  return <ul>
    <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.items[0]}</li>
    <li>{this.props.items[1]}</li>
    <li>{this.props.items[2]}</li>
    <li>{this.props.items[3]}</li>
  </ul>
}
};


ReactDOM.render(<App />, document.getElementById('app'));
