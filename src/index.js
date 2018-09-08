import {Flowcharty} from "./flowcharty";

if (typeof window !== "undefined") {
  !window.Flowcharty && (window.Flowcharty = Flowcharty);
}