# Rick & Morty React Challenge

![Uploading r&m.gif…]()

<p>Relaxing and stress relieving are inseparable parts of the developer’s intense and challenging daily life. Watching TV shows is one of our favourite ways to relax and “Rick and Morty” is the #1 show in the animation/science genre at the moment. We bet you like it too and if don’t this is because you have never seen it. The series follows the misadventures of cynical mad
scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. Your goal is to create a web application, consuming the provided “Rick and Morty” api, which can be found here:
</p>

<p>https://rickandmortyapi.com/</p>
<p>and containing the following pages:</p>

<ul>
    <li>SIMPLE LOGIN / REGISTER PAGE
            <ul>
                <li>The idea is to implement a really simple login page which will only ask the user for his name and will store it somewhere locally. The form needs to validate the name (alphabet characters only). Do not let the user enter if he doesn’t have a name and check for already stored name on refresh.</li>
                <li>On log out simply clear the stored name.</li>
            </ul>
     </li>
 </ul>

 <ul>
    <li>ALL EPISODES PAGE
            <ul>
                <li>Fetch and render all episodes. Since the api is paginated you have two approaches here:
 - Fetch everything from the api, render the data and implement some sorting mechanisms (air_date / name)
- Stick with the api pagination and implement front end pagination.</li>
                <li>You need to show the very basic info for each episode (name, air_date...)</li>
                <li>When the user click on single episode take them to the detailed view of the episode containing all of the characters who have been seen in the episode.</li>
            </ul>
     </li>
 </ul>

 <ul>
    <li>EPISODE DETAILS PAGE
            <ul>
                <li>For each character you need to render the following info:
- Name
- Status
- Species
- Origin
- Location
- Gender (Optional) - Image (Optional)</li>
                <li>When the user click on character “Origin” or “Location” take them to the detailed view of the location containing all of the characters who have been last seen in the location.</li>
            </ul>
     </li>
 </ul>

 <ul>
    <li>LOCATION DETAILS PAGE
            <ul>
                <li>Show some basic info about the location.</li>
                <li>For each resident reuse the logic from the “Episode details page” about the characters and render the same information.</li>
            </ul>
     </li>
 </ul>

 <ul>
    <li>CHARACTER SEARCH PAGE
            <ul>
                <li>mplement a character searching page where the user can search his favourite characters by their name.</li>
            </ul>
     </li>
 </ul>

<h2>CONSTRAINS & GUIDANCE</h2>
<p>Use React, and use a tool to bootstrap the project.</p>
<p>Using React hooks is a big bonus.</p>
<p>Use react navigation for page handling.</p>
<p>Using ES6/7 is a bonus.</p>
<p>Using TS is a bonus.</p>
<p>The provided api offers both REST and GraphQL endpoints. It’s up to you which one you will use. (We are huge fans of GraphQL)</p>
<p>Using material-ui / react-bootstrap / styled-components is a bonus.</p>
<p>Using a state management library is a bonus.</p>
<p>The cleaner the code - the better! Eslint / TS-Lint is a bonus</p>
<p>Feel free to use any 3rd party library.</p>
