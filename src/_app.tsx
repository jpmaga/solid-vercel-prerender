import { useLocation, useServerContext } from "solid-start"
import err404 from "./routes/404"
import about from "./routes/about"
import index from "./routes"
import { createEffect, createMemo } from "solid-js"
const modules = {
  "/about": about,
  "/": index
}

export default function App() {
  const location = useLocation()
  const bp = createMemo(() => modules[location.pathname] ?? err404)
  const event = useServerContext();


  return (<div>
    <div>
      <pre>
        {JSON.stringify(location, null, 2)}
      </pre>
    </div>

    <div>
      <pre>
        {JSON.stringify(event, null, 2)}
      </pre>
    </div>
    {bp()}
    {/* <Blueprint/> */}

    </div>)
}
