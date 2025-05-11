
const validIncident = {
  reported_by: "user_123",
  location_id: "loc_456",
  incident_type: "accident",
  severity: 4,
  description: "Pile-up on N1 highway.",
  image_url: ""
};

const constructionIncident = {
  reported_by: "user_124",
  location_id: "loc_457",
  incident_type: "construction",
  severity: 2,
  description: "Road construction near Sunnyside.",
  image_url: ""
};

const roadblockIncident = {
  reported_by: "user_125",
  location_id: "loc_458",
  incident_type: "roadblock",
  severity: 3,
  description: "Police roadblock spotted on R21.",
  image_url: ""
};

const incompleteIncident = {
  reported_by: "user_126",
  location_id: "loc_459",
  severity: 1,
  description: " "
};

const emptyIncident = {};

module.exports = {
  validIncident,
  constructionIncident,
  roadblockIncident,
  incompleteIncident,
  emptyIncident
};
