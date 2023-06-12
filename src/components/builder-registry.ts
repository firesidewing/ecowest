import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Footer from "./footer/footer";
import Header from "./header/header";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [

  {
    component: Footer,
    name: "Footer",
    inputs: [],
  },
  {
    component: Header,
    name: "Header",
    inputs: [],
  },
];
