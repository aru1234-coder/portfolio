import { RainbowButton } from "@/components/magicui/RainbowButton";

export default function RainbowButtonDemo() {
  return (
    <>
      <div className="flex gap-x-2">
        <RainbowButton>Next.js</RainbowButton>
        <RainbowButton>Node.js</RainbowButton>
        <RainbowButton>Javascript</RainbowButton>
        <RainbowButton>MySQL</RainbowButton>
        <RainbowButton>Git</RainbowButton>
        <RainbowButton>TailwindCSS</RainbowButton>
        <RainbowButton>HTML / CSS</RainbowButton>
      </div>
    </>
  );
}
