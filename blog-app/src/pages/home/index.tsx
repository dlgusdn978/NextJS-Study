import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div className="">나의 글</div>
      </div>
      <div className="post-list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">작성자</div>
                <div className="post__date">2000.01.01</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">임시 텍스트입니다.</div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__modify">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </div>
  );
}
