import { simulateLogin } from "../utils";

function PageHome() {
   const {username} = simulateLogin();
   return (
      <main id="home-page">
         <h2>Welcome back, {username}!</h2>
         <p>display block - articles</p>
         <p>display block - topics</p>
      </main>
   );
}

export default PageHome;
