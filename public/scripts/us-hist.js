"use strict";

const usHist = {
  template: `
  <div class="wrapper">
    <h1>US History</h1>
    <a href="#!/home">Home</a>
    <section class="course-page">
      <div>
        <h3>Resources</h3>
        <p></p>
      </div>
    <h3>Questions?...</h3>
    </section>
  </div>
  `,

}

angular
  .module("App")
  .component("usHist", usHist)