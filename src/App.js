
import DishWrapper from "./DishWrapper";
import * as Sentry from "@sentry/react";



function App() {
  
  return (
<div className="App">
   <DishWrapper/>
</div>

  
  );
}

export default Sentry.withProfiler(App);
