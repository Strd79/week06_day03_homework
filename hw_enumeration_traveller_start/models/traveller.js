const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    if (journey.transport === transport) {
      return journey;
    };
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    if (journey.distance > minDistance) {
      return journey;
    };
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return total;
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//  const modesOfTransport = this.journeys.map((journey) => {
//   return journey.transport;
//  });
//  const uniqueModesOfTransport = modesOfTransport.filter((transport, index) => {
//     modesOfTransport.indexOf(transport) === index;
// });
//   return uniqueModesOfTransport;
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  });
  const uniqueModesOfTransport = [...new Set(modesOfTransport)];
  return uniqueModesOfTransport;
};


module.exports = Traveller;
