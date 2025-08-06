import React, { useState } from 'react';

const Weekday = () => {
  const [show, setShow] = useState<string>("");

  
  const handleWeekday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dated = e.target.value;
    const day = new Date(dated).getDay();

    if (day === 0) setShow("Sunday");
    if (day === 1) setShow("Monday");
    if (day === 2) setShow("Tuesday");
    if (day === 3) setShow("Wednesday");
    if (day === 4) setShow("Thursday");
    if (day === 5) setShow("Friday");
    if (day === 6) setShow("Saturday");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#121212",
        color: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 11px rgba(255,255,255,0.1)",
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#1e94f4ff" }}>Select a Date</h2>

        <input
          type="date"
          onChange={handleWeekday}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #444",
            backgroundColor: "#2c2c2c",
            color: "#f0f0f0",
            marginBottom: "20px",
            width: "100%",
          }}
        />

        {show.length > 0 && (
          <h1 style={{ marginTop: "10px", color: "#00ff0dff" }}>The day is {show}</h1>
        )}
      </div>
    </div>
  );
};

export default Weekday;
