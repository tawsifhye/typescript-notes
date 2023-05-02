"use strict";
// & is used for Intersection
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "Tawsif"
};
const developer = {
    name: "Tawsif",
    expertise: "React",
    experience: 4,
    leadershipExperience: 2,
    level: Level.junior
};
