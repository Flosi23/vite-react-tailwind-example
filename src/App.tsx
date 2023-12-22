import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TextDisplay from "@components/typography/TextDisplay.tsx";
import TextLabel from "@components/typography/TextLabel.tsx";
import TextBody from "@components/typography/TextBody.tsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-6">
			<div className="flex items-center gap-4">
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="w-20" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="w-20" alt="React logo" />
				</a>
			</div>
			<TextDisplay size="small">Vite + React</TextDisplay>
			<div className="card rounded-xl bg-surface-container p-6 text-center ">
				<button
					className="mb-3 rounded-lg bg-primary p-2 text-on-primary active:scale-95"
					onClick={() => setCount((count) => count + 1)}>
					<TextLabel size="medium">count is {count}</TextLabel>
				</button>
				<TextBody size="small">
					Edit <code className="text-primary">src/App.tsx</code> and
					save to test HMR
				</TextBody>
			</div>
			<TextBody size="small">
				Click on the Vite and React logos to learn more
			</TextBody>
		</div>
	);
}

export default App;
