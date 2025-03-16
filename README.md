# 25 + 5 Clock  

## 📝 **Overview**  
This is a **25 + 5 Clock** project built with **React**. The goal is to create a functional Pomodoro-style clock that meets all the specified requirements and passes all FreeCodeCamp tests.  

## 🚀 **Objective**  
Build an app that is functionally similar to this: [25 + 5 Clock](https://25--5-clock.freecodecamp.rocks).  
- The app should pass all tests from the FreeCodeCamp test suite.  
- Use **React** as the frontend framework.  
- Add your own personal style to the project.  

## ✅ **User Stories**  
**User Story #1:** I can see an element with `id="break-label"` containing a string (e.g., "Break Length").  

**User Story #2:** I can see an element with `id="session-label"` containing a string (e.g., "Session Length").  

**User Story #3:** I can see two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.  

**User Story #4:** I can see two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.  

**User Story #5:** I can see an element with `id="break-length"`, which displays a default value of **5** when loaded.  

**User Story #6:** I can see an element with `id="session-length"`, which displays a default value of **25**.  

**User Story #7:** I can see an element with `id="timer-label"`, containing a string indicating that a session is initialized (e.g., "Session").  

**User Story #8:** I can see an element with `id="time-left"`. Note: Whether the timer is paused or running, the value should always display in **mm:ss** format (e.g., 25:00).  

**User Story #9:** I can see a clickable element with `id="start_stop"`.  

**User Story #10:** I can see a clickable element with `id="reset"`.  

**User Story #11:** When I click the `reset` button, any running timer should stop, `break-length` should return to **5**, `session-length` should return to **25**, and `time-left` should reset to its default state.  

**User Story #12:** When I click the `break-decrement` button, the value in `break-length` should decrease by **1** and display the updated value.  

**User Story #13:** When I click the `break-increment` button, the value in `break-length` should increase by **1** and display the updated value.  

**User Story #14:** When I click the `session-decrement` button, the value in `session-length` should decrease by **1** and display the updated value.  

**User Story #15:** When I click the `session-increment` button, the value in `session-length` should increase by **1** and display the updated value.  

**User Story #16:** I should not be able to set a session or break length to **0** or below.  

**User Story #17:** I should not be able to set a session or break length to more than **60**.  

**User Story #18:** When I first click the `start_stop` button, the timer should start counting down from the value currently displayed in `session-length`, even if it has been changed from the original value of **25**.  

**User Story #19:** If the timer is running, the element with `id="time-left"` should display the remaining time in **mm:ss** format, decrementing by **1 second** and updating every **1000ms**.  

**User Story #20:** If the timer is running and I click the `start_stop` button, the countdown should pause.  

**User Story #21:** If the timer is paused and I click the `start_stop` button, the countdown should resume from where it was paused.  

**User Story #22:** When a session countdown reaches **00:00** and a new countdown begins, the element with `id="timer-label"` should display a string indicating that a break has started.  

**User Story #23:** When a session countdown reaches **00:00**, a new break countdown should begin, counting down from the value currently displayed in the `break-length` element.  

**User Story #24:** When a break countdown reaches **00:00** and a new countdown begins, the element with `id="timer-label"` should display a string indicating that a session has started.  

**User Story #25:** When a break countdown reaches **00:00**, a new session countdown should begin, counting down from the value currently displayed in the `session-length` element.  

**User Story #26:** When a countdown reaches **00:00**, a sound indicating that time is up should play. This should use an HTML5 `audio` tag with `id="beep"`.  

**User Story #27:** The audio element with `id="beep"` must be **1 second** or longer.  

**User Story #28:** The audio element with `id="beep"` must stop playing and rewind to the beginning when the `reset` button is clicked.  