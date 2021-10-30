function searchActivities(activities, searchTerm) {
  const lowerSearchTerm = searchTerm.toLowerCase();
  return activities.filter(
    (activity) =>
      activity.city.toLowerCase().includes(lowerSearchTerm) ||
      activity.postalcode.toLowerCase().includes(lowerSearchTerm)
  );
}

export default searchActivities;
