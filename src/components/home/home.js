import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            username: sessionStorage.getItem('logged-in-user'),
            // isAuthenticated : sessionStorage.getItem('isAuthenticated')
          };
    }

/*componentDidMount() {
axios.get('http://localhost:3001/my-pets').then(data =>{ let posts = data.data.map((post, index) => {
    return(
        <tr key = {index}>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.age}</td>
            <td>{post.category}</td>
        </tr>
    )
})
this.setState({posts:posts});
});
}*/

componentDidMount() {
    axios.get('http://localhost:3001/mypets?username='+ this.state.username).then(data => {
      let mypets = data.data.map((pets, index) => {
        return (
          <tr key={index}>
            <td>{pets.petId}</td>
            <td>{pets.petName}</td>
            <td>{pets.petAge}</td>
            <td>{pets.petCategory}</td>
          </tr>
        )
      })
      this.setState({ mypets: mypets });
    });
    }

    /*
handleSubmit = (e) => {
    console.log(this.state);
    this.props.history.push('/AddPets')
} */

// render() {
//     return (
//         <div className = "container">
//             <table className = "table">
//                 <thead className = "thead-dark">
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Category</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {this.state.posts}
//                 </tbody>
//             </table>
//             <button  className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
        
//         </div>
//     )
// }
// }

render() {
    
    // if(this.state.isAuthenticated === "true"){
    //   console.log(this.state.isAuthenticated);
      return (
        <div className="container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>From</th> 
                <th>To</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.mypets}
            </tbody>
          </table>
        </div>
      );
    // } else {
    //   return <h1>Please Login</h1>
    // }
  }
}


export default Home