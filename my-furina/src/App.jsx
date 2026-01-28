import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import Habits from "./pages/Habits";
import Schedule from "./pages/Schedule";
import ChatWithFurina from "./pages/ChatWithFurina";
import RootLayout from "./layout/RootLayout";
import MainLayout from "./layout/MainLayout";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Start/>} />

        <Route element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="pomodoro" element={<Pomodoro />} />
          <Route path="habits" element={<Habits />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="chatwithfurina" element={<ChatWithFurina />} />
        </Route>
      </Route>
    )
  );

  return (
      <RouterProvider router={router}/>
  );
};

export default App;
