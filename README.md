# Looper App by Tal Cohen
React.js is used to build "Looper" as a SPA (Single Page App).

The application consists of a Header and Footer to define the correct structure of the application, and in Main, there is the Looper component.

At the top of the page are the Play and Stop buttons. Play button activates the run of the interval set at 120 BPM.  The stop button clears the interval and returns it to null.
Every Sample/loop has 2 bars. 

When the bar is turned on by click and the play button is pressed, the audio will play in a loop until the pause button is pressed. 

When you click again on the bar, it turns the bar off, and the sample will be pause.
In the looper, I have the local state (BPM, state of loops, index).

This state is managed by using the useState of React Hooks for its state/logic.
