import React from "react";

function Loading() {
  return (
    <center>
      <div className="loadingBar">
        <div class="spinner-grow text-primar spin" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary spin" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success spin" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger spin" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning spin" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info spin" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark spin" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
}

export default Loading;
