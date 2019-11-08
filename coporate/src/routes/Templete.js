import React from 'react';

import './Templete.css';
import File from "../components/File";

const Templete = () => {
  return (
    <div>
      {/* 구분선 */}
      <hr className="hrline"></hr>
      {/* 그룹만들기창 */}
      <File></File>
      
      {/* <form className="pop">
          <div className="gimg"></div>
          <div className="filebox">
            <label for="file">사진을 선택해주세요.</label>
            <input type="file" id="file" name="file" size="200" accept=".jpg, .jpeg, .png" className="upload"></input>
          </div>
          <div className="group">
            <label for="name" className="gtit"> 그룹이름</label>
            <input type="text" name="gname" className="gname"></input>
            <label for="name" className="gtit"> 그룹소개</label>
            <input type="text" name="gintro" className="gintro"></input>
            <p className="send">
              <input type="submit" value="올리기"></input>
              <input type="reset" value="취소"></input>
            </p>
          </div>
      </form>
       */}
      {/* 터지방지막 */}
      <div className="block"></div>

    </div>
  );
};

export default Templete;