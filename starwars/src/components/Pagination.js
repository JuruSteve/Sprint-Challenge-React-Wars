import React, { Component } from "react";
import "./Pagination.css";
class Pagination extends Component {
  // constructor() {
  //   super();
  // }
  getNextPage = url => {
    if (url !== null) {
      console.log(url);
      fetch(`${url}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
  };
  render() {
    return (
      <div className="pagination">
        <button className="prev-button">Prev</button>
        {/* <div className="prev">
      </div> */}
        <div className="oneOf">
          <p>1 of 2</p>
        </div>
        {/* <div className="next">
      </div> */}
        <button
          className="next-button"
          onClick={() => {
            if (this.props.nextPage) {
              this.getNextPage(this.props.nextPage);
            }
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
