"use client"

import { useEffect, useState } from "react"

export const DraftModeNotification = () => {
  const [isDraftMode, setIsDraftMode] = useState(false)

  useEffect(() => {
    // Basic check for draft mode.  A real implementation would likely
    // involve checking a cookie or some other more robust mechanism.
    setIsDraftMode(window.location.search.includes("__draft_mode"))
  }, [])

  if (!isDraftMode) {
    return null
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
        padding: "0.5rem",
        zIndex: 1000,
      }}
    >
      Draft Mode is Active
    </div>
  )
}
