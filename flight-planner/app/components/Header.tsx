'use client';
import Button from "./Button";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <Button onClick={() => console.log("clicked")} text="Flight Plan" link="/flightPlan"/>
      <Button onClick={() => console.log("clicked")} />
    </header>
  );
}
