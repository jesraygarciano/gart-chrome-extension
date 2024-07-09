import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        height: "568px",
        width: "618px",
        backgroundColor: "rgba(32, 34, 36, 1)",
        backgroundImage: `url(${chrome.runtime.getURL("assets/center-bg.png")})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        color: "#fff"
      }}>
      <img
        src={chrome.runtime.getURL("assets/dpro-icon.png")}
        alt="Icon"
        style={{ width: 246, marginBottom: 20 }}
      />
      <h2>
        Welcome to your{" "}
        <a
          href="https://www.plasmo.com"
          target="_blank"
          style={{ color: "#61dafb" }}>
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      {/* <input
        onChange={(e) => setData(e.target.value)}
        value={data}
        style={{
          marginTop: 20,
          padding: 8,
          borderRadius: 4,
          border: "1px solid #ccc",
          width: "80%"
        }}
      /> */}
      <a
        href="https://docs.plasmo.com"
        target="_blank"
        style={{ marginTop: 20, color: "#61dafb" }}>
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
