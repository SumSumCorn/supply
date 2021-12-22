import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div id="content">
        <h1>제품 등록</h1>
        <p>제품 추적 전 등록해야합니다!</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.assetName.value;
            this.props.createAsset(name);
          }}
        >
          <div className="form-group mr-sm-2">
            <input
              id="assetName"
              type="text"
              ref={(input) => {
                this.assetName = input;
              }}
              className="form-control"
              placeholder="제품등록"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            제품 추가
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
