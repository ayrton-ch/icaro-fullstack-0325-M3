import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert debe usarse dentro de AlertProvider");
  }
  return context;
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = "success") => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <div
          className={`alert alert-${alert.type} position-fixed top-0 start-50 translate-middle-x mt-3 shadow-lg`}
          style={{ zIndex: 9999, minWidth: "300px" }}
          role="alert"
        >
          <div className="d-flex align-items-center">
            <span className="me-2">
              {alert.type === "success" && "✅"}
              {alert.type === "danger" && "❌"}
              {alert.type === "warning" && "⚠️"}
              {alert.type === "info" && "ℹ️"}
            </span>
            <strong>{alert.message}</strong>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};
