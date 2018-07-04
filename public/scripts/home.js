"use strict";

const home = {
  template: `
  <div class="wrapper">
    <h1>Headline</h1>
    <section>
      <div class="announcements">
        <h3>Announcements!</h3>
      </div>
      <div>
        <div class="course-list">
          <h3>My Courses</h3>
          <a href="#!/us-hist">US History</a>
        </div>
        <div class="questions">
          <h3>Questions?...</h3>
        </div>
      </div>
      <div class="about">
        <h3>About Me</h3>
      </div>
    </section>
  </div>
  `,

}

angular
  .module("App")
  .component("home", home)