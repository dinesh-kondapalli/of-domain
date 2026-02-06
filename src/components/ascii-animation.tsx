"use client";

import { useEffect, useRef } from "react";
import { ASCIIAnimation } from "@/lib/ascii-scene";

interface ASCIIAnimationComponentProps {
	scrollerHeight?: number;
	mobileScrollerHeight?: number;
}

export default function ASCIIAnimationComponent({
	scrollerHeight = 6650,
	mobileScrollerHeight = 3325,
}: ASCIIAnimationComponentProps) {
	const animationRef = useRef<ASCIIAnimation | null>(null);
	const outputId = "ascii_output";

	useEffect(() => {
		// Determine actual scroller height
		const isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			);
		const actualHeight = isMobile ? mobileScrollerHeight : scrollerHeight;

		// Set scroller height
		const scroller = document.getElementById("animASCII_scroller");
		if (scroller) {
			scroller.style.height = `${actualHeight}px`;
		}

		// Initialize animation
		const anim = new ASCIIAnimation(outputId);
		animationRef.current = anim;

		anim.init().catch((err) => {
			console.error("Failed to initialize ASCII animation:", err);
		});

		return () => {
			anim.destroy();
			animationRef.current = null;
			// Clear shared assets on unmount so they reload on remount
			if (typeof window !== "undefined") {
				delete (window as unknown as Record<string, unknown>).sharedAssets;
			}
		};
	}, [scrollerHeight, mobileScrollerHeight]);

	return (
		<>
			{/* Sticky ASCII animation output */}
			<pre
				id={outputId}
				style={{
					fontFamily: '"jgs", monospace',
					position: "sticky",
					top: 0,
					zIndex: -1,
					margin: 0,
					padding: 0,
					overflow: "hidden",
					width: "100vw",
					height: "100vh",
					backgroundColor: "white",
				}}
			/>

			{/* Scroll driver element */}
			<div
				id="animASCII_scroller"
				style={{
					display: "block",
					height: `${scrollerHeight}px`,
					pointerEvents: "none",
				}}
			/>
		</>
	);
}
