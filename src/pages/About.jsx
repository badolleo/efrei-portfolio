import myself from '../config/myself.json'
import '../App.css'

export default function About() {
  return (
    <div className="about-container px-[1.5rem] pt-8 flex flex-col items-start gap-6">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p>{myself.aboutDescription}</p>
    </div>
  );
}