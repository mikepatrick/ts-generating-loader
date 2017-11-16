import { DummyContent, DummyClass } from './example.api';

const x: number = 42;
const message: string = `Hello ${x}`;
document.getElementById("root").innerHTML = message;

var dummy = new DummyClass();
dummy.printMessage();
dummy.setContent({name: "Mike"});

var y: number = 12;