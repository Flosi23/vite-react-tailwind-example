import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="min-w-screen min-h-screen bg-surface">
			<App />
		</div>
	</React.StrictMode>,
);
