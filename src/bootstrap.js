import React from "react";
import { createRoot } from "react-dom/client";
import WidgetCounter from "./WidgetCounter";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<WidgetCounter />);
