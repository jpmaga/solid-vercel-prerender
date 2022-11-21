import { Title } from "solid-start";
import { HttpHeader } from "solid-start/server";
import Counter from "~/components/Counter";

export function Home2() {
  return `Hello world`
}

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps. {Date.now()}
      </p>
    </main>
  );
}
