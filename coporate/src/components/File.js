import React, {Component} from 'react';

// import './First.css';

class File extends Component{


  render(){

    return(
        <form className="pop">
          <div className="gimg"></div>
          {/* <input type="image" alt="submit"></input> */}
          <div className="filebox">
            <label htmlFor ="file">사진을 선택해주세요.</label>
            <input type="file" id="file" name="file" size="200" accept=".jpg, .jpeg, .png" className="upload"></input>
          </div>
          <div className="group">
            <label htmlFor ="name" className="gtit"> 그룹이름</label>
            <input type="text" name="gname" className="gname"></input>
            <label htmlFor ="name" className="gtit"> 그룹소개</label>
            <input type="text" name="gintro" className="gintro"></input>
            <p className="send">
              <input type="submit" value="올리기"></input>
              <input type="reset" value="취소"></input>
            </p>
            {this.props.children}
          </div>
      </form>
    );
  }
}

  export default File;