"use client";

import { useEffect, useRef, useState } from "react";
import { ASCIIAnimation } from "@/lib/ascii-scene";

interface ASCIIAnimationComponentProps {
  scrollerHeight?: number;
  mobileScrollerHeight?: number;
}

export default function ASCIIAnimationComponent({
  scrollerHeight = 8000,
  mobileScrollerHeight = 5000,
}: ASCIIAnimationComponentProps) {
  const animationRef = useRef<ASCIIAnimation | null>(null);
  const outputId = "ascii_output";
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initAnimation() {
      try {
        const isMobile = typeof window !== "undefined" && 
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          );
        const actualHeight = isMobile ? mobileScrollerHeight : scrollerHeight;

        const scroller = document.getElementById("animASCII_scroller");
        if (scroller) {
          scroller.style.height = `${actualHeight}px`;
        }

        const anim = new ASCIIAnimation(outputId);
        animationRef.current = anim;

        await anim.init();
        
        console.log("ASCII animation initialized successfully");
      } catch (err) {
        if (isMounted) {
          const errorMsg = err instanceof Error ? err.message : "Failed to initialize animation";
          setError(errorMsg);
          console.error("ASCII Animation Error:", err);
        }
      }
    }

    initAnimation();

    return () => {
      isMounted = false;
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
      if (typeof window !== "undefined") {
        delete (window as unknown as Record<string, unknown>).sharedAssets;
      }
    };
  }, [scrollerHeight, mobileScrollerHeight]);

  if (error) {
    return (
      <div style={{ 
        width: "100%", 
        minHeight: "100vh", 
        backgroundColor: "#f5f2ed",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "red",
        fontFamily: "monospace",
        padding: "20px",
        textAlign: "center"
      }}>
        <div>
          <strong>ASCII Animation Error:</strong>
          <pre style={{ marginTop: "10px", fontSize: "12px" }}>{error}</pre>
        </div>
      </div>
    );
  }

  return (
    <>
      <pre
        id={outputId}
        style={{
          fontFamily: '"jgs", monospace',
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          margin: 0,
          padding: 0,
          overflow: "hidden",
          width: "100%",
          height: "100vh",
          backgroundColor: "#f5f2ed",
          color: "#000000",
          fontSize: "18px",
          lineHeight: "18px",
          whiteSpace: "pre",
          pointerEvents: "none",
        }}
      />

      <div
        id="animASCII_scroller"
        style={{
          width: "100%",
          height: `${scrollerHeight}px`,
        }}
      />
    </>
  );
}
