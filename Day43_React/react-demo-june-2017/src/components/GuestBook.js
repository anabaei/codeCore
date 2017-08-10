import React, {Component} from 'react';

class GuestBook extends Component {
  constructor (props) {
    super(props);

    this.state = {
      entries: []
    };

    this.addEntry = this.addEntry.bind(this);
  }

  addEntry (event) {
    event.preventDefault();

    const {entries} = this.state;
    const {currentTarget} = event;
    const fData = new FormData(currentTarget);

    this.setState({
      entries: entries.concat([{
        message: fData.get('message'),
        name: fData.get('name'),
        date: new Date().toString()
      }])
    },
    // this.setState can take an optional second argument which is a callback
    // that is called once the state has successfully updated.
    () => { currentTarget.reset() }
  );
  }

  renderEntries () {
    return this.state.entries.map(
      (entry, index) => (
        <div
          key={index}
          style={{
            backgroundColor: index % 2 ? 'White' : 'WhiteSmoke',
            padding: '5px'
          }}>
          <p>{entry.message}</p>
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Date:</strong> {entry.date}</p>
        </div>
      )
    )
  }

  render () {
    return (
      <div className='GuestBook'>
        <h1>Guest Book</h1>

        <div className='GuestBookEntries'>
          {this.renderEntries()}
        </div>

        <form onSubmit={this.addEntry}>
          <div>
            <label htmlFor='message'>Message</label> <br />
            <textarea id='message' name='message' />
          </div>

          <div>
            <label htmlFor='name'>Name</label> <br />
            <input id='name' name='name' />
          </div>

          <div>
            <input type='submit' value='submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default GuestBook;
