const registerResponse = {
  status: 201,
  body: {
    user_id: "user_123",
    token: "jwt-token-example",
    message: "User registered successfully"
  }
};

const loginSuccessResponse = {
  status: 200,
  body: {
    token: "jwt-token-example",
    message: "Login successful"
  }
};

const loginFailureResponse = {
  status: 401,
  body: {
    error: "Invalid credentials"
  }
};

const incidentReportSuccess = {
  status: 201,
  body: {
    incident_id: "inc_001",
    message: "Incident reported and alerts triggered"
  }
};

const incidentReportError = {
  status: 400,
  body: {
    error: "Missing incident_type field"
  }
};

const heatmapApiResponse = {
  status: 200,
  body: [
    { lat: -25.748, lon: 28.189, incident_count: 5 },
    { lat: -25.749, lon: 28.187, incident_count: 8 }
  ]
};

module.exports = {
  registerResponse,
  loginSuccessResponse,
  loginFailureResponse,
  incidentReportSuccess,
  incidentReportError,
  heatmapApiResponse
};
